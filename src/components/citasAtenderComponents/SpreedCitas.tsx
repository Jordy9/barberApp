import { Fragment } from 'react';

import { useAppSelector } from "../../store/hooks"
import { CitaContent } from './';

export const SpreedCitas = () => {

    const { cita } = useAppSelector( state => state.ct );

  return (
    <>
        {
            cita.map( cita => (
                <Fragment key={ cita._id }>
                    {
                        cita.cita.map(({ barberId, hora, nombre, servicio, usuarioId, estado }) => {
                            const nuevaCita = { ...cita, barberId, hora, nombre, servicio, usuarioId, estado }
                            return (
                                <>
                                    {
                                        ( estado === 'En-espera' )
                                            &&
                                        <CitaContent key={ hora } { ...nuevaCita } />
                                    }
                                </>
                            )
                        }
                        )
                    }
                </Fragment>
            ))
        }
    </>
  )
}
