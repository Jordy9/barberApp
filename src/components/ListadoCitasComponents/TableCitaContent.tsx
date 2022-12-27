import { useState } from 'react';

import { VisibilityOutlined } from "@mui/icons-material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { IconButton, TableCell, TableRow, IconButtonProps, Table, TableHead, TableBody, Collapse, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import moment from "moment";

import { useResponsive } from '../../hooks/useResponsive';
import { DialogListCita } from './';

interface UsuariosProps {
    Barbero: string;
    Servicio: string;
    Hora: number;
    fecha: number;
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export const TableCitaContent = ( props: UsuariosProps ) => {

    const { Barbero, Servicio, Hora, fecha } = props

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const [ respWidth ] = useResponsive()

    const [showDialog, setShowDialog] = useState(false)

  return (
    <>
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >

            <TableCell size='small' align='center' component="th" scope="row">
                { Barbero }
            </TableCell>

            <TableCell size='small' align='center' component="th" scope="row">
                { Hora }
            </TableCell>

            {
                ( respWidth > 991 )
                    ?
                <>
                    <TableCell size='small' align='center' component="th" scope="row">
                        { Servicio }
                    </TableCell>

                    <TableCell size='small' align='center' component="th" scope="row">
                        { moment(fecha).format('MMMM Do YYYY') }
                    </TableCell>
                </>
                    :
                <TableCell size='small' align='center' component="th" scope="row">
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </TableCell>
            }

            <TableCell size='small' sx={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton onClick={ () => setShowDialog(true) } color = 'info'>
                    <VisibilityOutlined />
                </IconButton> 
            </TableCell>

        </TableRow>

        {
            ( respWidth < 992 )
                &&
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 1 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Servicio</TableCell>
                                    <TableCell align="center">Fecha</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell size='small' align='center' component="th" scope="row">
                                        { Servicio }
                                    </TableCell>

                                    <TableCell size='small' align='center' component="th" scope="row">
                                        { moment(fecha).format('MMMM Do YYYY') }
                                    </TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        }

        <DialogListCita
            showDialog = { showDialog }
            setShowDialog = { setShowDialog }
            respWidth = { respWidth }
            { ...props }
        />
    </>
  )
}
