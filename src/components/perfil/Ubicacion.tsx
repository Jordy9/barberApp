import { Box, TextField, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

export const Ubicacion = () => {
  return (
    <>
        <Box mb={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
            <TextField fullWidth size='small' label = { 'Agregar un servicio' } placeholder = { 'Recortada' } />

            <TextField sx={{ ml: 1 }} fullWidth size='small' label = { 'Link de google map' } />

        </Box>

        <Button fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>Agregar ubicación</Button>
    </>
  )
}
