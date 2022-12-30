import { Add } from '@mui/icons-material';
import { TextField, Button, Box } from '@mui/material';

export const MisServicios = () => {
  return (
    <>
      <Box mb={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
        <TextField fullWidth size='small' label = { 'Agregar un servicio' } placeholder = { 'Recortada' } />

        <TextField sx={{ ml: 1 }} fullWidth size='small' label = { 'tiempo estimado' } />

      </Box>
      
      <Button fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>Agregar</Button>
    </>
  )
}
