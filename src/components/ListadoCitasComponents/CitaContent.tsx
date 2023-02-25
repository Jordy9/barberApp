import { ListItem, List } from '@mui/material';
import { CitasInterfaceCita } from '../../interfaces/citasInterface';

import { ListText } from './';
import { motion } from 'framer-motion';

export const CitaContent = ( cita: CitasInterfaceCita ) => {
  return (
    <motion.div layout>
        <List sx={{ mb: 1.5 }}>
            <ListItem 
                sx={{ display: 'flex', justifyContent: 'center', padding: 0, backgroundColor: 'rgba(0, 0, 0, 0.15)', borderRadius: '20px' }} 
            >
                <ListText
                    cita = { cita }
                />
                
            </ListItem>
        </List>
    </motion.div>
  )
}
