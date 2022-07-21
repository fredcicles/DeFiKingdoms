import { decodeRecessiveGenesAndNormalize } from '@thanpolas/degenking/src/heroes-helpers/recessive-genes.ent'
import { getHeroById } from '../../services/hero.service'
import { calcuateSummonCost } from '../../helpers/prices.helper'
import { getMutationClass } from '../../helpers/genes.helpers'
import { CamelCase, PascalCase } from '../../helpers/format.helpers'

export const getMainHero = async id => {
    const data = await getHeroById(id)

    if (!data.heroes.length) return null

    const hero = decodeRecessiveGenesAndNormalize(data.heroes)[0]
    sheerFix(hero)
    hero.displayId = hero.id.length === 13 ? Number(hero.id.slice(1)).toString() : hero.id
    hero.summonCost = calcuateSummonCost(hero)
    hero.mutationClass = getMutationClass(CamelCase(hero.mainClass))

    return hero
}

export const sortAndFilterHeroes = (heroes, filters, sortBy, mutationClass) => {
    let sortedHeroes = heroes

    // Skip filtering and sorting if there are no records
    if (!heroes.length) return sortedHeroes

    const summonClass = PascalCase(mutationClass)

    // Filter based on filter criteria
    sortedHeroes = sortedHeroes.filter(hero => {
        const remainingSummons = !filters.summonsRemaining || Number(hero.summonsRemaining) >= Number(filters.summonsRemaining)
        const maxSummons = !filters.maxSummons || Number(hero.maxSummons) >= Number(filters.maxSummons)
        const minGen = !filters.minGen || filters.minGen === '' || Number(hero.generation) >= Number(filters.minGen)
        const maxGen = !filters.maxGen || filters.maxGen === '' || Number(hero.generation) <= Number(filters.maxGen)
        const mainClass = filters.includeSummonClass || hero.mainClass !== summonClass
        const classMatch = !filters.classMatch || hero.mainClassGenes[0] === hero.mainClassGenes[1]
        const subclassMatch = !filters.subclassMatch || hero.subClassGenes[0] === hero.subClassGenes[1]
        const professionMatch = !filters.professionMatch || hero.professionGenes[0] === hero.professionGenes[1]

        return maxSummons && remainingSummons && minGen && maxGen && mainClass && classMatch && subclassMatch && professionMatch
    })

    // Heroes are sorted by Probability by default, only sort here if a different sorting is requested
    sortedHeroes = sortBy === 'probability' ?
        sortedHeroes.sort((a, b) => a.targetProbability > b.targetProbability ? -1 : a.targetProbability < b.targetProbability ? 1 : 0) :
        sortedHeroes.sort((a, b) => {
            if (sortBy === 'price') {
                const aPrice = a.price + (a.auctionType === 'sale' ? 0 : a.summonCost)
                const bPrice = b.price + (b.auctionType === 'sale' ? 0 : b.summonCost)
                return aPrice > bPrice ? 1 : aPrice < bPrice ? -1 : 0
            }
            if (sortBy === 'summonsLeft'){
                const aSummons = a.maxSummons
                const bSummons = b.maxSummons
                return aSummons < bSummons ? 1 : aSummons > bSummons ? -1 : 0
            }
            if (sortBy === 'generation'){
                const aGeneration = a.generation
                const bGeneration = b.generation
                return aGeneration > bGeneration ? 1 : aGeneration < bGeneration ? -1 : 0
            }

            return 0
        })

    return sortedHeroes
}

export const sheerFix = (hero) => {
    const fix = (genes) => {
        for (let i = 0; i < genes.length; i++) {
            if (genes[i] === 'sheer') genes[i] = 'seer'
        }
    }

    fix(hero.mainClassGenes)
    fix(hero.subClassGenes)
}