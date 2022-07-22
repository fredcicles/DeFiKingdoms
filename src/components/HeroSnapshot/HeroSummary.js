import { Rarity } from '@thanpolas/degenking/src/constants/constants.const'
import { PascalCase } from '../../helpers/format.helpers'
import { REALMS } from '../../constants/constants'
import { CrystalIcon, JewelIcon } from '../Icons'
import './HeroSummary.css'

const HeroSummary = ({ hero }) => {
    const grl = `Gen ${hero.generation} | ${Rarity[hero.rarity]} | Level ${hero.level}`
    const cp = `${PascalCase(hero.mainClass)} / ${PascalCase(hero.subClass)} | ${PascalCase(hero.profession)}`
    const icon = hero.originRealm === REALMS.serendale.id ? <JewelIcon /> : <CrystalIcon />

    return (
        <>
            <div className='hero-summary-name'>
                Hero {icon} #{hero.displayId}
            </div>
            <div className='hero-summary-details'>
                {grl}
            </div>
            <div className='hero-summary-details'>
                {cp}
            </div>
        </>
    )
}

export default HeroSummary
