import { Delete, VisibilityOutlined } from "@mui/icons-material"
import { Avatar, IconButton, TableCell, TableRow } from "@mui/material"

interface UsuariosProps {
    foto: string,
    name: string,
    Servicio: string,
    Hora: number,
    fecha: number
}

export const TableUsersContent = ( props: UsuariosProps ) => {

    const { foto, name, Servicio, Hora, fecha } = props

  return (
    <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell size='small' component="th" scope="row">
            <Avatar src={ foto } alt="" />
        </TableCell>

        <TableCell size='small' style = {{verticalAlign: 'middle'}} align='center' component="th" scope="row">
            { name }
        </TableCell>

        <TableCell size='small' style = {{verticalAlign: 'middle'}} align='center' component="th" scope="row">
            { Servicio }
        </TableCell>

        <TableCell size='small' style = {{verticalAlign: 'middle'}} align='center' component="th" scope="row">
            { Hora }
        </TableCell>

        <TableCell size='small' style = {{verticalAlign: 'middle'}} align='center' component="th" scope="row">
            { fecha }
        </TableCell>

        <TableCell size='small' align="center" ><IconButton color = 'info'><VisibilityOutlined /></IconButton> <IconButton color = 'error'><Delete /></IconButton></TableCell>

    </TableRow>
  )
}
