import React from 'react'

const HeroStat = ({ name, value, main, minor }) => {
    const nameClasses = `Name${main ? ' Main' : minor ? ' Minor' : ''}`

    return (
        <div className='HeroStat'>
            <div className={nameClasses}>
                {name}
            </div>
            <div className='Value'>
                {value}
            </div>
        </div>
    )
}



export default HeroStat