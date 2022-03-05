import React, { useState } from 'react'
import getAuctionData from '../../services/auction.service'
import { getHeroesChain } from '@thanpolas/dfk-hero'
import { getProbabilityThatHeroesCanSummonTargetClass } from '../../helpers/genes.helpers'
import SummonsMatchSearchForm from '../SummonsMatchSearchForm'
import SummonsMatchList from '../SummonsMatchList'
import HeroSnapshot from '../HeroSnapshot'
import './styles.css'

const statusMessages = [
    'Heading on over to the tavern.',
    'Oh, they have Perch Porter on draft.',
    'Chatting with Agent Selina.  She is such a sweetheart!',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm'
]

const RegressiveSearchPage = () => {
    const [loaded, setLoaded] = useState(false)
    const [loadingAuctionData, setLoadingAuctionData] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('')
    const [take] = useState(50)

    const [mainHero, setMainHero] = useState()
    const [matchingHeroes, setMatchingHeroes] = useState([])

    // Looks up the selected Hero
    const handleHeroChange = async heroId => {
        if (heroId) {
            setMainHero()
            const data = await getHeroesChain([heroId])
            setMainHero(data[0])
        }
    }

    // Creates a new search for the specified search criteria
    const handleSubmit = async searchCriteria => {
        setMatchingHeroes([])
        setLoadingAuctionData(true)
        setLoadingMessage(statusMessages[0])

        const auctionsData = await getAuctionData(searchCriteria.auctionType, take)
        const heroIds = auctionsData.auctions.map(auction => auction.tokenId.numberId)

        const iterationsBetweenStatusUpdates = 10
        let nextStatusUpdate = iterationsBetweenStatusUpdates
        let messageIndex = 0

        const data = await getHeroesChain(heroIds)

        // Analyze each of the heroes in auction
        for (let i = 1; i < data.length; i++) {
            const heroToAnalyze = data[i]
            heroToAnalyze.targetProbability = getProbabilityThatHeroesCanSummonTargetClass(mainHero, heroToAnalyze, searchCriteria.summonClass)

            if (i > nextStatusUpdate) {
                setLoadingMessage(statusMessages[messageIndex++])
                nextStatusUpdate += iterationsBetweenStatusUpdates
                if (messageIndex >= statusMessages.length) { messageIndex = 0 }
            }
        }

        // Remove any heroes who cannot be used to summon the target class
        const heroes = data.filter(hero => hero.targetProbability)

        // Update state to display heroes
        setMatchingHeroes(heroes)
        setLoadingAuctionData(false)
        setLoaded(true)
    }

    // Order by highest to lowest probability of summoning target class
    const heroes = matchingHeroes.sort((a, b) => a.targetProbability.value > b.targetProbability.value ? -1 : a.targetProbability.value < b.targetProbability.value ? 1 : 0)

    return (
        <>
            <SummonsMatchSearchForm onHeroChange={handleHeroChange} onSubmit={handleSubmit} />
            <div className='hero-list'>
                {mainHero && <div className='main-hero'><HeroSnapshot hero={mainHero} title='Main Hero' /></div>}
                {loaded && !loadingAuctionData &&
                    <SummonsMatchList loaded={loaded} heroes={heroes} />
                }
                {loaded && !loadingAuctionData && !heroes.length && 'No Heroes Found'}
                {loadingAuctionData && <div>{loadingMessage}</div>}

            </div>
        </>
    )
}

export default RegressiveSearchPage
