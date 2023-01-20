import { Fragment } from 'react';

import { useAppSelector } from "../../store/hooks"
import { CitaContent } from './';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';

export const SpreedCitas = () => {

    const { cita } = useAppSelector( state => state.ct );

    const isPresent = useIsPresent();

  return (
    <>
        {
            cita.map( cita => {

                const citaOrder = [...cita.cita].sort( (a, b) => a.hora.fecha - b.hora.fecha )
                return (

                    <Fragment key={ cita._id }>
                        {
                            citaOrder.map(({ barberId, hora, nombre, servicio, usuarioId, estado }, index) => {
                                const nuevaCita = { ...cita, barberId, hora, nombre, servicio, usuarioId, estado }
                                return (
                                    <AnimatePresence key={ hora.hora + index}>
                                        {
                                            ( estado === 'En-espera' || estado === 'Atendiendo' )
                                                &&
                                            <motion.div
                                                initial={{ width: '100%', opacity: 0, scaleX: 0 }}
                                                animate={{ width: '100%', scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: "linear" } }}
                                                exit={{ scaleX: 0, transition: { duration: 0.5, ease: "linear" }, opacity: 0 }}
                                                style={{ originX: isPresent ? 0 : 2 }}
                                                layoutId = { `${hora?.fecha}` }
                                            >

                                                <CitaContent key={ hora.hora } { ...nuevaCita } />
                                            </motion.div>
                                        }
                                    </AnimatePresence>
                                )
                            }
                            )
                        }
                    </Fragment>
                )
            })
        }
    </>
  )
}
