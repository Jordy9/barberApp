import { AddCircleOutline, LibraryAdd } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import { Button, Grid } from '@mui/material';
import { useResponsive } from '../../hooks/useResponsive';

export const ButtonsSpace = () => {

  const [ respWidth ] = useResponsive()

  return (
    <Grid display={ 'flex' } justifyContent = { 'space-between' }>
      <Grid display={ 'flex' } justifyContent = { 'start' }>
          <Button color='inherit' endIcon = { <CommentIcon /> } variant='contained'>
            {
              ( respWidth > 991 )
                ?
              'Nuevo anuncio'
                :
              'Anuncio'
            }
          </Button>
      </Grid>

      <Grid display={ 'flex' } justifyContent = { 'end' }>
          <Button color='inherit' sx = {{ mx: ( respWidth > 991 ) ? 2 : 1 }} endIcon = { <AddCircleOutline /> } variant='contained'>
            {
              ( respWidth > 991 )
                ?
              'Agregar a mis barberos'
                :
              'Agregar'
            }
          </Button>

          <Button color='inherit' endIcon = { <LibraryAdd /> } variant='contained'>
            {
              ( respWidth > 991 )
                ?
              'Crear cita'
                :
              'Cita'
            }
          </Button>
      </Grid>
    </Grid>
  )
}
