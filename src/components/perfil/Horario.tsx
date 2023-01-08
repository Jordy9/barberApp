import { Box, TextField, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Dispatch, SetStateAction } from 'react';

type horarioProps = {
  horario: string,
}

interface misHorariosProps {
  horarios: horarioProps;
  setHorarios: Dispatch<SetStateAction<horarioProps>>;
  addHorarios: () => void;
}

export const Horario = ({ horarios, setHorarios, addHorarios }: misHorariosProps) => {
  return (
    <>
        <Box mb={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
          <TextField value={ horarios.horario } fullWidth onChange = { ({ target }) => setHorarios({ ...horarios, horario: target.value }) } size='small' label = { 'Agregar un horario' } placeholder = 'Lunes a viernes de 8 am a 5 pm' helperText = 'Agregar un horario para que los clientes sepan' />
        </Box>

        <Button onClick={ addHorarios } fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>Agregar horario</Button>
    </>
      
  )
}
