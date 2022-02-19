import React from 'react'
import PropTypes from 'prop-types'

const HeroStatSection = ({ children, className, title }) => {
    return (
        <div className={`hero-stat-section ${className}`}>
            <div className='title'>{title}</div>
            <div className='stat-group'>
                {children}
            </div>
        </div>
    )
}

HeroStatSection.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string
}

HeroStatSection.defaultProps = {
    className: 'hero-stat-section'
}

export default HeroStatSection
