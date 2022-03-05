import PropTypes from 'prop-types'
import React from 'react'
import HeroSnapshot from '../HeroSnapshot'

// Displays a list of Heroes who are compatible with the Summons Match
const SummonsMatchList = ({ heroes }) => {
    const renderTitle = (hero) => `${(hero.targetProbability.value * 100).toFixed(2)}% probability`
    return (
        <>
            {heroes.map(hero => <HeroSnapshot key={hero.id} hero={hero} title={renderTitle(hero)} />)}
        </>
    )
}

SummonsMatchList.propTypes = {
    heroes: PropTypes.array
}

export default SummonsMatchList
