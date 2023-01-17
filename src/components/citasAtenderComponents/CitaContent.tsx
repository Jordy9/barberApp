import { ListItem, List, Grid } from '@mui/material';
import { useResponsive } from '../../hooks/useResponsive';
import { nuevaCitasInterfaceCita } from '../../interfaces/citasInterface';

import { ListAvatar, ListText } from './';

export const CitaContent = ({ _id, barberId, estado, hora, nombre, servicio, usuarioId }: nuevaCitasInterfaceCita) => {

    const [ respWidth ] = useResponsive()

  return (
    <List sx={{ display: 'grid', gridTemplateColumns: ( respWidth <= 991 ) ? ( respWidth <= 600 )? '1fr' : '350px 350px' : '1fr 1fr', mb: 1.5 }}>
        <Grid>
            <ListItem 
                sx={{ display: 'flex', justifyContent: 'space-between', padding: 0, px: 1, backgroundColor: 'rgba(0, 0, 0, 0.15)', borderRadius: '20px' }} 
            >
                <ListAvatar imagen = { 'https://mui.com/static/images/avatar/2.jpg' } />

                <ListText
                    usuarioId = { usuarioId }
                    barberId = { barberId }
                    _id = { _id }
                    nombre = {nombre} 
                    hora = { hora } 
                    servicio = { servicio } 
                    estado = { estado } 
                    respWidth = { respWidth } 
                />
                
            </ListItem>
        </Grid>
    </List>
  )
}
