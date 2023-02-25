import Grid from '@mui/material/Grid';

import { AnimatePresence, motion, useIsPresent } from 'framer-motion';

import { useAppSelector } from "../../store/hooks"

import { CitaContent } from '.';

import { useResponsive } from '../../hooks/useResponsive';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { obtenerCita, obtenerCitaList } from '../../store/citas/thunk';
import { Box, CircularProgress } from '@mui/material';

export const SpreedCitas = () => {

  const { usuarioActivo } = useAppSelector( state => state.auth );

  const { cita } = useAppSelector( state => state.ct );

  const isPresent = useIsPresent();

  const [ respWidth ] = useResponsive()

  const { refElement, isLoading } = useInfiniteScroll( ( usuarioActivo?.role === 'Barbero' ) ? obtenerCita : obtenerCitaList )

  return (
    <Grid component={ Box } ref = { refElement } mb={ 10 } container columnSpacing={ 4 }>
        {
            cita.map(( cita, index ) => {

                return (
                    <Grid key={ cita._id + index } item xs = { 12 } sm = { ( respWidth < 800 ) ? 12 : 6 }>
                        <AnimatePresence key={ cita._id } mode = { 'wait' }>
                            <motion.div
                                initial={{ width: '100%', opacity: 0, scaleX: 0 }}
                                animate={{ width: '100%', scaleX: 1, opacity: 1 }}
                                exit={{ scaleX: 0, opacity: 0 }}
                                style={{ originX: isPresent ? 0 : 2 }}
                                layoutId = { `${cita._id}` }
                                layout
                                transition = {{ duration: 0.3, delay: 0.1 }}
                            >
                                <CitaContent { ...cita } />

                            </motion.div>
                        </AnimatePresence>
                    </Grid>
                )
            })
        }

        {
          ( isLoading )
            &&
          <Box display={ 'flex' } justifyContent = { 'center' }>
            <CircularProgress color="inherit" />
          </Box>
        }
    </Grid>
  )
}
