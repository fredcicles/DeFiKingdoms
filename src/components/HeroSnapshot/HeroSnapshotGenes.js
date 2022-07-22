import React from 'react'
import PropTypes from 'prop-types'
import { CLASS_REV } from '../../constants/degenking'
import { GENE_TITLES_ARR, GENE_TYPES } from '../../constants/constants'

const PROFESSIONS = {
    mining: 'Mining',
    foraging: 'Foraging',
    gardening: 'Gardening',
    fishing: 'Fishing'
}

const HeroSnapshotGenes = ({ className, genes, heroid, highlighted, title, type }) => {
    return <div className={`hero-snapshot-genes${className ? ` ${className}` : ''}`}>
        <div className='title'>{title}</div>
        {genes.map((gene, i) => {
            // Get the nice name for the gene
            let geneName = type === GENE_TYPES.Classes ? CLASS_REV[gene] : type === GENE_TYPES.Professions ? PROFESSIONS[gene] : gene
            
            // Back-up, in case gene is not in the appropriate array
            if (!geneName) geneName = gene

            const geneTitle = GENE_TITLES_ARR[i]

            return (
                <div key={`${heroid}-${geneTitle}`} className='gene'>
                    <div className='label'>{geneTitle}:</div>
                    <div className={`value${highlighted && highlighted.includes(gene) ? ' highlighted' : ''}`}>{geneName}</div>
                </div>
            )
        })}
    </div>
}

HeroSnapshotGenes.propTypes = {
    className: PropTypes.string,
    genes: PropTypes.array,
    heroid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    highlighted: PropTypes.array,
    title: PropTypes.string,
    type: PropTypes.number
}

HeroSnapshotGenes.defaultProps = {
    type: 0
}

export default HeroSnapshotGenes
