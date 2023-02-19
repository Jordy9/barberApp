import { Box, Paper, Rating, Grid, Typography } from '@mui/material';
import { useResponsive } from '../../hooks/useResponsive';

interface starsProps {
  ratingSum: number
}

export const StartsInfo = ({ ratingSum }: starsProps) => {

  const [ respWidth ] = useResponsive()

  return (
    <Box p={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' } component={ Paper } sx={{ borderRadius: '20px', height: '180px', overflowY: 'auto', overflowX: 'hidden' }}>
      <Box>
        <Grid display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
          <Rating
            readOnly
            max={ 5 }
            sx = {{ fontSize: ( respWidth <= 1080 ) ? '50px' : '100px' }}
            name="simple-controlled"
            value={ Math.ceil(ratingSum) }
          />
        </Grid>
        <Typography variant='body1' textAlign={ 'center' }>

          Estas son las estrellas según como te han calificado tus clientes, { <Typography color={ 'gold' }>{ Math.ceil(ratingSum) } estrellas</Typography> }
        </Typography>
      </Box>
    </Box>
  )
}
