import { Box, TextField, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Dispatch, SetStateAction } from 'react';
import { Ubicacion as Ubic } from '../../interfaces/negocioInterface';

type ubicacionProps = {
  ubicacion: string,
  link: string,
}

interface misUbicacionesProps {
  ubicaciones: ubicacionProps;
  setUbicaciones: Dispatch<SetStateAction<ubicacionProps>>;
  addUbicaciones: () => void;
  activeUbicacion: Ubic
}

export const Ubicacion = ({ ubicaciones, setUbicaciones, addUbicaciones, activeUbicacion }: misUbicacionesProps) => {
  return (
    <>
        <Box mb={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
          <TextField value={ ubicaciones.ubicacion || activeUbicacion.ubicacion } onChange = { ({ target }) => setUbicaciones({ ...ubicaciones, ubicacion: target.value }) } fullWidth size='small' label = { 'Agregar un servicio' } placeholder = { 'Recortada' } />

          <TextField value={ ubicaciones.link || activeUbicacion.link } onChange = { ({ target }) => setUbicaciones({ ...ubicaciones, link: target.value }) } sx={{ ml: 1 }} fullWidth size='small' label = { 'Link de google map' } />

        </Box>

        <Button onClick={ addUbicaciones } fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>Agregar ubicación</Button>
    </>
  )
}
