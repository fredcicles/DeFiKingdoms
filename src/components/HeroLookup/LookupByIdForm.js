import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { REALMS } from '../../constants/constants'

import { CrystalIcon, JewelIcon } from '../Icons'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import HeroCard from './HeroCard'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField'

const LookupByIdForm = ({ onHeroSelected, onLoadHero, selectedHero }) => {
    const [heroId, setHeroId] = useState('')
    const [originRealm, setOriginRealm] = useState(REALMS.serendale.id)

    // Look up the hero when originRealm changes
    useEffect(() => {
        heroId && loadHero()
        // eslint-disable-next-line
    }, [originRealm])

    // update the stored value when value in the form value changes
    const handleHeroIdChange = ({ target }) => setHeroId(target.value)

    // Loads the selected hero when the enter key is pressed inside the HeroId text box
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            loadHero()
        }
    }

    // Update the state value when the form value changes
    const handleOriginRealmChange = ({ target }) => {
        setOriginRealm(target.value)
    }

    // Call the load hero function with the specified values
    const loadHero = () => {
        onLoadHero({ heroId, originRealm })
    }

    return (
        <div className='manual-selecter'>
            <FormControl>
                <RadioGroup
                    className='origin-realm-selecter'
                    name='originRealm'
                    onChange={handleOriginRealmChange}
                    value={originRealm}
                >
                    <FormControlLabel
                        className='origin-realm-label'
                        control={<Radio className='origin-realm-radio' size='small' checkedIcon={<JewelIcon />} />}
                        label={REALMS.serendale.name}
                        value='SER'
                    />
                    <FormControlLabel
                        className='origin-realm-label'
                        control={<Radio className='origin-realm-radio' size='small' checkedIcon={<CrystalIcon />} />}
                        label={REALMS.crystalvale.name}
                        value='CRY'
                    />
                </RadioGroup>
            </FormControl>
            <TextField
                autoFocus
                id="heroId"
                label="Hero Id"
                margin="dense"
                onBlur={loadHero}
                onChange={handleHeroIdChange}
                onKeyPress={handleKeyPress}
                value={heroId}
                variant="filled"
            />
            {selectedHero &&
                <Button onClick={() => onHeroSelected(selectedHero)}>
                    <HeroCard hero={selectedHero} />
                </Button>
            }
        </div>
    )
}

LookupByIdForm.propTypes = {
    onHeroSelected: PropTypes.func,
    onLoadHero: PropTypes.func,
    selectedHero: PropTypes.object
}

LookupByIdForm.defaultProps = {
    onHeroSelected: () => {},
    onLoadHero: () => {}
}

export default LookupByIdForm
