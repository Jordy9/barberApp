import { useState } from 'react';

import { VisibilityOutlined } from "@mui/icons-material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { IconButton, TableCell, TableRow, IconButtonProps, Table, TableHead, TableBody, Collapse, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import moment from "moment";

import { useResponsive } from '../../hooks/useResponsive';
import { DialogListCita } from './';
import { CitasInterfaceCita } from '../../interfaces/citasInterface';
import { IconCondicionBarber } from '../DashboardComponents';
import { useAppDispatch } from '../../store/hooks';
import { isOpenCita, onGetCitaActiva } from '../../store/citas/CitasSlice';

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

export const TableCitaContent = ( props: CitasInterfaceCita ) => {

    const dispatch = useAppDispatch();

    const { _id, cita, createdAt, ninos } = props

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const [ respWidth ] = useResponsive()

    const [showDialog, setShowDialog] = useState(false)

    const handleOpenCita = ( props: CitasInterfaceCita ) => {
        dispatch( onGetCitaActiva(props))
        dispatch( isOpenCita(true))
    }

  return (
    <>
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >

            <TableCell size='small' align='center' component="th" scope="row">
                { 
                    ( ninos )
                        ?
                    cita[0].barberId + ', ...'
                        :
                    cita[0].barberId
                }
            </TableCell>

            <TableCell size='small' align='center' component="th" scope="row">
                { 
                    ( ninos )
                        ?
                    cita[0].hora + ', ...'
                        :
                    cita[0].hora
                }
            </TableCell>

            {
                ( respWidth > 991 )
                    ?
                <>
                    <TableCell size='small' align='center' component="th" scope="row">
                        { 
                            ( ninos )
                                ?
                            cita[0].servicio[0].servicio + ', ...'
                                :
                            cita[0].servicio[0].servicio
                        }
                    </TableCell>

                    <TableCell size='small' align='center' component="th" scope="row">
                        { moment(createdAt).format('MMMM Do YYYY') }
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
                <IconButton onClick={ () => handleOpenCita( props ) } color = 'info'>
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
                                        { 
                                            ( ninos )
                                                ?
                                            cita[0].servicio[0].servicio + ', ...'
                                                :
                                            cita[0].servicio[0].servicio
                                        }
                                    </TableCell>

                                    <TableCell size='small' align='center' component="th" scope="row">
                                        { moment(createdAt).format('MMMM Do YYYY') }
                                    </TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        }

        {/* <DialogListCita
            showDialog = { showDialog }
            setShowDialog = { setShowDialog }
            respWidth = { respWidth }
            { ...props }
        /> */}
    </>
  )
}
