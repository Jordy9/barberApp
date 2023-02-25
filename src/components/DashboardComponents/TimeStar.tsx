import { Box, Paper, Typography } from '@mui/material'

interface timeStarProps {
    title: string;
    time?: string;
}

export const TimeStar = ({ time, title }: timeStarProps) => {
  return (
    <Box p={ 2 } display = { 'flex' } alignItems = { 'center' } component={ Paper } sx={{ borderRadius: '20px', height: '295px' }}>
        <Box>
            <Typography mb={ 2 } variant='h5' textAlign={ 'center' }>
                { title }
            </Typography>

            <Typography mt={ 2 } variant='h3' textAlign={ 'center' }>
                { time }
            </Typography>
        </Box>
    </Box>
  )
}