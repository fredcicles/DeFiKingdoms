import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NETWORKS, REALMS } from '../../constants/constants'

import SearchFormSimple from '../../components/SearchFormSimple'

const SummoningMatchSearch = ({ isLoading, onSearch, onSelectedHeroChange }) => {
    const [searchCriteria, setSearchCriteria] = useState({
        auctionType: 'assisting',
        mainHero: null,
        network: NETWORKS.harmony.id,
        originRealm: REALMS.serendale.id,
        searchWallets: [],
        summonClass: '',
        summonProfession: 'all'
    })

    // Need to add a use effect for wallets

    // Update the hero if the network changes
    useEffect(() => {
        searchCriteria.heroId && handleHeroChange()
        // eslint-disable-next-line
    }, [searchCriteria.originRealm])

    // Updates the selected Hero
    const handleHeroChange = async ({target}) => {
        // Set a default for the class to summon based on the selected hero
        const hero = target.value
        handleSearchCriteriaChange(target)
        hero.mutationClass && handleSearchCriteriaChange({ key: 'summonClass', value: hero.mutationClass })
        onSelectedHeroChange(hero)
    }

    // Tell calling component to search
    const handleSearch = () => {
        onSearch(searchCriteria)
    }

    // Updates search criteria
    const handleSearchCriteriaChange = ({ key, value }) => {
        setSearchCriteria(prev => ({ ...prev, [key]: value }))
    }

    return (
        <SearchFormSimple
            isSearchEnabled={!isLoading && !!searchCriteria.summonClass}
            onHeroChange={handleHeroChange}
            onSearch={handleSearch}
            onSearchCriteriaChange={handleSearchCriteriaChange}
            values={searchCriteria} />
    )
}

SummoningMatchSearch.propTypes = {
    isLoading: PropTypes.bool,
    onError: PropTypes.func,
    onSelectedHeroChange: PropTypes.func,
    onSearch: PropTypes.func,
}

SummoningMatchSearch.defaultProps = {
    onError: () => { },
    onSelectedHeroChange: () => { },
    onSearch: () => { },
}

export default SummoningMatchSearch
