import { CircularProgress, Box } from '@mui/material';

export const CircularProgressIndicator = () => {
  return (
    <Box display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' } sx={{ width: '100%', height: '100vh' }}>
      <CircularProgress color="inherit" />
    </Box>
  )
}
