import { Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useResponsive } from '../../hooks/useResponsive';
import { DragAndDropImage, UploadList } from './';

export const SubirImagenContainer = () => {

  const [ respWidth ] = useResponsive()

  return (
    <Grid item container>
      <Grid xs = { 12 } sm = { 4 } px = { 2 }>
        <DragAndDropImage respWidth = { respWidth } />

        {
          ( respWidth > 991 )
            &&
          <Grid sx={{ width: '100%' }} mt={ 3 } display = { 'flex' } justifyContent = { 'center' }>
            <Button variant='contained' color='inherit'>Seleccionar imagen</Button>
          </Grid>
        }

      </Grid>

      <Grid mt={ ( respWidth > 991 ) ? 0 : 2 } xs = { 12 } sm = { 8 }>
        <Typography variant='h6'>Subiendo</Typography>
        <UploadList />
      </Grid>
    </Grid>
  )
}
