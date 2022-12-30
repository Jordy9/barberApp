import { Box, TextField, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

export const Horario = () => {
  return (
    <>
        <Box mb={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
            <TextField fullWidth size='small' label = { 'Agregar un horario' } />
        </Box>

        <Button fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>Agregar horario</Button>
    </>
      
  )
}
