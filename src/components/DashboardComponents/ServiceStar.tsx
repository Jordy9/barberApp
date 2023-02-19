import { Box, Paper, Typography } from '@mui/material'
import { Negocio } from '../../interfaces/negocioInterface'

interface sumServiceProps {
    title: string;
    count: number 
 }

interface serviceStarProps {
    sumService: sumServiceProps[]
    negocioFilt: Negocio | undefined
}

export const ServiceStar = ({ sumService, negocioFilt }: serviceStarProps) => {
  return (
    <Box p={ 2 } component={ Paper } sx={{ borderRadius: '20px',  height: '295px', overflow: 'auto' }}>
        <Typography variant='h5' textAlign={ 'center' }>
            Estos son tus servicios, entre tus clientes los más populares son:
        </Typography>

        {
            negocioFilt?.servicios.map(( e, index ) => (
                <Box py={ 2 } textAlign = { 'center' } >
                    { index + 1 }). Un total de <Typography component={ 'span' } color={ 'gold' }>{ sumService[index]?.count || 0 }</Typography> clientes han seleccionado este servicio: <Typography component={ 'span' } color={ 'gold' }>{ sumService[index]?.title }</Typography>
                </Box>
            ) )
        }

        <Typography variant='h6' textAlign={ 'center' }>
            Con esta información podrías mejorar aún más tus servicios
        </Typography>
    </Box>
  )
}
