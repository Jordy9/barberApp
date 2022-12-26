import { Dispatch, SetStateAction } from 'react';

import { Button, Grid } from "@mui/material";

import { SelectFilters } from "./"
import { useResponsive } from '../../hooks/useResponsive';

interface DialogProps {
  setShowDialogFilter: Dispatch<SetStateAction<boolean>>
  setShowDialog: Dispatch<SetStateAction<boolean>>
}

const arregloFtiempo = [ 'Ayer', 'Hoy', 'Semana pasada', 'Esta semana', 'Este mes', 'Mes pasado', 'Este año', 'Año pasado' ]

const arregloFHora = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const arregloFServicios = [ 'Recortada', 'Cerquillo', 'Limpieza de cejas' ]

export const SelectComponents = ( { setShowDialogFilter, setShowDialog }: DialogProps ) => {

  const [ respWidth ] = useResponsive()

  return (
    <>
      {
        ( respWidth > 991 )
          ?
        <>
          <Grid display={ 'flex' } alignItems={ 'center' }>
            <Button onClick={ () => setShowDialog(true) } variant="contained" color={ 'inherit' }>Filtrar por rango de fecha</Button>
          </Grid>

          <Grid>
            <SelectFilters title="Filtrar por fecha predeterminada" width={ 225 } Filtro={ arregloFtiempo } />
          </Grid>

          <Grid>
            <SelectFilters title="Filtrar por hora" width={ 150 } Filtro={ arregloFHora } />
          </Grid>

          <Grid>
            <SelectFilters title="Filtrar por servicio" width={ 180 } Filtro={ arregloFServicios } />
          </Grid>

          <Grid display={ 'flex' } alignItems={ 'center' }>
            <Button variant="contained" color={ 'inherit' }>Filtrar</Button>
          </Grid>

          {/* <Grid p={ 1 } display={ 'flex' }>
            {
              arregloFtiempo.map( e => (
                <Button sx = {{ mr: 1 }} variant={ 'contained' } color = { 'inherit' } key={ e } >{ e }</Button>
              ))
            }
          </Grid> */}
        </>
          :
        <Button onClick={ () => setShowDialogFilter(true) } variant="contained" color={ 'inherit' }>Filtros</Button>
      }
    </>
  )
}
