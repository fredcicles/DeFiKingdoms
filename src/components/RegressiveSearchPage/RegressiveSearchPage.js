import React, { useState } from 'react'
import unionBy from 'lodash/unionBy'
import { decodeRecessiveGenesAndNormalize } from '@thanpolas/degenking/src/heroes-helpers/recessive-genes.ent'
import { getHeroDataByAuction } from '../../services/auction.service'
import { calcuateSummonCost } from '../../helpers/prices.helper'
import { getProbabilityThatHeroesCanSummonTargetGene, getPossibleSummonClasses } from '../../helpers/genes.helpers'
import { CamelCase, ToPrice } from '../../helpers/format.helpers'
import { getMainHero, sheerFix, sortAndFilterHeroes } from './functions'
import { REALMS } from '../../constants/realms'

import Alert from '@mui/material/Alert'
import Container from '@mui/material/Container'
import HeroSnapshot from '../HeroSnapshot'
import SortFilter from '../SortFilter/SortFilter'
import SearchFormSimple from '../SearchFormSimple/SearchFormSimple'
import SummonsMatchList from '../SummonsMatchList'

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
    return textToDisplay ? (
        <Alert variant='outlined' severity='success' className='loading-message'>
            {textToDisplay}
        </Alert>
    ) : null
}

const RegressiveSearchPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [hasLoaded, setHasLoaded] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('')
    const [searchForm, setSearchForm] = useState('simple')
    const [sortBy, setSortBy] = useState('probability')
    const [filters, setFilters] = useState({})
    const [mutationClass, setMutationClass] = useState('')
    const [mainHero, setMainHero] = useState()
    const [heroes, setHeroes] = useState([])
    const [view, setView] = useState('back')
    const [highlights, setHighlights] = useState()

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
    const handleHeroChange = async (heroNumber, originRealm) => {
        const heroId = originRealm === REALMS.serendale.id ? heroNumber : `${'1000000000000'.slice(0, 13 - heroNumber.length)}${heroNumber}`
        if (heroId && (!mainHero || mainHero.id !== heroId)) {
            // Clear currently displayed main and matching heroes
            setHeroes([])
            setMainHero()
            setMutationClass('')
            setLoadingMessage('')

            // Retrieve the main hero from DFK
            const _mainHero = await getMainHero(heroId)

            if (_mainHero) {
                setMainHero(_mainHero)

                // Set a default for the class to summon based on the selected hero
                setMutationClass(_mainHero.mutationClass)
            } else {
                setLoadingMessage('Hero not found.')
                setIsLoading(true)
            }
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

        // Set the highlights
        const classes = getPossibleSummonClasses(CamelCase(mainHero.mainClass), searchCriteria.summonClass)
        setHighlights({ mainClass: classes, profession: [searchCriteria.summonProfession] })

        while (!isLastPage) {
            // Retrieve a page of hero listings from tavern
            const pageOfListings = await getHeroDataByAuction(searchCriteria.auctionType, searchCriteria.network, classes, searchCriteria.summonProfession, pageSize, offset)
            const listedHeroes = decodeRecessiveGenesAndNormalize(pageOfListings.heroes)

            // Analyze each of the heroes in auction
            for (let i = 0; i < listedHeroes.length; i++) {
                const heroToAnalyze = listedHeroes[i]
                sheerFix(heroToAnalyze)
                heroToAnalyze.displayId = heroToAnalyze.id.length === 13 ? Number(heroToAnalyze.id.slice(1)).toString() : heroToAnalyze.id
                heroToAnalyze.auctionType = searchCriteria.auctionType
                heroToAnalyze.summonCost = calcuateSummonCost(heroToAnalyze)
                heroToAnalyze.price = ToPrice(heroToAnalyze.price)
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
            allHeroes = unionBy(allHeroes, filteredHeroes, 'id')

            console.log(`now ${allHeroes.length} total heroes`)

            // Update state to display heroes
            setHeroes(allHeroes)
            setRandomLoadingMessage()

            offset += pageSize
            isLastPage = pageOfListings.heroes.length === 0

            await delay(1000)

            // ONLY LOAD 1 PAGE FOR TESTING
            // isLastPage = offset > 200
        }

        setIsLoading(false)
        setHasLoaded(true)
    }

    // Changes which search form is displayed
    const handleSearchFormToggle = () => {
        setSearchForm(searchForm === 'simple' ? 'advanced' : 'simple')
    }

    // Change the current view
    const handleViewToggled = (checked) => {
        setView(checked ? 'front' : 'back')
    }

    const sortedHeroes = sortAndFilterHeroes(heroes, filters, sortBy, mutationClass)

    return (
        <Container maxWidth='xl'>
            <SearchFormSimple defaultSummonClass={mutationClass} isHeroLoaded={!!mainHero} onHeroChange={handleHeroChange} onToggle={handleSearchFormToggle} onSubmit={handleSubmit} />
            <SortFilter onFiltersChange={handleFiltersChange} onSortByChange={handleSortByChange} onViewToggled={handleViewToggled} visible={!!mainHero} />
            <LoadingMessage heroCount={heroes.length} loading={isLoading} loaded={hasLoaded} message={loadingMessage} />
            <div className='hero-list'>
                <MainHero hero={mainHero} view={view} />
                <SummonsMatchList heroes={sortedHeroes} view={view} highlights={highlights} />
            </div>
        </Container>
    )
}

export default RegressiveSearchPage
