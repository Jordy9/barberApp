import { ListItem, List } from '@mui/material';
import { useResponsive } from '../../hooks/useResponsive';
import { citasAtenderIt } from '../../interfaces/citasInterface';

import { ListAvatar, ListText } from './';
import { motion } from 'framer-motion';

export const CitaContent = ({ _id, barberId, estado, hora, nombre, servicio, usuarioId }: citasAtenderIt) => {

    const [ respWidth ] = useResponsive()

  return (
    <motion.div layout>
        <List sx={{ mb: 1.5, justifyContent: 'center' }}>
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
        </List>
    </motion.div>
  )
}
