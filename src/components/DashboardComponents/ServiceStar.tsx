import { Box, Paper, Typography } from '@mui/material'

export const ServiceStar = () => {

    const servicios = [
        {
            label: 'Recortada',
            num: 10
        },

        {
            label: 'Cerquillo',
            num: 5
        },

        {
            label: 'Sacar cejas',
            num: 1
        },
     ]
  return (
    <Box p={ 2 } component={ Paper } sx={{ borderRadius: '20px',  height: '295px', overflow: 'auto' }}>
        <Typography variant='h5' textAlign={ 'center' }>
            Estos son tus servicios, entre tus clientes los más populares son:
        </Typography>

        {
            servicios.map(( e, index ) => (
                <Box py={ 2 } textAlign = { 'center' } >
                    { index + 1 }). Un total de <Typography component={ 'span' } color={ 'gold' }>{ e.num }</Typography> clientes han seleccionado este servicio: <Typography component={ 'span' } color={ 'gold' }>{ e.label }</Typography>
                </Box>
            ) )
        }

        <Typography variant='h6' textAlign={ 'center' }>
            Con esta información podrías mejorar aún más tus servicios
        </Typography>
    </Box>
  )
}
