//import React, { useEffect, useState } from 'react'
//import getHeroData from '../../services/hero.service'
//import heroes from '../../data/heroes.json'
import hero from '../../data/hero.json'
import HeroCard from '../HeroCard';

const HeroPage = () => {
    //const [heroCount, setHeroCount] = useState(-1)

    /*
    useEffect(() => {
        const getData = async () => {
            const heroData = await getHeroData()
            console.log(`Got the hero data with ${heroData.heros.length} heroes.`)
            console.log(JSON.stringify(heroData.heros))
            setHeroCount(heroData.heros.length)
        }

        getData()
    }, [])

    useEffect(() => {
        setHeroCount(heroes.length)
    }, [])

    const message = heroCount === -1 ?
        'loading...' :
        `${heroCount} heroes retrieved.`

    */

    return (
        <HeroCard hero={hero} />
    )
}

export default HeroPage