import React, { useState } from 'react'
import { getHeroesChain } from '@thanpolas/dfk-hero'
import { getHeroDataByAuction } from '../../services/auction.service'
import { getProbabilityThatHeroesCanSummonTargetClass, getPossibleSummonClasses } from '../../helpers/genes.helpers'
import SummonsMatchSearchForm from '../SummonsMatchSearchForm'
import SummonsMatchList from '../SummonsMatchList'
import HeroSnapshot from '../HeroSnapshot'
import './styles.css'

import { decodeRecessiveGenesAndNormalize } from '@thanpolas/dfk-hero/src/heroes-helpers/recessive-genes.ent'

const statusMessages = [
    'Now there is an interesting fellow.',
    'Oh, the Tavern has Perch Porter on draft.',
    'Chatting with Agent Selina.  She is such a sweetheart!',
    'Are those wings on her back, or she just harpy to see me?',
    'Woah, big guy!  Careful with those horns!'
]

const MainHero = ({ hero }) => {
    return hero ?
        (<div className='main-hero'>
            <HeroSnapshot hero={hero} title='Main Hero' />
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

    const [mainHero, setMainHero] = useState()
    const [heroes, setHeroes] = useState([])

    // Looks up the selected Hero
    const handleHeroChange = async heroId => {
        if (heroId) {
            setMainHero()
            const data = await getHeroesChain([heroId])
            setMainHero(data[0])
        }
    }

    const setRandomLoadingMessage = () => {
        const randomIndex = Math.floor(Math.random() * statusMessages.length)
        setLoadingMessage(statusMessages[randomIndex])
    }

    const delay = ms => new Promise(res => setTimeout(res, ms))

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
            const pageOfListings = await getHeroDataByAuction(searchCriteria.auctionType, classes, pageSize, offset)
            const listedHeroes = decodeRecessiveGenesAndNormalize(pageOfListings.heroes)

            // Analyze each of the heroes in auction
            for (let i = 0; i < listedHeroes.length; i++) {
                const heroToAnalyze = listedHeroes[i]
                heroToAnalyze.targetProbability = getProbabilityThatHeroesCanSummonTargetClass(mainHero, heroToAnalyze, searchCriteria.summonClass)
            }

            // Remove any heroes who cannot be used to summon the target class
            const filteredHeroes = listedHeroes.filter(hero => hero.targetProbability)

            console.log(`${allHeroes.length} existing heroes`)
            console.log(`adding ${filteredHeroes.length} new heroes`)

            // Merge and sort heroes by highest to lowest probability of summoning target class
            allHeroes = allHeroes
                .concat(filteredHeroes)
                .sort((a, b) => a.targetProbability.value > b.targetProbability.value ? -1 : a.targetProbability.value < b.targetProbability.value ? 1 : 0)

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

    return (
        <>
            <SummonsMatchSearchForm onHeroChange={handleHeroChange} onSubmit={handleSubmit} />
            <LoadingMessage heroCount={heroes.length} loading={isLoading} loaded={hasLoaded} message={loadingMessage} />
            <div className='hero-list'>
                <MainHero hero={mainHero} />
                <SummonsMatchList heroes={heroes} />
            </div>
        </>
    )
}

export default RegressiveSearchPage
