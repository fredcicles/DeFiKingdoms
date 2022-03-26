import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import './SortFilter.css'

const SortFilter = ({ onFiltersChange, onSortByChange, visible }) => {
    const [sortBy, setSort] = useState('probability')
    const [summonsRemaining, setSummonsRemaining] = useState('')
    const [maxSummons, setMaxSummons] = useState('')

    const handleFilterChange = ({ target }) => {
        let _summonsRemaining = summonsRemaining
        let _maxSummons = maxSummons

        if (target.name === 'summonsRemaining') {
            _summonsRemaining = target.value
            setSummonsRemaining(_summonsRemaining)
        }

        if (target.name === 'maxSummons') {
            _maxSummons = target.value
            setMaxSummons(_maxSummons)
        }

        onFiltersChange({ summonsRemaining: _summonsRemaining, maxSummons: _maxSummons })
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
            </div>
        </div>
    )
}

SortFilter.propTypes = {
    onFiltersChange: PropTypes.func,
    onSortByChange: PropTypes.func,
    visible: PropTypes.bool,
}

SortFilter.defaultProps = {
    onFiltersChange: () => { },
    onSortByChange: () => { },
    visible: false,
}

export default SortFilter
