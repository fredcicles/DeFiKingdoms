import { RARITIES_ARR } from '../../constants/constants'
import HeroSummary from '../HeroSnapshot/HeroSummary'

const HeroCard = ({ hero }) => {
    return (
        <div className={`hero-summary ${RARITIES_ARR[hero.rarity]}`}>
            <HeroSummary hero={hero} />
        </div>
    )
}

export default HeroCard
