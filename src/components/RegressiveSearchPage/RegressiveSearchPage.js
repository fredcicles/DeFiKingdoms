import React, { useState } from 'react'
//import PropTypes from 'prop-types'
import getAuctionData from '../../services/auction.service'
import { getHeroesChain } from '@thanpolas/dfk-hero'
//import { getHeroesChain } from '../../services/DfkHero'
import { canHeroesSummonClass } from '../../helpers/genes.helpers'
import SummonsMatchSearchForm from '../SummonsMatchSearchForm'
import SummonsMatchList from '../SummonsMatchList'
import HeroSnapshot from '../HeroSnapshot'
import './styles.css'


const RegressiveSearchPage = () => {
    const [loaded, setLoaded] = useState(false)
    const [loadingAuctionData, setLoadingAuctionData] = useState(false)

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

        const auctionsData = await getAuctionData()
        const heroIds = auctionsData.saleAuctions.map(auction => auction.tokenId.numberId)

        getHeroesChain([searchCriteria.heroId, ...heroIds])
            .then(data => {
                // 1st hero is the main hero, no need to analyze them
                const _mainHero = data[0]

                // Analyze each of the heroes in auction
                for (let i = 1; i < data.length; i++) {
                    const heroToAnalyze = data[i]
                    heroToAnalyze.targetProbability = canHeroesSummonClass(_mainHero, heroToAnalyze, searchCriteria.summonClass)
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
                <SummonsMatchList loaded={loaded} loading={loadingAuctionData} heroes={matchingHeroes} />
            </div>
        </>
    )
}

export default RegressiveSearchPage
