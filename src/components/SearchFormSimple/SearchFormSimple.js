import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
    auctionTypeOptions,
    networkOptions,
    originRealmOptions,
    professionOptions,
    summonClassOptions
} from './menu-options'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/PersonSearch'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import WalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import WalletsForm from './WalletsForm'

import './styles.css'

const SearchFormSimple = ({ isSearchEnabled, onHeroChange, onSearchCriteriaChange, onSearch, onToggle, values }) => {
    const [isWalletsFormVisible, setWalletsFormVisibility] = useState(false)

    // Loads the selected hero
    const handleHeroIdBlur = () => {
        onHeroChange && onHeroChange(values.originRealm)
    }

    // Loads the selected hero when the enter key is pressed inside the HeroId text box
    const handleHeroIdEnter = (event) => {
        if (event.key === 'Enter') {
            handleHeroIdBlur()
        }
    }

    // Saves changes to the form data
    const handleFormChange = ({ target }) => {
        onSearchCriteriaChange({ key: target.name, value: target.value })
    }

    // Saves changes to the selected wallet addresses
    const handleWalletsChange = event  => {
        handleFormChange(event)
        setWalletsFormVisibility(false)
    }

    // Displays a popup for entering wallet addresses
    const showWalletsForm = () => {
        setWalletsFormVisibility(true)
    }

    const canSubmit = isSearchEnabled && values.summonClass

    return (
        <>
            <Grid container className='search-form-simple' justifyContent='center' spacing={0}>
                <Grid item>
                    Find me heroes for
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
                                onClick={showWalletsForm}
                            >
                                {`(${values.walletAddresses.length} addresses selected)`}
                                <WalletIcon
                                    className='wallet-form-icon'
                                    fontSize='small'
                                />
                            </Button>
                        </Grid>
                        <WalletsForm
                            name='walletAddresses'
                            open={isWalletsFormVisible}
                            onSave={handleWalletsChange}
                            wallets={values.walletAddresses}
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
                <Grid item className='hero-container'>
                    who can match with hero
                    <Select
                        className='origin-realm-selecter'
                        name='originRealm'
                        onChange={handleFormChange}
                        value={values.originRealm}
                        variant='standard'
                    >
                        {originRealmOptions}
                    </Select>
                    #
                    <TextField
                        className='hero-id-selecter'
                        name='heroId'
                        onBlur={handleHeroIdBlur}
                        onChange={handleFormChange}
                        onKeyPress={handleHeroIdEnter}
                        placeholder='hero id'
                        value={values.heroId}
                        variant='standard'
                    />
                </Grid>
                <Grid item>
                    to summon a
                    <Select
                        className='summoned-class-selecter'
                        label='Class to be summoned'
                        name='summonClass'
                        onChange={handleFormChange}
                        value={values.summonClass}
                        variant='standard'
                    >
                        {summonClassOptions}
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
                        disabled={!canSubmit}
                        onClick={onSearch}
                        variant='contained'
                    >
                        <SearchIcon />
                    </Button>
                    {/* <a href="#" className='search-form-toggle' onClick={onToggle}>Advanced Search</a> */}
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
    onToggle: PropTypes.func,
    values: PropTypes.object
}

SearchFormSimple.defaultProps = {
    isSearchEnabled: false,
    onToggle: () => { }
}

export default SearchFormSimple
