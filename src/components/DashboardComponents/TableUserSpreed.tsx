import { TableUsersContent } from "./TableUsersContent"

interface UsuariosProps {
    foto: string,
    name: string,
    Servicio: string,
    Hora: number,
    fecha: number
}

export const TableUserSpreed = () => {

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
            arreglo.map( usuario => (
                <TableUsersContent key={ usuario.foto } { ...usuario } />
            ))
        }
    </>
  )
}
