import { LibraryAdd, Comment, Favorite } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';
import { useResponsive } from '../../hooks/useResponsive';

export const ButtonsSpace = () => {

  const [ respWidth ] = useResponsive()

  return (
    <Grid display={ 'flex' } justifyContent = { 'space-between' }>
      <Grid display={ 'flex' } justifyContent = { 'start' }>
        {
          ( respWidth > 410 )
            ?
          <Button color='inherit' endIcon = { <Comment /> } variant='contained'>
            {
              ( respWidth > 991 )
                ?
              'Nuevo anuncio'
                :
              'Anuncio'
            }
          </Button>
            :
          <IconButton>
            <Comment />
          </IconButton>
        }
      </Grid>

      <Grid display={ 'flex' } justifyContent = { 'end' }>
          <Button color='inherit' sx = {{ mx: ( respWidth > 991 ) ? 2 : 1 }} endIcon = { <Favorite /> } variant='contained'>
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
