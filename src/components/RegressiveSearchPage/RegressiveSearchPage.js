import React, { useEffect, useState } from 'react'
import unionBy from 'lodash/unionBy'
import { getHeroesBySearchCriteria } from '../../services/hero.service'
import { getProbabilityThatHeroesCanSummonTargetGene, getPossibleSummonClasses } from '../../helpers/genes.helpers'
import { CamelCase, ToPrice } from '../../helpers/format.helpers'
import { sheerFix, sortAndFilterHeroes } from './functions'

import SummoningMatchSearch from '../../containers/SummoningMatchSearch'

import Container from '@mui/material/Container'
import LoadingMessage from './LoadingMessage'
import MainHero from './MainHero'
import SortFilter from '../SortFilter/SortFilter'
import SummonsMatchList from '../SummonsMatchList'

import './styles.css'

const statusMessages = [
    'Now there is an interesting fellow.',
    'Oh, the Tavern has Perch Porter on draft.',
    'Chatting with Agent Selina.  She is such a sweetheart!',
    'Are those wings on her back, or she just harpy to see me?',
    'Woah, big guy!  Careful with those horns!'
]

const RegressiveSearchPage = () => {
    const [filters, setFilters] = useState({})
    const [hasLoaded, setHasLoaded] = useState(false)
    const [matches, setMatches] = useState([])
    const [highlights, setHighlights] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('')
    const [mainHero, setMainHero] = useState()
    const [sortBy, setSortBy] = useState('probability')
    const [cardView, setCardView] = useState('back')

    const delay = ms => new Promise(res => setTimeout(res, ms))

    // Updates filters
    const handleFiltersChange = filters => {
        setFilters(filters)
    }

    // Sets the main hero
    const handleMainHeroChange = hero => {
        setMainHero(hero)
        setMatches([])
    }

    // Creates a new search for the specified search criteria
    const handleSearch = async (searchCriteria) => {
        setMatches([])
        setIsLoading(true)
        setRandomLoadingMessage()

        let allHeroes = []
        const pageSize = 50
        let offset = 0
        let isLastPage = false

        // Set the highlights
        const classes = getPossibleSummonClasses(CamelCase(mainHero.mainClass), searchCriteria.summonClass)
        setHighlights({ mainClass: classes, profession: [searchCriteria.summonProfession] })

        while (!isLastPage) {
            // Retrieve a page of hero listings from tavern
            const options = {
                auctionType: searchCriteria.auctionType,
                network: searchCriteria.network,
                mainClasses: classes,
                profession: searchCriteria.summonProfession,
                wallets: searchCriteria.searchWallets
            }
            const listedHeroes = await getHeroesBySearchCriteria(options, pageSize, offset)

            // Analyze each of the heroes in auction
            for (let i = 0; i < listedHeroes.length; i++) {
                const heroToAnalyze = listedHeroes[i]
                sheerFix(heroToAnalyze)
                heroToAnalyze.auctionType = searchCriteria.auctionType
                heroToAnalyze.price = ToPrice(heroToAnalyze.price)
                const classProbability = getProbabilityThatHeroesCanSummonTargetGene(mainHero.mainClassGenes, heroToAnalyze.mainClassGenes, searchCriteria.summonClass)

                // Apply the probability based on search criteria
                if (searchCriteria.summonProfession === 'all') {
                    heroToAnalyze.targetProbability = classProbability ? classProbability.value : 0
                } else {
                    const professionProbability = getProbabilityThatHeroesCanSummonTargetGene(mainHero.professionGenes, heroToAnalyze.professionGenes, searchCriteria.summonProfession)
                    heroToAnalyze.targetProbability = classProbability && professionProbability ? classProbability.value * professionProbability.value : 0
                }
            }

            // Remove any heroes who cannot be used to summon the target class
            const filteredHeroes = listedHeroes.filter(hero => hero.targetProbability > 0)

            console.log(`${allHeroes.length} existing heroes`)
            console.log(`adding ${filteredHeroes.length} new heroes`)

            // Merge and sort heroes by highest to lowest probability of summoning target class
            allHeroes = unionBy(allHeroes, filteredHeroes, 'id')

            console.log(`now ${allHeroes.length} total heroes`)

            // Update state to display heroes
            setMatches(allHeroes)
            setRandomLoadingMessage()

            offset += pageSize
            isLastPage = listedHeroes.length === 0

            await delay(1000)

            // ONLY LOAD 1 PAGE FOR TESTING
            // isLastPage = offset > 200
        }

        setIsLoading(false)
        setHasLoaded(true)
    }

    // Updates sorting options
    const handleSortByChange = value => {
        setSortBy(value)
    }

    // Change the current view
    const handleViewToggled = (checked) => {
        setCardView(checked ? 'front' : 'back')
    }

    // Update the message that is displayed while tavern data is being loaded
    const setRandomLoadingMessage = () => {
        const randomIndex = Math.floor(Math.random() * statusMessages.length)
        setLoadingMessage(statusMessages[randomIndex])
    }

    const sortedHeroes = mainHero ? sortAndFilterHeroes(matches, filters, sortBy, mainHero.mutationClass) : []

    return (
        <>
            {/* <SummoningMatch
                isLoading={isLoading}
                mainHero={mainHero}
                onHeroChange={handleHeroChange}
                onSearch={handleSearch}
                onSearchCriteriaChange={handleSearchCriteriaChange}
                searchCriteria={searchCriteria}
            /> */}
            <Container maxWidth='xl'>
                <SummoningMatchSearch
                    isLoading={isLoading}
                    onSelectedHeroChange={handleMainHeroChange}
                    onSearch={handleSearch}
                />

                <SortFilter
                    onFiltersChange={handleFiltersChange}
                    onSortByChange={handleSortByChange}
                    onViewToggled={handleViewToggled}
                    visible={!!mainHero} />

                <LoadingMessage
                    heroCount={matches.length}
                    loading={isLoading}
                    loaded={hasLoaded}
                    message={loadingMessage} />

                <div className='hero-list'>
                    <MainHero
                        hero={mainHero}
                        view={cardView} />
                    <SummonsMatchList
                        heroes={sortedHeroes}
                        view={cardView}
                        highlights={highlights} />
                </div>
            </Container>
        </>
    )
}

export default RegressiveSearchPage
