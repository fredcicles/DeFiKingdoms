import React from 'react'
import PropTypes from 'prop-types'
import useLocalStorage from '../../hooks/useLocalStorage'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'

const WalletForm = ({ id, onSubmit }) => {
    const [walletAddresses, setWalletAddresses] = useLocalStorage(id, [])

    // Update local state whenever the wallet addresses change
    const handleWalletsChange = ({ target }) => {
        // Store within the page as an array of addresses
        const value = target.value.split('\n')
        setWalletAddresses(value)
    }

    const handleFormSubmit = () => {
        onSubmit(walletAddresses)
    }

    return (
        <div className='wallets-selecter'>
            <TextField
                className='wallets-form'
                id="wallets"
                label="Wallet Addresses"
                margin="dense"
                multiline
                onChange={handleWalletsChange}
                value={walletAddresses ? walletAddresses.join('\n') : ''}
                variant="filled"
            />
            <Button onClick={handleFormSubmit} disabled={!walletAddresses || !walletAddresses.length}>
                <SearchIcon />
            </Button>
        </div>
    )
}

WalletForm.propTypes = {
    id: PropTypes.string,
    onSubmit: PropTypes.func,
}

WalletForm.defaultProps = {
    id: 'heroWallets',
    onSubmit: () => {}
}

export default WalletForm
