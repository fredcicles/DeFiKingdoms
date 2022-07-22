import React from 'react'
import PropTypes from 'prop-types'
import { NETWORKS, RARITIES_ARR } from '../../constants/constants'
import HeroSnapshotBack from './HeroSnapshotBack'
import HeroSnapshotFront from './HeroSnapshotFront'
import HeroSummary from './HeroSummary'
import './styles.css'

const JewelIcon = () => (<img src='/jewel50.png' className='jewel-icon' alt='Jewel' />)
const CrystalIcon = () => (<img src='/crystal100.png' className='jewel-icon' alt='Jewel' />)

const PriceGroup = ({ label, showIcon, network, value }) => {
    const icon = network === NETWORKS.harmony.id ? <JewelIcon /> : <CrystalIcon />
    return (
        <div className='price-group'>
            <div className='price-value'>
                {value}{showIcon && icon}
            </div>
            <div className='price-label'>
                {label}
            </div>
        </div>
    )
}

const HeroSnapshot = ({ highlights, hero, title, view }) => {
    return (
        <div className={`hero-snapshot ${RARITIES_ARR[hero.rarity]}`}>
            <div className='hero-snapshot-title'>
                {title}
            </div>
            <HeroSummary hero={hero} />
            {view === 'front' && <HeroSnapshotFront hero={hero} />}
            {view === 'back' && <HeroSnapshotBack hero={hero} highlights={highlights} />}
            <div className='hero-snapshot-pricing'>
                {hero.price && (<PriceGroup label={<>{`${hero.auctionType === 'sale' ? 'Purchase' : 'Rental'}`}<br />Price</>} value={hero.price} showIcon network={hero.network} />)}
                <PriceGroup label={<>Summon<br />Cost</>} value={hero.summonCost} showIcon network={hero.network} />
                {hero.auctionType === 'assisting' && <PriceGroup label={<>Total<br />Cost</>} value={Number(hero.price) + Number(hero.summonCost)} showIcon network={hero.network} />}
                <PriceGroup label={hero.generation === 0 ? <>Total<br />Summons</> : <>Summons<br />Remaining</>} value={`${hero.maxSummons === 11 ? hero.summons : hero.summonsRemaining}/${hero.maxSummons === 11 ? '∞' : hero.maxSummons}`} />
            </div>
            <div className='hero-snapshot-owner'>
                Owned by: {hero.owner ? hero.owner.name : 'UNAVAILABLE'}
            </div>
        </div>
    )
}

HeroSnapshot.propTypes = {
    hero: PropTypes.object,
    highlights: PropTypes.object,
    view: PropTypes.string
}

HeroSnapshot.defaultProps = {
    view: 'front'
}

export default HeroSnapshot
