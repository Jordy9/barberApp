import { Grid, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { DragAndDropImage, UploadList } from './';

export const SubirImagenContainer = () => {
  return (
    <Grid item container>
        <Grid xs = { 6 }>
          <DragAndDropImage />

          <Grid sx={{ width: '90%' }} mt={ 3 } display = { 'flex' } justifyContent = { 'center' }>
            <Button color='inherit'>Seleccionar imagen</Button>
          </Grid>
        </Grid>

        <Grid xs = { 6 }>
          <Typography variant='h6'>Subiendo</Typography>
          <UploadList />
        </Grid>
    </Grid>
  )
}
