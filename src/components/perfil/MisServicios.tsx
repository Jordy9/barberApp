import { Add } from '@mui/icons-material';
import { TextField, Button, Grid, MenuItem } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { useAppSelector } from '../../store/hooks';

type servicioProps = {
  servicio: string,
  tiempo: string,
  minHor: string,
  index?: number
}

interface misServiciossProps {
  servicio: servicioProps;
  addServicio: ( i: number ) => void;
  setServicios: Dispatch<SetStateAction<servicioProps>>
}

export const MisServicios = ({ servicio, addServicio, setServicios }: misServiciossProps) => {

  const { activeServicio } = useAppSelector( state => state.ng );

  return (
    <>
      <Grid px={ 1 } container>
        <TextField sx={{ mb: 2 }} fullWidth value={ servicio.servicio || activeServicio.servicio } onChange = { ({ target }) => setServicios({ ...servicio, servicio: target.value }) } size='small' label = { 'Servicio' } placeholder = { 'Recortada' } />
        
        <Grid sx={{ mb: 2 }} item xs = { 6 }>

          <TextField sx={{ mr: 1 }} value={ servicio.tiempo || activeServicio.tiempo }  type = { 'number' } onChange = { ({ target }) => setServicios({ ...servicio, tiempo: target.value }) } size='small' label = { 'tiempo estimado' } />

        </Grid>

        <Grid sx={{ mb: 2 }} item xs = { 6 }>

          <TextField sx={{ ml: 1 }} fullWidth value={ servicio.minHor || activeServicio.minHor } onChange = { ({ target }) => setServicios({ ...servicio, minHor: target.value }) } size='small' type={ 'number' } select variant='outlined' label = { 'Tiempo' }>
            <MenuItem value = 'Minutos' selected>Minutos</MenuItem>
            <MenuItem value = 'Horas'>Horas</MenuItem>
          </TextField>

        </Grid>

      </Grid>
      
      <Button onClick={() => addServicio(activeServicio?.index || 0) } fullWidth endIcon = { <Add /> } variant='contained' color='inherit'>Agregar servicio</Button>
    </>
  )
}
