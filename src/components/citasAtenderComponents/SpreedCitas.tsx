import { Fragment } from 'react';

import { useAppSelector } from "../../store/hooks"
import { CitaContent } from './';

export const SpreedCitas = () => {

    const { cita } = useAppSelector( state => state.ct );

  return (
    <>
        {
            cita.map( cita => {

                const citaOrder = [...cita.cita].sort( (a, b) => a.hora.fecha - b.hora.fecha )
                return (

                    <Fragment key={ cita._id }>
                        {
                            citaOrder.map(({ barberId, hora, nombre, servicio, usuarioId, estado }) => {
                                const nuevaCita = { ...cita, barberId, hora, nombre, servicio, usuarioId, estado }
                                return (
                                    <>
                                        {
                                            ( estado === 'En-espera' || estado === 'Atendiendo' )
                                                &&
                                            <CitaContent key={ hora.hora } { ...nuevaCita } />
                                        }
                                    </>
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
