import Alert from '@mui/material/Alert'

const LoadingMessage = ({ heroCount, loaded, loading, message }) => {
    const textToDisplay = loading ? message : loaded && !heroCount ? 'No Heroes Found' : null
    return textToDisplay ? (
        <Alert variant='outlined' severity='success' className='loading-message'>
            {textToDisplay}
        </Alert>
    ) : null
}

export default LoadingMessage
