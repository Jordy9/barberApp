import { LibraryAdd, Comment, Favorite } from '@mui/icons-material';
import { Button, Grid, IconButton, Tooltip } from '@mui/material';

import { isOpenCita } from '../../store/citas/CitasSlice';

import { useResponsive } from '../../hooks/useResponsive';

import { useAppDispatch } from '../../store/hooks';

export const ButtonsSpace = () => {

  const dispatch = useAppDispatch();

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
          <Tooltip title="Nuevo anuncio" enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
            <IconButton>
              <Comment />
            </IconButton>
          </Tooltip>
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

          <Button onClick={ () => dispatch( isOpenCita(true) ) } color='inherit' endIcon = { <LibraryAdd /> } variant='contained'>
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
