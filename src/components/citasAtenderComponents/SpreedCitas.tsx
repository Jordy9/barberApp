import Grid from '@mui/material/Grid';

import { AnimatePresence, motion, useIsPresent } from 'framer-motion';

import { useAppSelector } from "../../store/hooks"

import { CitaContent } from './';

import { useResponsive } from '../../hooks/useResponsive';

import { citasAtenderIt } from '../../interfaces/citasInterface';

export const SpreedCitas = () => {

    const { cita } = useAppSelector( state => state.ct );

    const { usuarioActivo } = useAppSelector( state => state.auth );

    const isPresent = useIsPresent();

    const [ respWidth ] = useResponsive()

    let citaConcat: citasAtenderIt[] = []
    
    cita.map( cita => {

        const newCita = cita.cita.map(citas => {
            return { ...citas, _id: cita._id }
        })

        citaConcat = citaConcat.concat(newCita)

    })

  return (
    <Grid mb={ 10 } container columnSpacing={ 4 }>
        {
            citaConcat.sort( (a, b) => a.hora.fecha - b.hora.fecha ).map( ( cita, index ) => (
                <AnimatePresence key={ cita.hora.hora + index } mode = { 'popLayout' }>
                    {
                        ( usuarioActivo?._id === cita.barberId && ( cita.estado === 'En-espera' || cita.estado === 'Atendiendo' ) )
                            &&
                        <Grid item xs = { 12 } sm = { ( respWidth <= 700 ) ? 12 : 6 } key={ cita._id }>
                            
                            <motion.div
                                initial={{ width: '100%', opacity: 0, scaleX: 0 }}
                                animate={{ width: '100%', scaleX: 1, opacity: 1 }}
                                exit={{ scaleX: 0, opacity: 0 }}
                                style={{ originX: isPresent ? 0 : 2 }}
                                layoutId = { `${cita.hora?.fecha}` }
                                layout
                                transition = {{ duration: 0.3, delay: 0.1 }}
                            >
                                <CitaContent { ...cita } />

                            </motion.div>
                            
                        </Grid>
                    }
                </AnimatePresence>
            ))
        }
    </Grid>
  )
}
