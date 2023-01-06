import { Box, TextField, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

export const Horario = () => {
  return (
    <>
        <Box mb={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
            <TextField fullWidth size='small' label = { 'Agregar un horario' } placeholder = 'Lunes a viernes de 8 am a 5 pm' helperText = 'Agregar un horario para que los clientes sepan' />
        </Box>

        <Button fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>Agregar horario</Button>
    </>
      
  )
}
