import { useState } from 'react'
import PropTypes from 'prop-types'
import { REALMS } from '../../constants/constants'
import { getMainHero, ConvertToCrystalValeHeroId } from './functions'
import { getAllHeroesFromWallets } from '../../services/hero.service'

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

import HeroList from './HeroList'
import LookupByIdForm from './LookupByIdForm'
import WalletForm from './WalletForm'

import './styles.css'

const TabPanel = ({ active, children, id }) => {
    return id === active ? (<>{children}</>) : null
}

const HeroLookup = ({ name, onClose, onSave, open }) => {
    const [error, setError] = useState('')
    const [heroesInWallet, setHeroesInWallet] = useState([])
    const [loadingHeroes, setLoadingHeroes] = useState(false)
    const [lookingUpHero, setLookingUpHero] = useState(false)
    const [selectedHero, setSelectedHero] = useState(null)
    const [tab, setTab] = useState('id')

    // Change the selected tab
    const handleTabChange = (event, value) => {
        setTab(value)
    }

    // Return the current hero
    const handleSave = () => {
        onSave({ target: { name: name, value: selectedHero } })
    }

    // Return the selected hero
    const handleWalletHeroSelected = hero => {
        setSelectedHero(hero)
        onSave({ target: { name: name, value: hero } })
    }

    // Load all heroes from specified wallets
    const loadHeroesFromWallets = async (walletAddresses) => {
        setLoadingHeroes(true)
        setSelectedHero(null)

        let walletHeroes = await getAllHeroesFromWallets(walletAddresses)

        setHeroesInWallet(walletHeroes)
        setLoadingHeroes(false)
    }

    // Looks up the Hero for the given id
    const loadHeroById = async ({ heroId: heroIdDisplayed, originRealm }) => {
        const heroIdActual = originRealm === REALMS.serendale.id
            ? heroIdDisplayed
            : ConvertToCrystalValeHeroId(heroIdDisplayed)

        if (heroIdActual && (!selectedHero || selectedHero.id !== heroIdActual)) {
            // Clear currently displayed main and matching heroes
            setLookingUpHero(true)
            setSelectedHero()
            setError('')

            // Retrieve the main hero from DFK
            const _mainHero = await getMainHero(heroIdActual)

            if (_mainHero) {
                setSelectedHero(_mainHero)
            } else {
                setError('Hero not found.')
            }

            setLookingUpHero(false)
        }
    }

    return (
        <Dialog open={open} onClose={onClose} className='hero-lookup'>
            <DialogTitle>Hero Lookup</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {error && error}
                    {lookingUpHero && 'Looking up hero...'}
                    {loadingHeroes && 'Loading heroes from wallets...'}
                </DialogContentText>

                <Tabs value={tab} onChange={handleTabChange}>
                    <Tab label='By Hero Id' value='id' />
                    <Tab label='By Wallet' value='wallet' />
                </Tabs>

                <TabPanel active={tab} id='id'>
                    <DialogContentText className='instructions'>
                        You can look up a hero by entering their hero id.  Once the desired hero is displayed, click the hero card to select the hero and return to the search page.
                    </DialogContentText>
                    <LookupByIdForm
                        onHeroSelected={handleSave}
                        onLoadHero={loadHeroById}
                        selectedHero={selectedHero} />
                </TabPanel>

                <TabPanel active={tab} id='wallet'>
                    <DialogContentText className='instructions'>
                        Enter the wallet address(es) and then click the magnifying glass to view a list of heroes to choose from.  Click the hero card to select the hero and return to the search page.
                    </DialogContentText>
                    <WalletForm
                        onSubmit={loadHeroesFromWallets} />
                    <HeroList
                        heroes={heroesInWallet}
                        onHeroSelected={handleWalletHeroSelected} />
                </TabPanel>
            </DialogContent>
        </Dialog>
    )
}

HeroLookup.propTypes = {
    name: PropTypes.string,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
    open: PropTypes.bool
}

HeroLookup.defaultProps = {
    onClose: () => { },
    onSave: () => { }
}

export default HeroLookup
