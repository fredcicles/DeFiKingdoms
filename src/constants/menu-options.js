import { NETWORKS, REALMS } from './constants'
import { CLASS_REV, basicClasses, advancedClasses, eliteClasses, exaltedClasses, PROFESSIONS_AR as professions } from './degenking'
import { CrystalIcon, JewelIcon } from '../components/Icons'
import ListSubheader from '@mui/material/ListSubheader'
import MenuItem from '@mui/material/MenuItem'
import ToggleButton from '@mui/material/ToggleButton'

const options = (array) => {
    return array.map(item => {
        const label = typeof (item) === 'string' ? item : item.label
        const value = typeof (item) === 'string' ? item : item.value
        return <MenuItem key={value} value={value}>{label}</MenuItem>
    })
}

const auctionTypes = [
    { label: 'sale', value: 'sale' },
    { label: 'rent', value: 'assisting' },
    { label: 'wallet', value: 'wallet' }
]

const networks = [
    { label: 'Serendale', value: NETWORKS.harmony.id },
    { label: 'Crystalvale', value: NETWORKS.dfkchain.id }
]

const professionAllOption = { label: 'any profession', value: 'all' }

const rarities = [
    { label: 'Common', value: '0' },
    { label: 'Uncommon', value: '1' },
    { label: 'Rare', value: '2' },
    { label: 'Legendary', value: '3' },
    { label: 'Epic', value: '4' },
]

const sort = [
    { label: 'ID', value: 'id' },
    { label: 'Gen', value: 'generation' },
    { label: 'Level', value: 'level' },
    { label: 'Main Class', value: 'mainClass' },
    { label: 'Profession', value: 'profession' },
    { label: 'Rarity', value: 'rarity' },
]

export const auctionTypeOptions = options(auctionTypes)

export const networkOptions = options(networks)

export const professionOptions = options([professionAllOption, ...professions])

export const rarityOptions = options(rarities)

export const sortOptions = options(sort)

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

export const classOptions = [
    (<ListSubheader key='basic'>Basic Classes</ListSubheader>),
    ...basic,
    (<ListSubheader key='advanced'>Advanced Classes</ListSubheader>),
    ...advanced,
    (<ListSubheader key='elite'>Elite Classes</ListSubheader>),
    ...elite,
    (<ListSubheader key='exalted'>Exalted Classes</ListSubheader>),
    ...exalted
]

export const originRealmOptions = [
    <MenuItem key={REALMS.serendale.id} value={REALMS.serendale.id}>
        <JewelIcon />
    </MenuItem>,
    <MenuItem key={REALMS.crystalvale.id} value={REALMS.crystalvale.id}>
        <CrystalIcon />
    </MenuItem>
]

export const originRealmToggleOptions = [
    <ToggleButton value={REALMS.serendale.id} aria-label={REALMS.serendale.name}>
        <JewelIcon />
    </ToggleButton>,
    <ToggleButton value={REALMS.crystalvale.id} aria-label={REALMS.crystalvale.name}>
        <CrystalIcon />
    </ToggleButton>
]
