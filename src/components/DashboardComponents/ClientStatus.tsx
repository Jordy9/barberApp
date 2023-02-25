import { Box, Paper, Grid, Typography } from '@mui/material';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

interface starsProps {
  ratingSum?: number
}

export const ClientStatus = ({ ratingSum }: starsProps) => {

    const value = Math.ceil(ratingSum || 1) - 1
      
    const customIcons = [
        {
          icon: <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: '100px' }} />,
          label: 'Se sienten muy mal con tu servicio, todos tenemos malos momentos, tu puedes, sigue adelante',
        },
        {
          icon: <SentimentDissatisfiedIcon color="error" sx={{ fontSize: '100px' }} />,
          label: 'No están satisfechos con tu servicio, puedes mejorar, haz tu mejor esfuerzo y no te rindas',
        },
        {
          icon: <SentimentSatisfiedIcon color="warning" sx={{ fontSize: '100px' }} />,
          label: 'Se sienten normal con tu servicio, para una próxima cita, sorprendelos con tus habilidades de barbero',
        },
        {
          icon: <SentimentSatisfiedAltIcon color="success" sx={{ fontSize: '100px' }} />,
          label: 'están satisfechos con tu servicio, puedes hacerlo aún mejor',
        },
        {
          icon: <SentimentVerySatisfiedIcon color="success" sx={{ fontSize: '100px' }} />,
          label: 'están Muy satisfechos con tu servicio, continúa asi y podrías ser seleccionado como el barbero de la semana',
        },
    ];

  return (
    <Box p={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' } component={ Paper } sx={{ borderRadius: '20px', height: '180px', overflowY: 'auto' }}>
      <Box>
        <Grid display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
          {
            customIcons[value]?.icon
          }
        </Grid>
        <Typography variant='body1' textAlign={ 'center' }>
          Tus clientes { customIcons[value]?.label }
        </Typography>
      </Box>
    </Box>
  )
}
