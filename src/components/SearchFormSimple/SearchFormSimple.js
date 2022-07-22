import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    auctionTypeOptions,
    networkOptions,
    professionOptions,
    classOptions
} from '../../constants/menu-options'

import Button from '@mui/material/Button'
import HeroLookup from '../HeroLookup'
import HeroIcon from '@mui/icons-material/PersonAddAlt1'
import Grid from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/PersonSearch'
import Select from '@mui/material/Select'
import WalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import WalletsForm from './WalletsForm'

import './styles.css'

const SearchFormSimple = ({ isSearchEnabled, onHeroChange, onSearchCriteriaChange, onSearch, values }) => {
    const [isHeroLookupVisible, setHeroLookupVisible] = useState(false)
    const [isSearchWalletsFormVisible, setSearchWalletsFormVisibility] = useState(false)

    // Saves changes to the form data
    const handleFormChange = ({ target }) => {
        onSearchCriteriaChange({ key: target.name, value: target.value })
    }

    // Saves changes to the selected hero
    const handleHeroChange = event => {
        onHeroChange(event)
        hideHeroLookup()
    }

    // Saves changes to the selected hero
    const hideHeroLookup = () => {
        setHeroLookupVisible(false)
    }

    // Saves changes to the selected search wallet addresses
    const handleSearchWalletsChange = event => {
        handleFormChange(event)
        setSearchWalletsFormVisibility(false)
    }

    // Displays a popup for entering hero wallet addresses
    const showHeroLookup = () => {
        setHeroLookupVisible(true)
    }

    // Displays a popup for entering search wallet addresses
    const showSearchWalletsForm = () => {
        setSearchWalletsFormVisibility(true)
    }

    return (
        <>
            <div className='hero-container'>
                1. Select the main hero
                <Button
                    className='wallet-button'
                    onClick={showHeroLookup}
                >
                    {values.mainHero && values.mainHero.id} <HeroIcon />
                </Button>
                <HeroLookup
                    name='mainHero'
                    open={isHeroLookupVisible}
                    onClose={hideHeroLookup}
                    onSave={handleHeroChange}
                />
            </div>
            <Grid container className='search-form-simple' justifyContent='center' spacing={0}>
                <Grid item>
                    2. Find me heroes for
                    <Select
                        label='Auction Type'
                        name='auctionType'
                        className='auction-type-selecter'
                        value={values.auctionType}
                        variant='standard'
                        onChange={handleFormChange}
                    >
                        {auctionTypeOptions}
                    </Select>
                </Grid>
                {values.auctionType === 'wallet' && (
                    <>
                        <Grid item>
                            <Button
                                className='wallet-button'
                                onClick={showSearchWalletsForm}
                            >
                                {`(${values.searchWallets.length} addresses selected)`}
                                <WalletIcon
                                    className='wallet-form-icon'
                                    fontSize='small'
                                />
                            </Button>
                        </Grid>
                        <WalletsForm
                            name='searchWallets'
                            open={isSearchWalletsFormVisible}
                            onSave={handleSearchWalletsChange}
                            wallets={values.searchWallets}
                        />
                    </>
                )}
                {values.auctionType !== 'wallet' && (
                    <Grid item>
                        in the
                        <Select
                            className='network-selecter'
                            name='network'
                            onChange={handleFormChange}
                            value={values.network}
                            variant='standard'
                        >
                            {networkOptions}
                        </Select>
                        tavern,
                    </Grid>
                )}
                <Grid item>
                    &nbsp;who can pair with the main hero to summon a
                    <Select
                        className='summoned-class-selecter'
                        label='Class to be summoned'
                        name='summonClass'
                        onChange={handleFormChange}
                        value={values.summonClass}
                        variant='standard'
                    >
                        {classOptions}
                    </Select>
                </Grid>
                <Grid item>
                    for
                    <Select
                        className='summoned-profession-selecter'
                        label='Profession to be summoned'
                        name='summonProfession'
                        onChange={handleFormChange}
                        value={values.summonProfession}
                        variant='standard'
                    >
                        {professionOptions}
                    </Select>
                </Grid>
                <Grid item>
                    <Button
                        disabled={!isSearchEnabled}
                        onClick={onSearch}
                        variant='contained'
                    >
                        <SearchIcon />
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

SearchFormSimple.propTypes = {
    isSearchEnabled: PropTypes.bool,
    onHeroChange: PropTypes.func,
    onSearch: PropTypes.func,
    onSearchCriteriaChange: PropTypes.func,
    values: PropTypes.object
}

SearchFormSimple.defaultProps = {
    isSearchEnabled: false,
    onHeroChange: () => { },
    onSearch: () => { },
    onSearchCriteriaChange: () => { },
}

export default SearchFormSimple
