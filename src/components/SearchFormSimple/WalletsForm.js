import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'

const WalletsForm = ({ name, onSave, open, wallets }) => {

    const [addresses, setAddresses] = useState([])

    // Set the wallet addresses when updated externally
    useEffect(() => {
        setAddresses(wallets)
    }, [wallets])

    const handleClear = () => {
        setAddresses([])
    }

    const handleSave = () => {
        onSave && onSave({ target: { name: name, value: addresses } })
    }

    const handleWalletsChange = ({ target }) => {
        const value = target.value.split('\n')
        setAddresses(value)
    }

    return (
        <Dialog open={open} onClose={onSave}>
            <DialogTitle>Wallet Addresses</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter each wallet address on it's own line and click Save when done.  Click clear to remove all wallet addresses.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Wallet Address"
                    fullWidth
                    multiline
                    variant="filled"
                    value={addresses ? addresses.join('\n') : ''}
                    onChange={handleWalletsChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClear}>Clear</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}

export default WalletsForm
