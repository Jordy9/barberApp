import { Box, TextField, Button } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { Dispatch, SetStateAction, Fragment } from 'react';
import { addNew, deleteOld, handleChange } from '../../utils/utilsDynamicForm';

type ubicacionProps = {
  ubicacion: string,
  link: string,
}

interface misUbicacionesProps {
  ubicaciones: ubicacionProps[];
  setUbicaciones: Dispatch<SetStateAction<ubicacionProps[]>>;
}

export const Ubicacion = ({ ubicaciones, setUbicaciones }: misUbicacionesProps) => {

  return (
    <>
    <Button hidden = { true } onClick={ () => addNew( ubicaciones, setUbicaciones ) } sx={{ my: 2 }} fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>
      Agregar servicio
    </Button>
    {
      ubicaciones.map( ( e, index ) => (
        <Fragment key={ e.link + index }>
          <Box mb={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
            <TextField name='ubicacion' value={ e.ubicacion } onChange = { ({ target }) => handleChange(index, target, ubicaciones, setUbicaciones ) } fullWidth size='small' label = { 'Agregar un servicio' } placeholder = { 'Recortada' } />

            <TextField name='link' value={ e.link } onChange = { ({ target }) => handleChange(index, target, ubicaciones, setUbicaciones ) } sx={{ ml: 1 }} fullWidth size='small' label = { 'Link de google map' } />

          </Box>

          {
            ( ubicaciones.length > 1 )
              &&
            <Button onClick={ () => deleteOld(index, ubicaciones, setUbicaciones) } sx={{ mb: 2 }} fullWidth endIcon = { <Delete /> } variant='contained' color='inherit'>Borrar servicio</Button>
          }
        </Fragment>
      ))
    }
    </>
  )
}
