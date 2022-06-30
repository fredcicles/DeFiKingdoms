import HeroSnapshot from '../HeroSnapshot'

const MainHero = ({ hero, view }) => {
    return hero ?
        (<div className='main-hero'>
            <HeroSnapshot hero={hero} title='Main Hero' view={view} />
        </div>) :
        null
}

export default MainHero
