import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import './SortFilter.css'

const SortFilter = ({ onSortByChange, visible }) => {
    const [sortBy, setSort] = useState('probability')

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
        </div>
    )
}

SortFilter.propTypes = {
    onSortByChange: PropTypes.func,
    visible: PropTypes.bool,
}

SortFilter.defaultProps = {
    onSortByChange: () => { },
    visible: false,
}

export default SortFilter
