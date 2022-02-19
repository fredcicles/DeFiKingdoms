import React from 'react'
import TableCell from '@mui/material/TableCell'

const EnhancedTableCell = ({ header, row, labelId }) => {
    let className = header.number && 'number'

    const content = header.renderData
        ? header.renderData(row, header.id)
        : row[header.id]

    return <TableCell key={`${header.id}`} id={labelId} className={className} scope='row' padding={header.disablePadding ? 'none' : 'normal'}>{content}</TableCell>
}

export default EnhancedTableCell
