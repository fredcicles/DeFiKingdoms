import React from 'react'
import PropTypes from 'prop-types'
import { Rarity } from '@thanpolas/dfk-hero/src/constants/constants.const'
import { ToPrice } from '../../helpers/format.helpers'
import HeroStatSection from '../HeroCard/HeroStatSection'
import HeroSnapshotGenes from './HeroSnapshotGenes'
import HeroStat from '../HeroCard/HeroStat'
import './styles.css'

const rarityClass = ['common', 'uncommon', 'rare', 'legendary', 'mythic']

const HeroSnapshot = ({ hero, title }) => {
    const name = `${hero.name ? hero.name : 'Main Hero'} (#${hero.id}) ${hero.price ? `- J ${ToPrice(hero.price)}` : ''}`
    const grc = `Gen${hero.generation} | ${Rarity[hero.rarity]} | ${hero.mainClass}/${hero.subClass}`
    return <div className={`hero-snapshot ${rarityClass[hero.rarity]}`}>
        <div className='hero-snapshot-title'>
            {title}
        </div>
        <div className='hero-snapshot-name'>
            {name}
        </div>
        <div className='hero-snapshot-grc'>
            {grc}
        </div>
        <div className='hero-snapshot-owner'>
            Owned by: {hero.owner ? hero.owner.name : hero.ownerName}
        </div>
        <div className='hero-snapshot-summons'>
            Summons: {hero.summonsRemaining ? hero.summonsRemaining : hero.summons}/{hero.maxSummons}
        </div>
        <div className='hero-snapshot-genes-section'>
            <HeroSnapshotGenes genes={hero.mainClassGenes} heroid={hero.id} title='Class' />
            <HeroSnapshotGenes genes={hero.subClassGenes} heroid={hero.id} title='SubClass' />
            <HeroSnapshotGenes genes={hero.professionGenes} heroid={hero.id} title='Profession' type={2} />
        </div>
        <HeroStatSection title='Stats'>
            <HeroStat name='STR' value={hero.strength} main={hero.statBoost1 === 'STR'} minor={hero.statBoost2 === 'STR'} />
            <HeroStat name='AGI' value={hero.agility} main={hero.statBoost1 === 'AGI'} minor={hero.statBoost2 === 'AGI'} />
            <HeroStat name='END' value={hero.endurance} main={hero.statBoost1 === 'END'} minor={hero.statBoost2 === 'END'} />
            <HeroStat name='WIS' value={hero.wisdom} main={hero.statBoost1 === 'WIS'} minor={hero.statBoost2 === 'WIS'} />
            <HeroStat name='DEX' value={hero.dexterity} main={hero.statBoost1 === 'DEX'} minor={hero.statBoost2 === 'DEX'} />
            <HeroStat name='VIT' value={hero.vitality} main={hero.statBoost1 === 'VIT'} minor={hero.statBoost2 === 'VIT'} />
            <HeroStat name='INT' value={hero.intelligence} main={hero.statBoost1 === 'INT'} minor={hero.statBoost2 === 'INT'} />
            <HeroStat name='LCK' value={hero.luck} main={hero.statBoost1 === 'LCK'} minor={hero.statBoost2 === 'LCK'} />
        </HeroStatSection>
        <HeroStatSection className='profession-stat-section' title='Professions'>
            <HeroStat name='Mining' value={hero.mining} main={hero.profession === 'mining'} />
            <HeroStat name='Fishing' value={hero.fishing} main={hero.profession === 'fishing'} />
            <HeroStat name='Gardening' value={hero.gardening} main={hero.profession === 'gardening'} />
            <HeroStat name='Foraging' value={hero.foraging} main={hero.profession === 'foraging'} />
        </HeroStatSection>
    </div>
}

HeroSnapshot.propTypes = {
    hero: PropTypes.object
}

export default HeroSnapshot
