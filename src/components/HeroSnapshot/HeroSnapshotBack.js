import React from 'react'
import PropTypes from 'prop-types'
import HeroSnapshotGenes from './HeroSnapshotGenes'
import HeroSnapshotStatGenes from './HeroSnapshotStatGenes'
import { GENE_TYPES } from '../../constants/constants'

const HeroSnapshotBack = ({ highlights, hero }) => {
    return (
        <>
            <div className='hero-snapshot-genes-section'>
                <HeroSnapshotGenes genes={hero.mainClassGenes} heroid={hero.id} title='Class' highlighted={highlights.mainClass} />
                <HeroSnapshotGenes genes={hero.subClassGenes} heroid={hero.id} title='SubClass' />
                <HeroSnapshotGenes genes={hero.professionGenes} heroid={hero.id} title='Profession' type={GENE_TYPES.Professions} highlighted={highlights.profession} />
            </div>
            <div className='hero-snapshot-stat-genes-section'>
                <HeroSnapshotStatGenes genes={hero} />
            </div>
        </>
    )
}

HeroSnapshotBack.propTypes = {
    highlights: PropTypes.object
}

HeroSnapshotBack.defaultProps = {
    highlights: {}
}

export default HeroSnapshotBack
