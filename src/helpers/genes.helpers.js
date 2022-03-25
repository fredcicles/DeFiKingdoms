import { getHeroTier } from '@thanpolas/dfk-hero/src/heroes-helpers/summon-utils.ent'
import { classMutationPairings } from '../constants/hero-classes.const'
import { CamelToPascal } from '../helpers/format.helpers'

const dominantGeneProbabilities = [0.75, 0.1875, 0.046875, 0.015625]

const mutationProbabilities = {
    'basic': 0.25,
    'advanced': 0.25,
    'elite': 0.125,
    'exalted': 0.125
}

const getPotentialDominantGenes = heroGenes => {
    return heroGenes.map((name, i) => ({ name, value: dominantGeneProbabilities[i] }))
}

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
const getMutations = (hero1, hero2) => {
    const mutations = []

    for (let currentGene = 0; currentGene < 4; currentGene++) {
        // 2. Mutable dominant gene
        const mutation = getMutationProbability(hero1[currentGene], hero2[currentGene])

        // 3. Adjust dominant gene, if mutation is possible
        if (mutation) {
            mutations.push(mutation)
            hero1[currentGene].value -= mutation.value
            hero2[currentGene].value -= mutation.value
        }
    }

    return condenseGenes(mutations)
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

const lookupMutation = (gene1, gene2) => classMutationPairings.find(pair => gene1 !== gene2 && pair.classes.includes(gene1) && pair.classes.includes(gene2))

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

export const getProbabilityThatHeroesCanSummonTargetClass = (hero1, hero2, targetClass) => {
    const classProbabilities = calculateSummoningGeneProbability(hero1.mainClassGenes, hero2.mainClassGenes)
    return classProbabilities.find(_class => _class.name === targetClass.toLowerCase())
}

export const getPossibleSummonClasses = (parentClass, summonedClass) => {
    const classes = [summonedClass]

    // If the parent and the child are the same class, 2nd parent should be same as 1st parent for highest probability
    if (parentClass.toLowerCase() === summonedClass.toLowerCase()) return classes

    // If the parentClass could mutate to the summonedClass, add the complimentary parent class
    const mutationPairing = classMutationPairings.find(pair => pair.mutation.toLowerCase() === summonedClass.toLowerCase())

    if (mutationPairing) {
        const parentIsMutatable = mutationPairing.classes.find(c => c === parentClass)
        let assistingClass = mutationPairing.classes.find(c => c !== parentClass)

        if (parentIsMutatable)
            classes.push(CamelToPascal(assistingClass))        
    }    

    return classes
}