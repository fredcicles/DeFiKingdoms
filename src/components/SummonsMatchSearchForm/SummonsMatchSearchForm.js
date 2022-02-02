import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { CONSTANTS } from '@thanpolas/dfk-hero'
//import { CONSTANTS } from '../../services/DfkHero'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/PersonSearch'
//import strings from './strings'
import './styles.css'

const SummonsMatchSearchForm = ({ onHeroChange, onSubmit }) => {
    const [summonClass, setSummonClass] = useState('warrior')
    const [heroId, setHeroId] = useState('95734')


    // Saves changes to the selected Hero
    const handleHeroIdChange = ({ target }) => {
        console.log('Selected Hero Id changed')
        setHeroId(target.value)
    }


    // Saves changes to the select Summon Class
    const handleSummonClassChange = ({ target }) => {
        console.log('Selected Summon Class changed')
        setSummonClass(target.value)
    }


    // Submits the form to the calling component
    const handleSubmit = event => {
        console.log('Search button clicked')
        const searchCriteria = { heroId, summonClass }
        onSubmit && onSubmit(searchCriteria)
    }


    // Renders the list of options for the Summon Class dropdown
    const summonClassOptions = Object
        .keys(CONSTANTS.CLASS_REV)
        .sort()
        .map(name => (<MenuItem key={name} value={name}>{CONSTANTS.CLASS_REV[name]}</MenuItem>))


    return (
        <div className='SummonsMatchSearchForm'>
            Find me heroes who could match with hero
            <div className='hero-id-selecter'>
                <TextField
                    label='Hero ID'
                    name='hero-id'
                    value={heroId}
                    variant='standard'
                    onChange={handleHeroIdChange}
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
            <Button variant='contained' onClick={handleSubmit}>
                <SearchIcon />
            </Button>
        </div>
    )
}

SummonsMatchSearchForm.propTypes = {
    onHeroChange: PropTypes.func,
    onSubmit: PropTypes.func
}

export default SummonsMatchSearchForm
