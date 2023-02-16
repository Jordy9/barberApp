import { Box, Paper, Rating, Grid, Typography } from '@mui/material';
import { useResponsive } from '../../hooks/useResponsive';

export const StartsInfo = () => {

  const [ respWidth ] = useResponsive()

  return (
    <Box p={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' } component={ Paper } sx={{ borderRadius: '20px', height: '180px', overflow: 'auto' }}>
      <Box>
        <Grid display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
          <Rating
            readOnly
            max={ 5 }
            sx = {{ fontSize: ( respWidth <= 1080 ) ? '50px' : '100px' }}
            name="simple-controlled"
            value={ 4.5 }
          />
        </Grid>
        <Typography variant='body1' textAlign={ 'center' }>

          Estas son las estrellas según como te han calificado tus clientes, { <Typography color={ 'gold' }>5 estrellas</Typography> }
        </Typography>
      </Box>
    </Box>
  )
}
