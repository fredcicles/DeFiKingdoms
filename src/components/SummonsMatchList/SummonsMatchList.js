import PropTypes from 'prop-types'
import React from 'react'
import HeroSnapshot from '../HeroSnapshot/HeroSnapshot'

// Displays a list of Heroes who are compatible with the Summons Match
const SummonsMatchList = ({ highlights, heroes, view }) => {
    const renderTitle = (hero) => `${(hero.targetProbability * 100).toFixed(2)}% probability`
    return heroes.length ?
        heroes.map(hero => <HeroSnapshot key={hero.id} hero={hero} title={renderTitle(hero)} view={view} highlights={highlights} />) :
        null
}

SummonsMatchList.propTypes = {
    highlights: PropTypes.object,
    heroes: PropTypes.array,
    view: PropTypes.string
}

export default SummonsMatchList
