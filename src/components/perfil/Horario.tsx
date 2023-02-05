import { Box, TextField, Button } from '@mui/material';
import { Delete, Add } from '@mui/icons-material';
import { Dispatch, SetStateAction, Fragment } from 'react';
import { addNew, deleteOld, handleChange } from '../../utils/utilsDynamicForm';

type horarioProps = {
  horario: string,
}

interface misHorariosProps {
  horarios: horarioProps[];
  setHorarios: Dispatch<SetStateAction<horarioProps[]>>;
}

export const Horario = ({ horarios, setHorarios }: misHorariosProps) => {

  return (
    <>
    <Button hidden = { true } onClick={ () => addNew( horarios, setHorarios ) } sx={{ my: 2 }} fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>
      Agregar servicio
    </Button>
    {
      horarios.map( ( e, index ) => (
        <Fragment key={ e.horario + index }>
          <Box mb={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
            <TextField value={ e.horario } fullWidth onChange = { ({ target }) => handleChange(index, target, horarios, setHorarios) } size='small' label = { 'Agregar un horario' } placeholder = 'Lunes a viernes de 8 am a 5 pm' helperText = 'Agregar un horario para que los clientes sepan' />
          </Box>

          {
            ( horarios.length > 1 )
              &&
            <Button onClick={ () => deleteOld(index, horarios, setHorarios) } sx={{ mb: 2 }} fullWidth endIcon = { <Delete /> } variant='contained' color='inherit'>Borrar servicio</Button>
          }
        </Fragment>
      ))
    }
    </>
      
  )
}
