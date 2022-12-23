import { SelectFilters } from "./"
import { useResponsive } from '../../hooks/useResponsive';
import { Button, Grid } from "@mui/material";

const arregloFtiempo = [ 'Ayer', 'Hoy', 'Semana pasada', 'Esta semana', 'Este mes', 'Mes pasado', 'Este año', 'Año pasado' ]

const arregloFHora = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const arregloFServicios = [ 'Recortada', 'Cerquillo', 'Limpieza de cejas' ]

export const SelectComponents = () => {

  const [ respWidth ] = useResponsive()

  return (
    <>
      {
        ( respWidth > 991 )
          ?
        <>
          <Grid>
            <SelectFilters title=" Filtrar por rango de fecha" width={ 225 } Filtro={ arregloFtiempo } />
          </Grid>

          <Grid>
            <SelectFilters title=" Filtrar por hora" width={ 150 } Filtro={ arregloFHora } />
          </Grid>

          <Grid>
            <SelectFilters title=" Filtrar por servicio" width={ 180 } Filtro={ arregloFServicios } />
          </Grid>

          <Grid p={ 1 } display={ 'flex' }>
            {
              arregloFtiempo.map( e => (
                <Button sx = {{ mr: 1 }} variant={ 'contained' } color = { 'inherit' } key={ e } >{ e }</Button>
              ))
            }
          </Grid>
        </>
          :
        <Button variant="contained" color={ 'inherit' }>Filtros</Button>
      }
    </>
  )
}
