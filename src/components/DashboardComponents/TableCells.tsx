import { TableCell } from '@mui/material';

interface tableCellsProps {
    respWidth: number;
}

export const TableCells = ({ respWidth }: tableCellsProps) => {
  return (
    <>
        {
            ( respWidth > 991 )
                ?
            <>
                <TableCell align="center">Foto</TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Servicio</TableCell>
                <TableCell align="center">Hora</TableCell>
                <TableCell align="center">Fecha</TableCell>
                <TableCell align="center">Acciones</TableCell>
            </>
                :
            <>
                <TableCell align="center">Foto</TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Más...</TableCell>
                <TableCell align="center">Acciones</TableCell>
            </>
        }
    </>
  )
}
