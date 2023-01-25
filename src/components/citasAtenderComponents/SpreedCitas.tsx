import Grid from '@mui/material/Grid';

import { AnimatePresence, motion, useIsPresent } from 'framer-motion';

import { useAppSelector } from "../../store/hooks"

import { CitaContent } from './';

import { useResponsive } from '../../hooks/useResponsive';

export const SpreedCitas = () => {

    const { cita } = useAppSelector( state => state.ct );

    const { usuarioActivo } = useAppSelector( state => state.auth );

    const isPresent = useIsPresent();

    const [ respWidth ] = useResponsive()

  return (
    <Grid mb={ 10 }>
        {
            cita.map( cita => {

                const citaOrder = [...cita.cita].sort( (a, b) => a.hora.fecha - b.hora.fecha )
                return (

                    <Grid container columnSpacing={ 4 } key={ cita._id }>
                        {
                            citaOrder.map(({ barberId, hora, nombre, servicio, usuarioId, estado }, index) => {
                                const nuevaCita = { ...cita, barberId, hora, nombre, servicio, usuarioId, estado }
                                return (
                                    <AnimatePresence key={ hora.hora + index } mode = { 'popLayout' }>
                                        {
                                            ( usuarioActivo?._id === barberId && ( estado === 'En-espera' || estado === 'Atendiendo' ) )
                                                &&
                                            <Grid item xs = { 12 } sm = { ( respWidth <= 700 ) ? 12 : 6 }>
                                                <motion.div
                                                    initial={{ width: '100%', opacity: 0, scaleX: 0 }}
                                                    animate={{ width: '100%', scaleX: 1, opacity: 1 }}
                                                    exit={{ scaleX: 0, opacity: 0 }}
                                                    style={{ originX: isPresent ? 0 : 2 }}
                                                    layoutId = { `${hora?.fecha}` }
                                                    layout
                                                    transition = {{ duration: 0.3, delay: 0.1 }}
                                                >
                                                    <CitaContent { ...nuevaCita } />

                                                </motion.div>
                                            </Grid>
                                        }
                                    </AnimatePresence>
                                )
                            })
                        }
                    </Grid>
                )
            })
        }
    </Grid>
  )
}
