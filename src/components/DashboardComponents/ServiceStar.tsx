import { Box, Paper, Typography } from '@mui/material'

interface sumServiceProps {
    title: string;
    count: number 
 }

interface serviceStarProps {
    sumService?: sumServiceProps[]
}

export const ServiceStar = ({ sumService }: serviceStarProps) => {
  return (
    <Box p={ 2 } component={ Paper } sx={{ borderRadius: '20px',  height: '295px', overflow: 'auto' }}>
        <Typography variant='h5' textAlign={ 'center' }>
            Estos son tus servicios, entre tus clientes los más populares son:
        </Typography>

        {
            sumService?.map(( e, index ) => (
                <Box py={ 2 } textAlign = { 'center' } >
                    { index + 1 }). Un total de <Typography component={ 'span' } color={ 'gold' }>{ e.count || 0 }</Typography> clientes han seleccionado este servicio: <Typography component={ 'span' } color={ 'gold' }>{ e.title }</Typography>
                </Box>
            ))
        }

        <Typography variant='h6' textAlign={ 'center' }>
            Con esta información podrías mejorar aún más tus servicios
        </Typography>
    </Box>
  )
}
