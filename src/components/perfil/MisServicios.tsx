import { Add, Delete } from '@mui/icons-material';
import { TextField, Button, Grid, MenuItem } from '@mui/material';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { addNew, deleteOld, handleChange } from '../../utils/utilsDynamicForm';

type servicioProps = {
  servicio: string,
  tiempo: string,
  minHor: string,
  index?: number
}

interface misServiciossProps {
  servicios: servicioProps[];
  setServicios: Dispatch<SetStateAction<servicioProps[]>>
}

export const MisServicios = ({ servicios, setServicios }: misServiciossProps) => {

  return (
    <>
    <Button hidden = { true } onClick={ () => addNew( servicios, setServicios ) } sx={{ my: 2 }} fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>
      Agregar servicio
    </Button>
    {
      servicios.map( ( e, index ) => (
        <Fragment key={ e.servicio + index }>
          <Grid px={ 1 } container>
            <TextField 
              sx={{ mb: 2 }} 
              name = 'servicio'
              type={ 'email' }
              fullWidth 
              value={ e.servicio } 
              onChange = { ({ target }) => handleChange(index, target, servicios, setServicios) }
              size='small' 
              label = { 'Servicio' } 
            />
            
            <Grid sx={{ mb: 2 }} item xs = { 6 }>

              <TextField 
                sx={{ mr: 1 }} 
                name = 'tiempo' 
                value={ e.tiempo } 
                type = { 'number' } 
                onChange = { ({ target }) => handleChange(index, target, servicios, setServicios) } 
                size='small' 
                label = { 'tiempo estimado' } 
              />

            </Grid>

            <Grid sx={{ mb: 2 }} item xs = { 6 }>

              <TextField sx={{ ml: 1 }} name = 'minHor' fullWidth value={ e.minHor } onChange = { ({ target }) => handleChange(index, target, servicios, setServicios) } size='small' type={ 'number' } select variant='outlined' label = { 'Tiempo' }>
                <MenuItem value = 'Minutos' selected>Minutos</MenuItem>
                <MenuItem value = 'Horas'>Horas</MenuItem>
              </TextField>

            </Grid>

          </Grid>

          {
            ( servicios.length > 1 )
              &&
            <Button onClick={ () => deleteOld(index, servicios, setServicios) } sx={{ mb: 2 }} fullWidth endIcon = { <Delete /> } variant='contained' color='inherit'>Borrar servicio</Button>
          }

        </Fragment>
      ))
    }
    </>
  )
}
