import PropTypes from 'prop-types'
import React from 'react'
import EnhancedTable from '../EnhancedTable/EnhancedTable'

const headings = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
    },
    {
        id: 'calories',
        numeric: true,
        disablePadding: false,
        label: 'Calories',
    },
    {
        id: 'fat',
        numeric: true,
        disablePadding: false,
        label: 'Fat (g)',
    },
    {
        id: 'carbs',
        numeric: true,
        disablePadding: false,
        label: 'Carbs (g)',
    },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
    },
]

// Displays a list of Heroes who are compatible with the Summons Match
const SummonsMatchList = ({ rows }) => {
    return (
        <EnhancedTable headings={headings} rows={rows} title='Matching Heroes' />
    )
}

SummonsMatchList.propTypes = {
    rows: PropTypes.array
}

export default SummonsMatchList
