import React from 'react'
import PropTypes from 'prop-types'

const StatGene = ({ boldIfNot, value }) => {
    let className = 'value'

    if (boldIfNot && !value.toString().toLowerCase().includes(boldIfNot)) {
         className += ' highlighted'
    }

    return (
        <div className='gene'>
            <div className={className}>{value}</div>
        </div>
    )
}

const HeroSnapshotStatGenes = ({ className, genes }) => {

    const statsUnknown1 = genes['statsUnknown1'] ? genes['statsUnknown1'] : genes.statGenes['statsUnknown1']
    const statsUnknown2 = genes['statsUnknown2'] ? genes['statsUnknown2'] : genes.statGenes['statsUnknown2']
    const element = genes['element'] ? genes['element'] : genes.statGenes['element']

    return (
        <>
            <div className={`hero-snapshot-genes ${className}`}>
                <div className='title'>Active</div>
                <StatGene value={genes['active1']} boldIfNot='basic' />
                <StatGene value={genes['active2']} boldIfNot='basic' />
            </div>
            <div className={`hero-snapshot-genes ${className}`}>
                <div className='title'>Passive</div>
                <StatGene value={genes['passive1']} boldIfNot='basic' />
                <StatGene value={genes['passive2']} boldIfNot='basic' />
            </div>
            <div className={`hero-snapshot-genes ${className}`}>
                <div className='title'>Unknown</div>
                <StatGene value={statsUnknown1} />
                <StatGene value={statsUnknown2} />
            </div>
            <div className={`hero-snapshot-genes ${className}`}>
                <div className='title'>Element</div>
                <StatGene value={element} />
            </div>
        </>
    )
}

HeroSnapshotStatGenes.propTypes = {
    className: PropTypes.string,
    genes: PropTypes.object
}

HeroSnapshotStatGenes.defaultProps = {
}

export default HeroSnapshotStatGenes
