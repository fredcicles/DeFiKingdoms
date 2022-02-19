import React from 'react'
import PropTypes from 'prop-types'
import EnhancedTable from '../EnhancedTable'

const ClassContent = ({row}) => <>{row.mainClass} / {row.subClass}</>
const GenesContent = ({row, id}) => <>{row[id].map((data, i) => <p key={`${data}-${i}`}>{data}</p>)}</>

const tableHeadings = [
    {
        id: 'id',
        numeric: false,
        disablePadding: true,
        label: 'Hero ID'
    },
    {
        id: 'mainClass',
        numeric: false,
        disablePadding: true,
        label: 'Class',
        renderData: row => <ClassContent row={row} />
    },
    {
        id: 'profession',
        numeric: false,
        disablePadding: false,
        label: 'Profession',
    },
    {
        id: 'targetProbability',
        numeric: true,
        disablePadding: false,
        label: 'Target Probability %',
        renderData: (row, id) => <>{row[id] && row[id].value ? row[id].value * 100 : 0}%</>
    },
    {
        id: 'mainClassGenes',
        numeric: false,
        disablePadding: false,
        label: 'Main Class Genes',
        renderData: (row, id) => <GenesContent row={row} id={id} />
    },
    {
        id: 'subClassGenes',
        numeric: false,
        disablePadding: false,
        label: 'Sub-class Genes',
        renderData: (row, id) => <GenesContent row={row} id={id} />
    },
    {
        id: 'professionGenes',
        numeric: false,
        disablePadding: false,
        label: 'Profession Genes',
        renderData: (row, id) => <GenesContent row={row} id={id} />
    },
]

const HeroSummonMatchTable = ({ rows }) => {
    return (        
        <EnhancedTable headings={tableHeadings} rows={rows} title='Matching Heroes' />
    )
}

HeroSummonMatchTable.propTypes = {
    rows: PropTypes.array
}

export default HeroSummonMatchTable
