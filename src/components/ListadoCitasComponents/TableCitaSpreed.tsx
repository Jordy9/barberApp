import { useAppSelector } from "../../store/hooks";
import { TableCitaContent } from "./"

export const TableCitaSpreed = () => {

    const { cita } = useAppSelector( state => state.ct );

    const { usuarioActivo } = useAppSelector( state => state.auth );

  return (
    <>
        {
            cita.map( cita => (
                ( cita.userId === usuarioActivo?._id )
                    &&
                <TableCitaContent key={ cita._id } { ...cita } />
            ))
        }
    </>
  )
}
