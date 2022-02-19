import StatSection from './StatSection'
import HeroStat from './HeroStat'

import './styles.css'

const HeroCard = ({ hero }) => {
    return (
        <div className='hero-card'>
            <StatSection title='Stats'>
                <HeroStat name='STR' value={hero.strength} main={hero.statBoost1 === 'STR'} minor={hero.statBoost2 === 'STR'} />
                <HeroStat name='DEX' value={hero.dexterity} main={hero.statBoost1 === 'DEX'} minor={hero.statBoost2 === 'DEX'} />
                <HeroStat name='AGI' value={hero.agility} main={hero.statBoost1 === 'AGI'} minor={hero.statBoost2 === 'AGI'} />
                <HeroStat name='VIT' value={hero.vitality} main={hero.statBoost1 === 'VIT'} minor={hero.statBoost2 === 'VIT'} />
                <HeroStat name='END' value={hero.endurance} main={hero.statBoost1 === 'END'} minor={hero.statBoost2 === 'END'} />
                <HeroStat name='INT' value={hero.intelligence} main={hero.statBoost1 === 'INT'} minor={hero.statBoost2 === 'INT'} />
                <HeroStat name='WIS' value={hero.wisdom} main={hero.statBoost1 === 'WIS'} minor={hero.statBoost2 === 'WIS'} />
                <HeroStat name='LCK' value={hero.luck} main={hero.statBoost1 === 'LCK'} minor={hero.statBoost2 === 'LCK'} />
            </StatSection>
            <StatSection title='Professions'>
                <HeroStat name='Mining' value={hero.mining} main={hero.profession === 'mining'} />
                <HeroStat name='Gardening' value={hero.gardening} main={hero.profession === 'gardening'} />
                <HeroStat name='Fishing' value={hero.fishing} main={hero.profession === 'fishing'} />
                <HeroStat name='Foraging' value={hero.foraging} main={hero.profession === 'foraging'} />
            </StatSection>
        </div>
    )
}

export default HeroCard
