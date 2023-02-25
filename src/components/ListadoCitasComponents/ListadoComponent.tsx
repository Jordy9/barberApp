import { SpreedCitas } from './'
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import { SelectFilters } from '../DashboardComponents';

export const ListadoComponent = () => {

  const { usuarioActivo } = useAppSelector( state => state.auth );

  const arregloFtiempo = [ 'Ayer', 'Hoy', 'Semana pasada', 'Esta semana', 'Este mes', 'Mes pasado', 'Este año', 'Año pasado' ]

  return (
    <Box p={ 1 }>
      <Typography variant='h4'>Listado de citas</Typography>
      {
        ( usuarioActivo?.role === 'Barbero' )
          &&
        <SelectFilters title='Filtrar' Filtro={ arregloFtiempo } width = { 225 } />
      }
      <SpreedCitas />
    </Box>
  )
}
