import { Add } from '@mui/icons-material';
import { TextField, Button, Box, Grid, MenuItem } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

type servicioProps = {
  servicio: string,
  tiempo: string,
  minHor: string,
}

interface misServiciossProps {
  servicio: servicioProps;
  addServicio: () => void;
  setServicios: Dispatch<SetStateAction<servicioProps>>
}

export const MisServicios = ({ servicio, addServicio, setServicios }: misServiciossProps) => {
  return (
    <>
      <Box mb={ 2 } display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>
        <TextField value={ servicio.servicio } onChange = { ({ target }) => setServicios({ ...servicio, servicio: target.value }) } size='small' label = { 'Agregar un servicio' } placeholder = { 'Recortada' } />

        <TextField value={ servicio.tiempo } type = { 'number' } onChange = { ({ target }) => setServicios({ ...servicio, tiempo: target.value }) } sx={{ ml: 1 }} size='small' label = { 'tiempo estimado' } />
        
        <Grid p={ 1 } item xs = { 6 }>
          <TextField value={ servicio.minHor } onChange = { ({ target }) => setServicios({ ...servicio, minHor: target.value }) } size='small' type={ 'number' } select variant='outlined' label = { 'Tiempo' }>
            <MenuItem value = 'Minutos' selected>Minutos</MenuItem>
            <MenuItem value = 'Horas'>Horas</MenuItem>
          </TextField>
        </Grid>

      </Box>
      
      <Button onClick={ addServicio } fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>Agregar servicio</Button>
    </>
  )
}
