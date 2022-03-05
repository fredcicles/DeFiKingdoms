import React, { useState } from 'react'
import getAuctionData from '../../services/auction.service'
import { getHeroesChain } from '@thanpolas/dfk-hero'
import { canHeroesSummonClass } from '../../helpers/genes.helpers'
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
    const [take] = useState(10)

    const [mainHero, setMainHero] = useState()
    const [matchingHeroes, setMatchingHeroes] = useState([])

    // Looks up the selected Hero
    const handleHeroChange = (heroId) => {
        console.log(`New Hero Selected: ${heroId}`)

        if (heroId) {
            setMainHero()
            getHeroesChain([heroId])
                .then(data => {
                    setMainHero(data[0])
                })
        }
    }

    // Creates a new search for the specified search criteria
    const handleSubmit = async (searchCriteria) => {
        console.log(JSON.stringify(searchCriteria))

        setMatchingHeroes([])
        setLoadingAuctionData(true)
        setLoadingMessage(statusMessages[0])

        const auctionsData = await getAuctionData(searchCriteria.auctionType, take)
        const heroIds = [Number(searchCriteria.heroId), ...auctionsData.auctions.map(auction => auction.tokenId.numberId)]

        getHeroesChain(heroIds)
            .then(data => {
                // 1st hero is the main hero, no need to analyze them
                const _mainHero = data[0]

                const increment = 10
                let nextUpdate = increment
                let messageIndex = 0

                // Analyze each of the heroes in auction
                for (let i = 1; i < data.length; i++) {
                    const heroToAnalyze = data[i]
                    heroToAnalyze.targetProbability = canHeroesSummonClass(_mainHero, heroToAnalyze, searchCriteria.summonClass)

                    if (i > nextUpdate) {
                        setLoadingMessage(statusMessages[messageIndex++])
                        nextUpdate += increment
                        if (messageIndex >= statusMessages.length) { messageIndex = 0 }
                    }
                }

                // Remove any heroes who cannot be used to summon the target class
                // Order by highest to lowest probability of summoning target class
                const heroes = data
                    .filter(hero => hero.targetProbability)
                    .sort((a, b) => a.targetProbability.value > b.targetProbability.value ? -1 : a.targetProbability.value < b.targetProbability.value ? 1 : 0)

                // Update state to display heroes
                setMainHero(_mainHero)
                setMatchingHeroes(heroes.slice(1))
                setLoadingAuctionData(false)
                setLoaded(true)
            })
    }

    return (
        <>
            <SummonsMatchSearchForm onHeroChange={handleHeroChange} onSubmit={handleSubmit} />
            <div className='hero-list'>
                {mainHero && <div className='main-hero'><HeroSnapshot hero={mainHero} title='Main Hero' /></div>}
                {loaded && !loadingAuctionData &&
                    <SummonsMatchList loaded={loaded} heroes={matchingHeroes} />
                }
                {loadingAuctionData && <div>{loadingMessage}</div>}

            </div>
        </>
    )
}

export default RegressiveSearchPage
