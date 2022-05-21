import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import './SortFilter.css'

const SortFilter = ({ onFiltersChange, onSortByChange, onViewToggled, visible }) => {
    const [sortBy, setSort] = useState('probability')
    const [summonsRemaining, setSummonsRemaining] = useState('')
    const [maxSummons, setMaxSummons] = useState('')
    const [minGen, setMinGen] = useState('0')
    const [maxGen, setMaxGen] = useState('14')
    const [classMatch, setClassMatch] = useState(false)
    const [subclassMatch, setSubclassMatch] = useState(false)
    const [professionMatch, setProfessionMatch] = useState(false)
    const [includeSummonClass, setIncludeSummonClass] = useState(false)

    const handleFilterChange = ({ target }) => {
        let _summonsRemaining = summonsRemaining
        let _maxSummons = maxSummons
        let _minGen = minGen
        let _maxGen = maxGen
        let _classMatch = classMatch
        let _subclassMatch = subclassMatch
        let _professionMatch = professionMatch
        let _includeSummonClass = includeSummonClass

        switch (target.name) {
            case 'summonsRemaining':
                _summonsRemaining = target.value
                setSummonsRemaining(target.value)
                break;
            case 'maxSummons':
                _maxSummons = target.value
                setMaxSummons(target.value)
                break;
            case 'minGen':
                _minGen = target.value
                setMinGen(target.value)
                break;
            case 'maxGen':
                _maxGen = target.value
                setMaxGen(target.value)
                break;
            case 'classMatch':
                _classMatch = target.checked
                setClassMatch(_classMatch)
                console.log(`class set to ${_classMatch}`)
                break;
            case 'subclassMatch':
                _subclassMatch = target.checked
                setSubclassMatch(_subclassMatch)
                break;
            case 'professionMatch':
                _professionMatch = target.checked
                setProfessionMatch(_professionMatch)
                break;
            case 'includeSummonClass':
                _includeSummonClass = target.checked
                setIncludeSummonClass(_includeSummonClass)
                break;
            default:
                console.log('unknown search filter selected')
        }

        console.log(`${target.name} set to ${target.value}`)

        onFiltersChange({
            summonsRemaining: _summonsRemaining,
            maxSummons: _maxSummons,
            minGen: _minGen,
            maxGen: _maxGen,
            classMatch: _classMatch,
            subclassMatch: _subclassMatch,
            professionMatch: _professionMatch,
            includeSummonClass: _includeSummonClass
        })
    }

    const handleViewToggled = (event) => {
        onViewToggled(event.target.checked)
    }

    const handleSortByChange = ({ target }) => {
        setSort(target.value)
        onSortByChange(target.value)
    }


    if (!visible)
        return null

    return (
        <Grid container className='sort-filter' justifyContent='center'>
            <Grid item className='section'>
                <Switch defaultChecked={false} onChange={handleViewToggled} />
                Flip Cards
            </Grid>
            <Grid item className='section'>
                <div className='sort-label'>
                    Sort By:
                </div>
                <div className='sort-value'>
                    <Select
                        label='Sort by'
                        name='sort-by'
                        className='sort-by-selecter'
                        value={sortBy}
                        variant='standard'
                        onChange={handleSortByChange}
                    >
                        <MenuItem key='probability' value='probability'>Probability</MenuItem>
                        <MenuItem key='price' value='price'>Price</MenuItem>
                    </Select>
                </div>
            </Grid>
            <Grid item className='section'>
                <div className='filter-label'>
                    Filters:
                </div>
                <div className='filter-selections'>
                    Summons
                    <div className='filter-selecters'>
                        <div className='filter-selecter'>
                            Remaining
                            <TextField
                                name='summonsRemaining'
                                value={summonsRemaining}
                                variant='standard'
                                onChange={handleFilterChange}
                                type='number'
                            />
                        </div>
                        <div className='filter-selecter'>
                            Max
                            <TextField
                                name='maxSummons'
                                value={maxSummons}
                                variant='standard'
                                onChange={handleFilterChange}
                                type='number'
                            />
                        </div>
                    </div>
                </div>
                <div className='filter-selections'>
                    Generation
                    <div className='filter-selecters'>
                        <div className='filter-selecter'>
                            Min
                            <TextField
                                name='minGen'
                                value={minGen}
                                variant='standard'
                                onChange={handleFilterChange}
                                type='number'
                            />
                        </div>
                        <div className='filter-selecter'>
                            Max
                            <TextField
                                name='maxGen'
                                value={maxGen}
                                variant='standard'
                                onChange={handleFilterChange}
                                type='number'
                            />
                        </div>
                    </div>
                </div>
                <div className='gene-match'>
                    <div className='heading'>D/R1 Gene Match</div>
                    <div className='options'>
                        <div className='option'>
                            <Checkbox
                                name='classMatch'
                                value={classMatch}
                                onChange={handleFilterChange}
                                className='gene-checkbox'
                            />
                            <div className='label'>Class</div>
                        </div>
                        <div className='option'>
                            <Checkbox
                                name='subclassMatch'
                                value={subclassMatch}
                                onChange={handleFilterChange}
                                className='gene-checkbox'
                            />
                            <div className='label'>Subclass</div>
                        </div>
                        <div className='option'>
                            <Checkbox
                                name='professionMatch'
                                value={professionMatch}
                                onChange={handleFilterChange}
                                className='gene-checkbox'
                            />
                            <div className='label'>Profession</div>
                        </div>
                    </div>
                </div>
                <div className='include-summon-class'>
                    <div>Include Summon Class</div>
                    <Checkbox
                        name='includeSummonClass'
                        value={includeSummonClass}
                        onChange={handleFilterChange}
                    />
                </div>
            </Grid>
        </Grid>
    )
}

SortFilter.propTypes = {
    onFiltersChange: PropTypes.func,
    onSortByChange: PropTypes.func,
    onViewToggled: PropTypes.func,
    visible: PropTypes.bool,
}

SortFilter.defaultProps = {
    onFiltersChange: () => { },
    onSortByChange: () => { },
    onViewToggled: () => { },
    visible: false,
}

export default SortFilter
