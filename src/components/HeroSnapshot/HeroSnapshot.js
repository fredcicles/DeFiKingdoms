import React from 'react'
import PropTypes from 'prop-types'
import { Rarity } from '@thanpolas/dfk-hero/src/constants/constants.const'
import { PascalCase } from '../../helpers/format.helpers'
import HeroSnapshotBack from './HeroSnapshotBack'
import HeroSnapshotFront from './HeroSnapshotFront'
import './styles.css'

const rarityClass = ['common', 'uncommon', 'rare', 'legendary', 'mythic']
const JewelIcon = () => (<img src='/jewel50.png' className='jewel-icon' alt='Jewel' />)

const PriceGroup = ({ label, showJewel, value }) => (
    <div className='price-group'>
        <div className='price-value'>
            {value}{showJewel && <JewelIcon />}
        </div>
        <div className='price-label'>
            {label}
        </div>
    </div>
)

const HeroSnapshot = ({ hero, title, view }) => {
    const grl = `Gen ${hero.generation} | ${Rarity[hero.rarity]} | Level ${hero.level}`
    const cp = `${PascalCase(hero.mainClass)} / ${PascalCase(hero.subClass)} | ${PascalCase(hero.profession)}`

    return (
        <div className={`hero-snapshot ${rarityClass[hero.rarity]}`}>
            <div className='hero-snapshot-title'>
                {title}
            </div>
            <div className='hero-snapshot-name'>
                Hero #{hero.id}
            </div>
            <div className='hero-snapshot-grc'>
                {grl}
            </div>
            <div className='hero-snapshot-grc'>
                {cp}
            </div>
            {view === 'front' && <HeroSnapshotFront hero={hero} />}
            {view === 'back' && <HeroSnapshotBack hero={hero} />}
            <div className='hero-snapshot-pricing'>
                {hero.price && (<PriceGroup label={<>{`${hero.auctionType === 'sale' ? 'Purchase' : 'Rental'}`}<br />Price</>} value={hero.price} showJewel />)}
                <PriceGroup label={<>Summon<br />Cost</>} value={hero.summonCost} showJewel />
                {hero.auctionType === 'assisting' && <PriceGroup label={<>Total<br />Cost</>} value={hero.price + hero.summonCost} showJewel />}
                <PriceGroup label={<>Summons<br/>Remaining</>} value={`${hero.summonsRemaining}/${hero.maxSummons}`} />
            </div>
            <div className='hero-snapshot-owner'>
                Owned by: {hero.owner ? hero.owner.name : 'UNAVAILABLE'}
            </div>
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
