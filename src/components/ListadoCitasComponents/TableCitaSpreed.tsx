import { useAppSelector } from "../../store/hooks";
import { TableCitaContent } from "./"

interface UsuariosProps {
    Barbero: string;
    Servicio: string;
    Hora: number;
    fecha: number;
}

export const TableCitaSpreed = () => {

    const { cita } = useAppSelector( state => state.ct );

    const arreglo: UsuariosProps[] = [
        {
            Barbero: 'Fulano',
            Servicio: 'Recortada',
            Hora: 1,
            fecha: new Date().getTime()
        },
        {
            Barbero: 'Fulano',
            Servicio: 'Recortada',
            Hora: 2,
            fecha: new Date().getTime()
        },
        {
            Barbero: 'Fulano',
            Servicio: 'Recortada',
            Hora: 3,
            fecha: new Date().getTime()
        },
        {
            Barbero: 'Fulano',
            Servicio: 'Recortada',
            Hora: 4,
            fecha: new Date().getTime()
        },
        {
            Barbero: 'Fulano',
            Servicio: 'Recortada',
            Hora: 5,
            fecha: new Date().getTime()
        }
    ]

  return (
    <>
        {
            cita.map( cita => (
                <TableCitaContent key={ cita._id } { ...cita } />
            ))
        }
    </>
  )
}
