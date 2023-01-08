import { Box, TextField, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Dispatch, SetStateAction } from 'react';

type ubicacionProps = {
  ubicacion: string,
  link: string,
}

interface misUbicacionesProps {
  ubicaciones: ubicacionProps;
  setUbicaciones: Dispatch<SetStateAction<ubicacionProps>>;
  addUbicaciones: () => void;
}

export const Ubicacion = ({ ubicaciones, setUbicaciones, addUbicaciones }: misUbicacionesProps) => {
  return (
    <>
        <Box mb={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
          <TextField value={ ubicaciones.ubicacion } onChange = { ({ target }) => setUbicaciones({ ...ubicaciones, ubicacion: target.value }) } fullWidth size='small' label = { 'Agregar un servicio' } placeholder = { 'Recortada' } />

          <TextField value={ ubicaciones.link } onChange = { ({ target }) => setUbicaciones({ ...ubicaciones, link: target.value }) } sx={{ ml: 1 }} fullWidth size='small' label = { 'Link de google map' } />

        </Box>

        <Button onClick={ addUbicaciones } fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>Agregar ubicación</Button>
    </>
  )
}
