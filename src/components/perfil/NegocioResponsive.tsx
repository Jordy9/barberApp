import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import { NegocioResponsiveServicio, NegocioResponsiveUbicacion, NegocioResponsiveHorario } from './';
import { useAppSelector } from '../../store/hooks';

export const NegocioResponsive = () => {

  const [value, setValue] = useState(0);

  const NegocioElement = useRef<HTMLDivElement>(null);
  
  const { negocio } = useAppSelector( state => state.ng );

  const { usuarioActivo } = useAppSelector( state => state.auth );

  const negocioFilt = negocio.find( e => e.barberId === usuarioActivo?._id )

  return (
    <Box sx={{ pb: 7 }} ref = { NegocioElement }>
      <List>
        {
          ( value === 0 )
            &&
          <NegocioResponsiveServicio servicio = { negocioFilt?.servicios } />
        }

        {
          ( value === 1 )
            &&
          <NegocioResponsiveUbicacion ubicacion = { negocioFilt?.ubicacion } />
        }

        {
          ( value === 2 )
            &&
          <NegocioResponsiveHorario horario = { negocioFilt?.horasClientes } />
        }
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction onClick={ () => NegocioElement?.current?.scrollIntoView({ block: 'center', behavior: 'smooth' }) } label="Servicios" icon={<RestoreIcon />} />
          <BottomNavigationAction onClick={ () => NegocioElement?.current?.scrollIntoView({ block: 'center', behavior: 'smooth' }) } label="Ubicación" icon={<FavoriteIcon />} />
          <BottomNavigationAction onClick={ () => NegocioElement?.current?.scrollIntoView({ block: 'center', behavior: 'smooth' }) } label="Horario" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}