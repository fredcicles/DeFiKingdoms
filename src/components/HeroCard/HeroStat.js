import React from 'react'

const HeroStat = ({ name, value, main, minor }) => {
    const nameClasses = `name${main && minor ? ' main-minor' : main ? ' main' : minor ? ' minor' : ''}`

    return (
        <div className='hero-stat'>
            <div className={nameClasses}>
                {name}
            </div>
            <div className='value'>
                {value}
            </div>
        </div>
    )
}



export default HeroStat