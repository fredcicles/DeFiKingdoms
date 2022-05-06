import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { CLASS_REV, basicClasses, advancedClasses, eliteClasses, exaltedClasses, PROFESSIONS_AR as professions } from '../../constants/degenking'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import ListSubheader from '@mui/material/ListSubheader'
import MenuItem from '@mui/material/MenuItem'
import SearchIcon from '@mui/icons-material/PersonSearch'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

import './styles.css'

const auctionTypes = [{ label: 'sale', value: 'sale' }, { label: 'rent', value: 'assisting' }]

const realms = [{ label: 'Serendale', value: 'hmy' }, { label: 'Crystalvale', value: 'dfk' }]

const professionAllOption = { label: 'any profession', value: 'all' }

const options = (array) => {
    return array.map(item => {
        const label = typeof (item) === 'string' ? item : item.label
        const value = typeof (item) === 'string' ? item : item.value
        return <MenuItem key={value} value={value}>{label}</MenuItem>
    })
}

const auctionTypeOptions = options(auctionTypes)

const realmOptions = options(realms)

const professionOptions = options([professionAllOption, ...professions])

const SearchFormSimple = ({ defaultSummonClass, isHeroLoaded, onHeroChange, onSubmit, onToggle }) => {
    const [summonClass, setSummonClass] = useState('')
    const [summonProfession, setSummonProfession] = useState('all')
    const [auctionType, setAuctionType] = useState('assisting')
    const [realm, setRealm] = useState('hmy')
    const [heroId, setHeroId] = useState('')
    const [summonClassOptions, setSummonClassOptions] = useState([])

    useEffect(() => {
        // Renders the list of options for the Summon Class dropdown
        const basic = basicClasses
            .sort()
            .map(name => (<MenuItem key={name} value={name}>{CLASS_REV[name]}</MenuItem>))

        const advanced = advancedClasses
            .sort()
            .map(name => (<MenuItem key={name} value={name}>{CLASS_REV[name]}</MenuItem>))

        const elite = eliteClasses
            .sort()
            .map(name => (<MenuItem key={name} value={name}>{CLASS_REV[name]}</MenuItem>))

        const exalted = exaltedClasses
            .sort()
            .map(name => (<MenuItem key={name} value={name}>{CLASS_REV[name]}</MenuItem>))

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

    useEffect(() => {
        if (defaultSummonClass) {
            setSummonClass(defaultSummonClass)
        }
    }, [defaultSummonClass])

    // Saves changes to the selected Auction Type
    const handleAuctionTypeChange = ({ target }) => {
        setAuctionType(target.value)
    }


    // Saves changes to the selected Realm
    const handleRealmChange = ({ target }) => {
        setRealm(target.value)
    }


    // Saves changes to the selected Hero
    const handleHeroIdChange = (event) => {
        setHeroId(event.target.value)
    }


    // Loads the selected hero
    const handleHeroIdBlur = ({ target }) => {
        onHeroChange && onHeroChange(target.value)
    }


    const handleHeroIdEnter = (event) => {
        if (event.key === 'Enter') {
            handleHeroIdBlur(event)
        }
    }


    // Saves changes to the select Summon Profession
    const handleSummonProfessionChange = ({ target }) => {
        setSummonProfession(target.value)
    }


    // Saves changes to the select Summon Class
    const handleSummonClassChange = ({ target }) => {
        setSummonClass(target.value)
    }


    // Submits the form to the calling component
    const handleSubmit = () => {
        const searchCriteria = { auctionType, heroId, realm, summonClass, summonProfession: summonProfession === 'all' ? '' : summonProfession }
        onSubmit && onSubmit(searchCriteria)
    }

    const canSubmit = isHeroLoaded && summonClass

    return (
        <Grid container className='search-form-simple' justifyContent='center' spacing={0}>
            <Grid item>
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
            </Grid>
            <Grid item>
                in the
                <Select
                    label='Realm'
                    name='realm'
                    className='realm-selecter'
                    value={realm}
                    variant='standard'
                    onChange={handleRealmChange}
                >
                    {realmOptions}
                </Select>
                tavern, 
            </Grid>
            <Grid item className='hero-container'>
                who can match with hero #
                    <TextField
                        className='hero-id-selecter'
                        placeholder='hero id'
                        name='hero-id'
                        value={heroId}
                        variant='standard'
                        onChange={handleHeroIdChange}
                        onBlur={handleHeroIdBlur}
                        onKeyPress={handleHeroIdEnter}
                    />
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item>
                for
                <Select
                    label='Profession to be summoned'
                    name='summoned-profession'
                    className='summoned-profession-selecter'
                    value={summonProfession}
                    variant='standard'
                    onChange={handleSummonProfessionChange}
                >
                    {professionOptions}
                </Select>
            </Grid>
            <Grid item>
                <Button variant='contained' onClick={handleSubmit} disabled={!canSubmit}>
                    <SearchIcon />
                </Button>
                {/* <a href="#" className='search-form-toggle' onClick={onToggle}>Advanced Search</a> */}
            </Grid>
        </Grid>
    )
}

SearchFormSimple.propTypes = {
    defaultSummonClass: PropTypes.string,
    isHeroLoaded: PropTypes.bool,
    onHeroChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onToggle: PropTypes.func,
}

SearchFormSimple.defaultProps = {
    defaultSummonClass: '',
    isHeroLoaded: false,
    onToggle: () => { }
}

export default SearchFormSimple
