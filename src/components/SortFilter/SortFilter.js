import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'
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
    const [includeSummonClass, setIncludeSummonClass] = useState(false)

    const handleFilterChange = ({ target }) => {
        let _summonsRemaining = summonsRemaining
        let _maxSummons = maxSummons
        let _minGen = minGen
        let _maxGen = maxGen
        let _includeSummonClass = includeSummonClass

        if (target.name === 'summonsRemaining') {
            _summonsRemaining = target.value
            setSummonsRemaining(target.value)
        }

        if (target.name === 'maxSummons') {
            _maxSummons = target.value
            setMaxSummons(target.value)
        }

        if (target.name === 'minGen') {
            _minGen = target.value
            setMinGen(target.value)
        }

        if (target.name === 'maxGen') {
            _maxGen = target.value
            setMaxGen(target.value)
        }

        if (target.name === 'includeSummonClass') {
            _includeSummonClass = Boolean(target.value)
            setIncludeSummonClass(target.value)
        }

        onFiltersChange({ summonsRemaining: _summonsRemaining, maxSummons: _maxSummons, minGen: _minGen, maxGen: _maxGen, includeSummonClass: _includeSummonClass })
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
        <div className='sort-filter'>
            <div className='section'>
                <Switch defaultChecked={false} onChange={handleViewToggled} />
                Flip Cards
            </div>
            <div className='section'>
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
            </div>
            <div className='section'>
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
                <div className='include-summon-class'>
                    <div>Include Summon Class</div>
                    <Checkbox
                        name='includeSummonClass'
                        value={includeSummonClass}
                        onChange={handleFilterChange}
                    />
                </div>
            </div>
        </div>
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
