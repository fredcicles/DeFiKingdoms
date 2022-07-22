import { getHeroById } from '../../services/hero.service'

export const getMainHero = async id => {
    const heroes = await getHeroById(id)
    if (!heroes.length) return null
    return heroes[0]
}

export const ConvertToCrystalValeHeroId = heroId => `${'1000000000000'.slice(0, 13 - heroId.length)}${heroId}`
