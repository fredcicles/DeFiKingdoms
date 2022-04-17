import React from 'react'
import HeroSnapshotGenes from './HeroSnapshotGenes'
import HeroSnapshotStatGenes from './HeroSnapshotStatGenes'

const HeroSnapshotBack = ({ hero }) => {
    return (
        <>
            <div className='hero-snapshot-genes-section'>
                <HeroSnapshotGenes genes={hero.mainClassGenes} heroid={hero.id} title='Class' />
                <HeroSnapshotGenes genes={hero.subClassGenes} heroid={hero.id} title='SubClass' />
                <HeroSnapshotGenes genes={hero.professionGenes} heroid={hero.id} title='Profession' type={2} />
            </div>
            <div className='hero-snapshot-genes-section'>
                <HeroSnapshotStatGenes genes={hero} heroid={hero.id} />
            </div>
        </>
    )
}

export default HeroSnapshotBack
