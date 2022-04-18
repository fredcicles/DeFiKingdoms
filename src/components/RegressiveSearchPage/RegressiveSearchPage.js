import React, { useState } from 'react'
import { decodeRecessiveGenesAndNormalize } from '@thanpolas/dfk-hero/src/heroes-helpers/recessive-genes.ent'
import { getHeroesChain } from '@thanpolas/dfk-hero'
import { getHeroDataByAuction } from '../../services/auction.service'
import { getProbabilityThatHeroesCanSummonTargetGene, getPossibleSummonClasses } from '../../helpers/genes.helpers'
import HeroSnapshot from '../HeroSnapshot'
import SortFilter from '../SortFilter/SortFilter'
import SummonsMatchList from '../SummonsMatchList'
import SummonsMatchSearchForm from '../SummonsMatchSearchForm'
import './styles.css'

const statusMessages = [
    'Now there is an interesting fellow.',
    'Oh, the Tavern has Perch Porter on draft.',
    'Chatting with Agent Selina.  She is such a sweetheart!',
    'Are those wings on her back, or she just harpy to see me?',
    'Woah, big guy!  Careful with those horns!'
]

const MainHero = ({ hero, view }) => {
    return hero ?
        (<div className='main-hero'>
            <HeroSnapshot hero={hero} title='Main Hero' view={view} />
        </div>) :
        null
}

const LoadingMessage = ({ heroCount, loaded, loading, message }) => {
    const textToDisplay = loading ? message : loaded && !heroCount ? 'No Heroes Found' : null
    return <div className='loading-message'>{textToDisplay}</div>
}

const RegressiveSearchPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [hasLoaded, setHasLoaded] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('')
    const [sortBy, setSortBy] = useState('probability')
    const [filters, setFilters] = useState({})
    const [mainHero, setMainHero] = useState()
    const [heroes, setHeroes] = useState([])
    const [view, setView] = useState('front')

    const delay = ms => new Promise(res => setTimeout(res, ms))

    const setRandomLoadingMessage = () => {
        const randomIndex = Math.floor(Math.random() * statusMessages.length)
        setLoadingMessage(statusMessages[randomIndex])
    }

    // Updates filters
    const handleFiltersChange = filters => {
        setFilters(filters)
    }

    // Looks up the selected Hero
    const handleHeroChange = async heroId => {
        if (heroId) {
            setMainHero()
            const data = await getHeroesChain([heroId])
            setMainHero(data[0])
        }
    }

    // Updates sorting options
    const handleSortByChange = value => {
        setSortBy(value)
    }

    // Creates a new search for the specified search criteria
    const handleSubmit = async searchCriteria => {
        setHeroes([])
        setIsLoading(true)
        setRandomLoadingMessage()

        let allHeroes = []
        const pageSize = 50
        let offset = 0
        let isLastPage = false

        while (!isLastPage) {
            // Retrieve a page of hero listings from tavern
            const classes = getPossibleSummonClasses(mainHero.mainClass, searchCriteria.summonClass)
            const pageOfListings = await getHeroDataByAuction(searchCriteria.auctionType, classes, searchCriteria.summonProfession, pageSize, offset)
            const listedHeroes = decodeRecessiveGenesAndNormalize(pageOfListings.heroes)

            // Analyze each of the heroes in auction
            for (let i = 0; i < listedHeroes.length; i++) {
                const heroToAnalyze = listedHeroes[i]
                const classProbability = getProbabilityThatHeroesCanSummonTargetGene(mainHero.mainClassGenes, heroToAnalyze.mainClassGenes, searchCriteria.summonClass)

                if (searchCriteria.summonProfession) {
                    const professionProbability = getProbabilityThatHeroesCanSummonTargetGene(mainHero.professionGenes, heroToAnalyze.professionGenes, searchCriteria.summonProfession)
                    heroToAnalyze.targetProbability = classProbability && professionProbability ? classProbability.value * professionProbability.value : 0
                } else {
                    heroToAnalyze.targetProbability = classProbability ? classProbability.value : 0
                }
            }

            // Remove any heroes who cannot be used to summon the target class
            const filteredHeroes = listedHeroes.filter(hero => hero.targetProbability > 0)

            console.log(`${allHeroes.length} existing heroes`)
            console.log(`adding ${filteredHeroes.length} new heroes`)

            // Merge and sort heroes by highest to lowest probability of summoning target class
            allHeroes = allHeroes
                .concat(filteredHeroes)
                .sort((a, b) => a.targetProbability > b.targetProbability ? -1 : a.targetProbability < b.targetProbability ? 1 : 0)

            console.log(`now ${allHeroes.length} total heroes`)

            // Update state to display heroes
            setHeroes(allHeroes)
            setRandomLoadingMessage()

            offset += pageSize
            isLastPage = pageOfListings.length === 0

            await delay(1000)

            // ONLY LOAD 1 PAGE FOR TESTING
            isLastPage = offset > 200
        }

        setIsLoading(false)
        setHasLoaded(true)
    }

    // Change the current view
    const handleViewToggled = (checked) => {
        setView(checked ? 'front' : 'back')
    }

    // Heroes are sorted by Probability by default, only sort here if a different sorting is requested
    let sortedHeroes = sortBy === 'probability' ? heroes :
        heroes.sort((a, b) => {
            if (sortBy === 'price') {
                const aPrice = Number(a.price)
                const bPrice = Number(b.price)
                return aPrice > bPrice ? 1 : aPrice < bPrice ? -1 : 0
            }

            return 0
        })

    if (filters.summonsRemaining || filters.maxSummons) {
        sortedHeroes = sortedHeroes.filter(hero => {
            const remaining = !filters.summonsRemaining || Number(hero.summonsRemaining) >= Number(filters.summonsRemaining)
            const max = !filters.maxSummons || Number(hero.maxSummons) >= Number(filters.maxSummons)
            return max && remaining
        })
    }

    return (
        <>
            <SummonsMatchSearchForm isHeroLoaded={!!mainHero} onHeroChange={handleHeroChange} onSubmit={handleSubmit} />
            <SortFilter onFiltersChange={handleFiltersChange} onSortByChange={handleSortByChange} onViewToggled={handleViewToggled} visible={heroes.length > 0} />
            <LoadingMessage heroCount={heroes.length} loading={isLoading} loaded={hasLoaded} message={loadingMessage} />
            <div className='hero-list'>
                <MainHero hero={mainHero} view={view} />
                <SummonsMatchList heroes={sortedHeroes} view={view} />
            </div>
        </>
    )
}

export default RegressiveSearchPage
