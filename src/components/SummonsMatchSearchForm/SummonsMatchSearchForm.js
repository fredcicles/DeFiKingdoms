import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { CONSTANTS } from '@thanpolas/dfk-hero'
import { basicClasses, advancedClasses, eliteClasses, exaltedClasses } from '@thanpolas/dfk-hero/src/constants/hero-classes.const'
import Button from '@mui/material/Button'
import ListSubheader from '@mui/material/ListSubheader'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/PersonSearch'
import './styles.css'

const SummonsMatchSearchForm = ({ isHeroLoaded, onHeroChange, onSubmit }) => {
    const [summonClass, setSummonClass] = useState('')
    const [auctionType, setAuctionType] = useState('sale')
    const [heroId, setHeroId] = useState('')
    const [summonClassOptions, setSummonClassOptions] = useState([])

    useEffect(() => {
        // Renders the list of options for the Summon Class dropdown
        const basic = basicClasses
            .sort()
            .map(name => (<MenuItem key={name} value={CONSTANTS.CLASS_REV[name]}>{CONSTANTS.CLASS_REV[name]}</MenuItem>))

        const advanced = advancedClasses
            .sort()
            .map(name => (<MenuItem key={name} value={CONSTANTS.CLASS_REV[name]}>{CONSTANTS.CLASS_REV[name]}</MenuItem>))

        const elite = eliteClasses
            .sort()
            .map(name => (<MenuItem key={name} value={CONSTANTS.CLASS_REV[name]}>{CONSTANTS.CLASS_REV[name]}</MenuItem>))

        const exalted = exaltedClasses
            .sort()
            .map(name => (<MenuItem key={name} value={CONSTANTS.CLASS_REV[name]}>{CONSTANTS.CLASS_REV[name]}</MenuItem>))

        const options = [
            (<ListSubheader key='basic'>Basic Classes</ListSubheader>),
            ...basic,
            (<ListSubheader key='advanced'>Advanced Classes</ListSubheader>),
            ...advanced,
            (<ListSubheader key='elite'>Elite Classes</ListSubheader>),
            ...elite,
            (<ListSubheader key='exalted'>Exalted Classes</ListSubheader>),
            ...exalted
        ]

        setSummonClassOptions(options)
    }, [])

    // Saves changes to the selected Auction Type
    const handleAuctionTypeChange = ({ target }) => {
        setAuctionType(target.value)
    }


    // Saves changes to the selected Hero
    const handleHeroIdChange = ({ target }) => {
        setHeroId(target.value)
    }


    // Loads the selected hero
    const handleHeroIdBlur = ({ target }) => {
        onHeroChange && onHeroChange(target.value)
    }


    // Saves changes to the select Summon Class
    const handleSummonClassChange = ({ target }) => {
        setSummonClass(target.value)
    }


    // Submits the form to the calling component
    const handleSubmit = event => {
        const searchCriteria = { auctionType, heroId, summonClass }
        onSubmit && onSubmit(searchCriteria)
    }


    const auctionTypeOptions = [
        <MenuItem key='sale' value='sale'>sale</MenuItem>,
        <MenuItem key='rent' value='assisting'>rent</MenuItem>
    ]

    const canSubmit = isHeroLoaded && summonClass

    return (
        <div className='SummonsMatchSearchForm'>
            Find me heroes for
            <Select
                label='Auction Type'
                name='auction-type'
                className='auction-type-selecter'
                value={auctionType}
                variant='standard'
                onChange={handleAuctionTypeChange}
            >
                {auctionTypeOptions}
            </Select>
            who could match with hero #
            <div className='hero-id-selecter'>
                <TextField
                    placeholder='hero id'
                    name='hero-id'
                    value={heroId}
                    variant='standard'
                    onChange={handleHeroIdChange}
                    onBlur={handleHeroIdBlur}
                />
            </div>
            to summon a
            <Select
                label='Class to be summoned'
                name='summoned-class'
                className='summoned-class-selecter'
                value={summonClass}
                variant='standard'
                onChange={handleSummonClassChange}
            >
                {summonClassOptions}
            </Select>
            <Button variant='contained' onClick={handleSubmit} disabled={!canSubmit}>
                <SearchIcon />
            </Button>
        </div>
    )
}

SummonsMatchSearchForm.propTypes = {
    isHeroLoaded: PropTypes.bool,
    onHeroChange: PropTypes.func,
    onSubmit: PropTypes.func
}

SummonsMatchSearchForm.defaultProps = {
    isHeroLoaded: false
}

export default SummonsMatchSearchForm
