import React, { useState } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'lodash/sortBy'
import {
    classOptions,
    professionOptions,
    rarityOptions,
    sortOptions
} from '../../constants/menu-options'
import Button from '@mui/material/Button'
import HeroCard from './HeroCard'
import Select from '@mui/material/Select'

const HeroList = ({ heroes, onHeroSelected }) => {
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState('id')

    // Update the selected filter criteria
    const handleFilterChange = ({target}) => {
        setFilters(f => ({...f, [target.name]: target.value}))
    }

    // Update the selected sort criteria
    const handleSortChange = ({ target }) => {
        setSort(target.value)
    }

    const render = heroes => heroes.map(hero => (
        <Button onClick={() => onHeroSelected(hero)}>
            <HeroCard hero={hero} />
        </Button>
    ))

    // Filter & Sort the heroes by the selected filter & sort criteria
    let heroesToDisplay = heroes
        .filter(hero => {
            const rarityFilter = !filters.rarity || Number(filters.rarity) === hero.rarity
            const mainClassFilter = !filters.mainClass || filters.mainClass.toLowerCase() === hero.mainClass.toLowerCase()
            const professionFilter = !filters.profession || filters.profession === 'all' || filters.profession.toLowerCase() === hero.profession.toLowerCase()

            return rarityFilter && mainClassFilter && professionFilter
        })

    heroesToDisplay = sortBy(heroesToDisplay, [sort])

    return heroes.length ? (
        <>
            <div className='hero-lookup-options'>
                Sort:
                <Select
                    className='sort-selecter'
                    label='Sort'
                    name='sort'
                    onChange={handleSortChange}
                    value={sort}
                    variant='standard'
                >
                    {sortOptions}
                </Select>
                Filters:
                <Select
                    // className='rarity-selecter'
                    label='Rarity'
                    name='rarity'
                    onChange={handleFilterChange}
                    //value={mainClass}
                    variant='standard'
                >
                    {rarityOptions}
                </Select>
                <Select
                    // className='main-class-selecter'
                    label='Main Class'
                    name='mainClass'
                    onChange={handleFilterChange}
                    //value={mainClass}
                    variant='standard'
                >
                    {classOptions}
                </Select>
                <Select
                    // className='main-class-selecter'
                    label='Profession'
                    name='profession'
                    onChange={handleFilterChange}
                    //value={mainClass}
                    variant='standard'
                >
                    {professionOptions}
                </Select>
            </div>
            <div className='hero-lookup-list'>
                {render(heroesToDisplay)}
            </div>
        </>
    ) : null
}

HeroList.propTypes = {
    filters: PropTypes.object,
    heroes: PropTypes.array,
    onHeroSelected: PropTypes.func,
    sort: PropTypes.string
}

HeroList.defaultProps = {
    filters: { mainClass: '' },
    heroes: [],
    onHeroSelected: () => { },
    sort: 'mainClass'
}

export default HeroList
