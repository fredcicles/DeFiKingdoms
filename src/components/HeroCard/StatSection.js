import React from 'react'

const StatSection = ({ children, title }) => {
    return (
        <div className='HeroStats'>
            <div className='Title'>{title}</div>
            <div className='StatGroup'>
                {children}
            </div>
        </div>
    )
}

export default StatSection
