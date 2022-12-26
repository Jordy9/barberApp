import { VisibilityOutlined } from "@mui/icons-material"
import { IconButton, TableCell, TableRow } from "@mui/material"
import moment from "moment";

interface UsuariosProps {
    Barbero: string;
    Servicio: string;
    Hora: number;
    fecha: number;
}

export const TableCitaContent = ( props: UsuariosProps ) => {

    const { Barbero, Servicio, Hora, fecha } = props

  return (
    <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >

        <TableCell size='small' align='center' component="th" scope="row">
            { Barbero }
        </TableCell>

        <TableCell size='small' align='center' component="th" scope="row">
            { Servicio }
        </TableCell>

        <TableCell size='small' align='center' component="th" scope="row">
            { Hora }
        </TableCell>

        <TableCell size='small' align='center' component="th" scope="row">
            { moment(fecha).format('MMMM Do YYYY') }
        </TableCell>

        <TableCell size='small' sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton color = 'info'>
                <VisibilityOutlined />
            </IconButton> 
        </TableCell>

    </TableRow>
  )
}
