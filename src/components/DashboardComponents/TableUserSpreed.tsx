import { useAppSelector } from "../../store/hooks"
import { TableUsersContent } from "./TableUsersContent"
import { Fragment } from 'react';

interface UsuariosProps {
    foto: string,
    name: string,
    Servicio: string,
    Hora: number,
    fecha: number
}

export const TableUserSpreed = () => {

    const { cita } = useAppSelector( state => state.ct );

    const arreglo: UsuariosProps[] = [
        {
            foto: 'https://mui.com/static/images/avatar/5.jpg',
            name: 'Fulano',
            Servicio: 'Recortada',
            Hora: 1,
            fecha: new Date().getTime()
        },
        {
            foto: 'https://mui.com/static/images/avatar/2.jpg',
            name: 'Fulano',
            Servicio: 'Recortada',
            Hora: 2,
            fecha: new Date().getTime()
        },
        {
            foto: 'https://mui.com/static/images/avatar/4.jpg',
            name: 'Fulano',
            Servicio: 'Recortada',
            Hora: 3,
            fecha: new Date().getTime()
        },
        {
            foto: 'https://mui.com/static/images/avatar/3.jpg',
            name: 'Fulano',
            Servicio: 'Recortada',
            Hora: 4,
            fecha: new Date().getTime()
        },
        {
            foto: 'https://mui.com/static/images/avatar/1.jpg',
            name: 'Fulano',
            Servicio: 'Recortada',
            Hora: 5,
            fecha: new Date().getTime()
        }
    ]

  return (
    <>
        {
            cita.map( cita => (
                <Fragment key={ cita._id }>
                    {
                        cita.cita.map(({ barberId, hora, nombre, servicio, usuarioId, estado }) => {
                            const nuevaCita = { ...cita, barberId, hora, nombre, servicio, usuarioId, estado }
                            return (
                                <TableUsersContent key={ hora.fecha } { ...nuevaCita } />
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
