import PropTypes from 'prop-types'
import React from 'react'
import HeroSnapshot from '../HeroSnapshot'

// Displays a list of Heroes who are compatible with the Summons Match
const SummonsMatchList = ({ loaded, loading, heroes }) => {
    const renderTitle = (hero) => `${(hero.targetProbability.value * 100).toFixed(2)}% probability`
    return (
        <>
            {loading && <div>Heading on over to the tavern.
                </div>}
            {loaded && !loading && heroes.map(hero => <HeroSnapshot key={hero.id} hero={hero} title={renderTitle(hero)} />)}
        </>
    )
}

SummonsMatchList.propTypes = {
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    heroes: PropTypes.array
}

export default SummonsMatchList
