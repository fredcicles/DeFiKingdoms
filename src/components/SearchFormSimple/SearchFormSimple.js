import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { CLASS_REV, basicClasses, advancedClasses, eliteClasses, exaltedClasses, PROFESSIONS_AR as professions } from '../../constants/degenking'
import { NETWORKS, REALMS } from '../../constants/realms'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import ListSubheader from '@mui/material/ListSubheader'
import MenuItem from '@mui/material/MenuItem'
import SearchIcon from '@mui/icons-material/PersonSearch'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

import './styles.css'

const JewelIcon = () => (<img src='/jewel50.png' className='jewel-icon' alt='Jewel' />)
const CrystalIcon = () => (<img src='/crystal100.png' className='jewel-icon' alt='Jewel' />)

const auctionTypes = [{ label: 'sale', value: 'sale' }, { label: 'rent', value: 'assisting' }, { label: 'wallet', value: 'wallet' }]

const networks = [{ label: 'Serendale', value: NETWORKS.harmony.id }, { label: 'Crystalvale', value: NETWORKS.dfkchain.id }]

const professionAllOption = { label: 'any profession', value: 'all' }

const options = (array) => {
    return array.map(item => {
        const label = typeof (item) === 'string' ? item : item.label
        const value = typeof (item) === 'string' ? item : item.value
        return <MenuItem key={value} value={value}>{label}</MenuItem>
    })
}

const auctionTypeOptions = options(auctionTypes)

const networkOptions = options(networks)

const professionOptions = options([professionAllOption, ...professions])

const SearchFormSimple = ({ defaultSummonClass, isHeroLoaded, onHeroChange, onSubmit, onToggle }) => {
    const [summonClass, setSummonClass] = useState('')
    const [summonProfession, setSummonProfession] = useState('all')
    const [auctionType, setAuctionType] = useState('assisting')
    const [network, setNetwork] = useState(NETWORKS.harmony.id)
    const [originRealm, setOriginRealm] = useState(REALMS.serendale.id)
    const [heroId, setHeroId] = useState('')
    const [summonClassOptions, setSummonClassOptions] = useState([])
    const [walletAddress, setWalletAddress] = useState('')

    useEffect(() => {
        // Renders the list of options for the Summon Class dropdown
        const basic = basicClasses
            .sort()
            .map(name => (<MenuItem key={name} value={name}>{CLASS_REV[name]}</MenuItem>))

        const advanced = advancedClasses
            .sort()
            .map(name => (<MenuItem key={name} value={name}>{CLASS_REV[name]}</MenuItem>))

        const elite = eliteClasses
            .sort()
            .map(name => (<MenuItem key={name} value={name}>{CLASS_REV[name]}</MenuItem>))

        const exalted = exaltedClasses
            .sort()
            .map(name => (<MenuItem key={name} value={name}>{CLASS_REV[name]}</MenuItem>))

        const options = [
            (<ListSubheader key='basic'>Basic Classes</ListSubheader>),
            ...basic,
            (<ListSubheader key='advanced'>Advanced Classes</ListSubheader>),
            ...advanced,
            (<ListSubheader key='elite'>Elite Classes</ListSubheader>),
            ...elite,
            (<ListSubheader key='exalted'>Exalted Classes</ListSubheader>),
            ...exalted
        ]

        setSummonClassOptions(options)
    }, [])

    useEffect(() => {
        if (defaultSummonClass) {
            setSummonClass(defaultSummonClass)
        }
    }, [defaultSummonClass])

    // Saves changes to the selected Auction Type
    const handleAuctionTypeChange = ({ target }) => {
        setAuctionType(target.value)
    }


    // Saves changes to the selected Hero
    const handleHeroIdChange = ({ target }) => {
        setHeroId(target.value)
    }


    // Loads the selected hero
    const handleHeroIdBlur = ({ target }) => {
        onHeroChange && onHeroChange(target.value, originRealm)
    }


    const handleHeroIdEnter = (event) => {
        if (event.key === 'Enter') {
            handleHeroIdBlur(event)
        }
    }


    // Saves changes to the selected Network
    const handleNetworkChange = ({ target }) => {
        setNetwork(target.value)
    }


    // Saves changes to the selected Origin Realm
    const handleOriginRealmChange = ({ target }) => {
        setOriginRealm(target.value)
        heroId && onHeroChange && onHeroChange(heroId, target.value)
    }


    // Saves changes to the select Summon Profession
    const handleSummonProfessionChange = ({ target }) => {
        setSummonProfession(target.value)
    }


    // Saves changes to the select Summon Class
    const handleSummonClassChange = ({ target }) => {
        setSummonClass(target.value)
    }

    // Saves changes to the select Wallet Address
    const handleWalletAddressChange = ({ target }) => {
        setWalletAddress(target.value)
    }

    // Submits the form to the calling component
    const handleSubmit = () => {
        const searchCriteria = {
            auctionType,
            heroId,
            network,
            originRealm,
            summonClass,
            summonProfession: summonProfession === 'all' ? '' : summonProfession,
            walletAddress
        }
        onSubmit && onSubmit(searchCriteria)
    }

    const canSubmit = isHeroLoaded && summonClass

    return (
        <Grid container className='search-form-simple' justifyContent='center' spacing={0}>
            <Grid item>
                Find me heroes for
                <Select
                    label='Auction Type'
                    name='auction-type'
                    className='auction-type-selecter'
                    value={auctionType}
                    variant='standard'
                    onChange={handleAuctionTypeChange}
                >
                    {auctionTypeOptions}
                </Select>
            </Grid>
            {auctionType === 'wallet' && (
                <Grid item>
                    <TextField
                        className='wallet-address-selector'
                        placeholder='wallet address'
                        name='wallet-address'
                        value={walletAddress}
                        variant='standard'
                        onChange={handleWalletAddressChange}
                    />
                </Grid>
            )}

            {auctionType !== 'wallet' && (
                <Grid item>
                    in the
                    <Select
                        name='network'
                        className='network-selecter'
                        value={network}
                        variant='standard'
                        onChange={handleNetworkChange}
                    >
                        {networkOptions}
                    </Select>
                    tavern,
                </Grid>
            )}
            <Grid item className='hero-container'>
                who can match with hero
                <Select
                    className='origin-realm-selecter'
                    name='origin-realm'
                    value={originRealm}
                    variant='standard'
                    onChange={handleOriginRealmChange}
                >
                    <MenuItem value={REALMS.serendale.id}>
                        <JewelIcon />
                    </MenuItem>
                    <MenuItem value={REALMS.crystalvale.id}>
                        <CrystalIcon />
                    </MenuItem>
                </Select>
                #
                <TextField
                    className='hero-id-selecter'
                    placeholder='hero id'
                    name='hero-id'
                    value={heroId}
                    variant='standard'
                    onChange={handleHeroIdChange}
                    onBlur={handleHeroIdBlur}
                    onKeyPress={handleHeroIdEnter}
                />
            </Grid>
            <Grid item>
                to summon a
                <Select
                    label='Class to be summoned'
                    name='summoned-class'
                    className='summoned-class-selecter'
                    value={summonClass}
                    variant='standard'
                    onChange={handleSummonClassChange}
                >
                    {summonClassOptions}
                </Select>
            </Grid>
            <Grid item>
                for
                <Select
                    label='Profession to be summoned'
                    name='summoned-profession'
                    className='summoned-profession-selecter'
                    value={summonProfession}
                    variant='standard'
                    onChange={handleSummonProfessionChange}
                >
                    {professionOptions}
                </Select>
            </Grid>
            <Grid item>
                <Button variant='contained' onClick={handleSubmit} disabled={!canSubmit}>
                    <SearchIcon />
                </Button>
                {/* <a href="#" className='search-form-toggle' onClick={onToggle}>Advanced Search</a> */}
            </Grid>
        </Grid>
    )
}

SearchFormSimple.propTypes = {
    defaultSummonClass: PropTypes.string,
    isHeroLoaded: PropTypes.bool,
    onHeroChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onToggle: PropTypes.func,
}

SearchFormSimple.defaultProps = {
    defaultSummonClass: '',
    isHeroLoaded: false,
    onToggle: () => { }
}

export default SearchFormSimple
