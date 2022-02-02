import React from 'react'
//import PropTypes from 'prop-types'
import { getHeroesChain } from '@thanpolas/dfk-hero'
//import { getHeroesChain } from '../../services/DfkHero'
import SummonsMatchSearchForm from '../SummonsMatchSearchForm/SummonsMatchSearchForm'
import SummonsMatchList from '../SummonsMatchList/SummonsMatchList'

const RegressiveSearchPage = () => {

    // ---  Replace this with real data

    function createData(name, calories, fat, carbs, protein) {
        return {
            name,
            calories,
            fat,
            carbs,
            protein,
        }
    }

    const rows = [
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Donut', 452, 25.0, 51, 4.9),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
        createData('Honeycomb', 408, 3.2, 87, 6.5),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Jelly Bean', 375, 0.0, 94, 0.0),
        createData('KitKat', 518, 26.0, 65, 7.0),
        createData('Lollipop', 392, 0.2, 98, 0.0),
        createData('Marshmallow', 318, 0, 81, 2.0),
        createData('Nougat', 360, 19.0, 9, 37.0),
        createData('Oreo', 437, 18.0, 63, 4.0),
    ]

    // ---  Replace this with real data





    // Looks up the selected Hero
    const handleHeroChange = (heroId) => {
        console.log(`New Hero Selected: ${heroId}`)
    }

    // Creates a new search for the specified search criteria
    const handleSubmit = (searchCriteria) => {
        console.log(JSON.stringify(searchCriteria))
        getHeroesChain([47817, 25025, 95734])
            .then(results => {
                console.log(JSON.stringify(results))
            })
    }

    return (
        <>
            <SummonsMatchSearchForm onHeroChange={handleHeroChange} onSubmit={handleSubmit} />
            <SummonsMatchList rows={rows} />
        </>
    )
}

export default RegressiveSearchPage
