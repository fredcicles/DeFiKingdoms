import React from 'react'
import PropTypes from 'prop-types'
import { Rarity } from '@thanpolas/dfk-hero/src/constants/constants.const'
import { PascalCase, ToPrice } from '../../helpers/format.helpers'
import HeroSnapshotBack from './HeroSnapshotBack'
import HeroSnapshotFront from './HeroSnapshotFront'
import './styles.css'

const rarityClass = ['common', 'uncommon', 'rare', 'legendary', 'mythic']

const HeroSnapshot = ({ hero, title, view }) => {
    const name = `Hero #${hero.id} ${hero.price ? `- J ${ToPrice(hero.price)}` : ''}`
    const grl = `Gen ${hero.generation} | ${Rarity[hero.rarity]} | Level ${hero.level}`
    const cp = `${PascalCase(hero.mainClass)} / ${PascalCase(hero.subClass)} | ${PascalCase(hero.profession)}`

    return (
        <div className={`hero-snapshot ${rarityClass[hero.rarity]}`}>
            <div className='hero-snapshot-title'>
                {title}
            </div>
            <div className='hero-snapshot-name'>
                {name}
            </div>
            <div className='hero-snapshot-grc'>
                {grl}
            </div>
            <div className='hero-snapshot-grc'>
                {cp}
            </div>
            <div className='hero-snapshot-owner'>
                Owned by: {hero.owner ? hero.owner.name : 'UNAVAILABLE'}
            </div>
            <div className='hero-snapshot-summons'>
                Summons: {hero.summonsRemaining}/{hero.maxSummons}
            </div>
            {view === 'front' && <HeroSnapshotFront hero={hero} />}
            {view === 'back' && <HeroSnapshotBack hero={hero} />}
        </div>
    )
}

HeroSnapshot.propTypes = {
    hero: PropTypes.object,
    view: PropTypes.string
}

HeroSnapshot.defaultProps = {
    view: 'front'
}

export default HeroSnapshot
