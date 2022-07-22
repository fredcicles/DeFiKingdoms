import { getHeroTier } from '@thanpolas/degenking/src/heroes-helpers/summon-utils.ent'
import { MUTATION_PAIRS_ARR } from '../constants/constants'

const dominantGeneProbabilities = [0.75, 0.1875, 0.046875, 0.015625]


const mutationProbabilities = {
    'basic': 0.25,
    'advanced': 0.25,
    'elite': 0.125,
    'exalted': 0.125
}


const getPotentialDominantGenes = heroGenes => {
    return condenseGenes(heroGenes.map((name, i) => ({ name, value: dominantGeneProbabilities[i] })))
}


// If the same gene appears in multiple gene slots, combine those in to a single gene/value pair.
// value equals the sum of the multiple slots
const condenseGenes = genes => {
    return genes.reduce((aggregate, current, i) => {
        const match = aggregate.find(existing => existing.name === current.name)

        if (match) {
            match.value += current.value
            return aggregate
        } else {
            return [...aggregate, current]
        }
    }, [])
}


//  - Note: this will update hero1 and hero2 if mutations exist
const getMutations = (hero1Genes, hero2Genes) => {
    const mutations = []

    for (let i = 0; i < hero1Genes.length; i++) {
        for (let j = 0; j < hero2Genes.length; j++) {
            // 2. Mutable dominant gene
            const mutation = getMutationProbability(hero1Genes[i], hero2Genes[j])

            // 3. Adjust dominant gene, if mutation is possible
            if (mutation) {
                mutations.push(mutation)
                hero1Genes[i].value -= mutation.value
                hero2Genes[j].value -= mutation.value
                break
            }
        }
    }

    return mutations
}


const getMutationProbability = (hero1DominantGene, hero2DominantGene) => {
    const mutation = lookupMutation(hero1DominantGene.name, hero2DominantGene.name)

    // If a mutation could occur, then calculate probability
    if (mutation) {
        const mutationProbability = mutationProbabilities[getHeroTier(hero1DominantGene.name)]

        return {
            name: mutation.mutation,
            value: hero1DominantGene.value * hero2DominantGene.value * mutationProbability
        }
    }

    // If no mutation can occur
    return null
}


const lookupMutation = (gene1, gene2) => MUTATION_PAIRS_ARR.find(pair => {
    const m = gene1 !== gene2 &&
        pair.classes.includes(gene1) &&
        pair.classes.includes(gene2)
    return m
})


// Divide the probability value for each gene in half
const halveGenes = genes => genes.forEach(gene => gene.value = gene.value / 2)

const condenseAndSortGenesByHighestProbability = (ranks) =>
    condenseGenes(ranks.hero1.concat(ranks.hero2, ranks.mutations))
        .sort((a, b) => a.value > b.value ? -1 : a.value < b.value ? 1 : 0)




export const calculateSummoningGeneProbability = (hero1GeneNames, hero2GeneNames) => {

    // 1. Probabilities for the potential dominant genes
    const ranks = {
        hero1: getPotentialDominantGenes(hero1GeneNames),
        hero2: getPotentialDominantGenes(hero2GeneNames)
    }

    // 4. Repeat for D, R1, R2, R3
    // 2. Probabilities for potential mutations
    // 3. Adjust parent genes, if mutation is possible
    //  - Note: this will update hero1 and hero2 if mutations is possible
    ranks.mutations = getMutations(ranks.hero1, ranks.hero2)

    // 5. Halve all of the parent genes
    halveGenes(ranks.hero1)
    halveGenes(ranks.hero2)

    // 6. Combine all the genes
    return condenseAndSortGenesByHighestProbability(ranks)
}

export const getProbabilityThatHeroesCanSummonTargetGene = (hero1Genes, hero2Genes, targetClass) => {
    const classProbabilities = calculateSummoningGeneProbability(hero1Genes, hero2Genes)
    return classProbabilities.find(_class => _class.name.toLowerCase() === targetClass.toLowerCase())
}

export const getPossibleSummonClasses = (parentClass, summonedClass, include) => {
    const classes = [summonedClass]

    // If the parent and the child are the same class, 2nd parent should be same as 1st parent for highest probability
    if (parentClass === summonedClass) return classes

    // If the parentClass could mutate to the summonedClass, add the complimentary parent class
    const mutationPairing = MUTATION_PAIRS_ARR.find(pair => pair.mutation === summonedClass)

    if (mutationPairing) {
        const parentIsMutatable = mutationPairing.classes.find(c => c === parentClass)
        let assistingClass = mutationPairing.classes.find(c => c !== parentClass)

        if (parentIsMutatable)
            classes.push(assistingClass)
    }

    return classes
}

// Retrieves the mutation class for the specified base class
export const getMutationClass = heroClass => {
    return MUTATION_PAIRS_ARR.find(pair => pair.classes.includes(heroClass))?.mutation
}
