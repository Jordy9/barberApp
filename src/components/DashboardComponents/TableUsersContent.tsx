import { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Cancel, VisibilityOutlined, Timer, CheckCircle } from "@mui/icons-material"

import { Avatar, IconButton, TableCell, TableRow, IconButtonProps, Collapse, Box, Table, TableHead, TableBody } from '@mui/material';
import { styled } from '@mui/material/styles';

import moment from 'moment';

import { useResponsive } from "../../hooks/useResponsive";
import { IconCondicionBarber } from './';

interface UsuariosProps {
    foto: string,
    name: string,
    Servicio: string,
    Hora: number,
    fecha: number
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

export const TableUsersContent = ( props: UsuariosProps ) => {

    const { foto, name, Servicio, Hora, fecha } = props

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    const [ respWidth ] = useResponsive()

  return (
    <>
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell size='small' component="th" scope="row">
                <Avatar src={ foto } alt="" />
            </TableCell>

            <TableCell size='small' style = {{verticalAlign: 'middle'}} align='center' component="th" scope="row">
                { name }
            </TableCell>

            {
                ( respWidth > 991 )
                    ?
                <>
                    <TableCell size='small' style = {{verticalAlign: 'middle'}} align='center' component="th" scope="row">
                        { Servicio }
                    </TableCell>

                    <TableCell size='small' style = {{verticalAlign: 'middle'}} align='center' component="th" scope="row">
                        { Hora }
                    </TableCell>

                    <TableCell size='small' style = {{verticalAlign: 'middle'}} align='center' component="th" scope="row">
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

            <TableCell size='small' align="center" sx={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton color = 'info'>
                    <VisibilityOutlined />
                </IconButton>

                {
                    ( true )
                        ?
                    <IconCondicionBarber Hora={ Hora } />
                        :
                    <IconButton color = 'success'>
                        <CheckCircle />
                    </IconButton>
                }

            </TableCell>

        </TableRow>

        {
            ( respWidth < 992 )
                &&
            <TableCell style={{ padding: 0 }} colSpan={6}>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Box sx={{ margin: 0, padding: 0 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Servicio</TableCell>
                                    <TableCell align="left">Hora</TableCell>
                                    <TableCell align="left">Fecha</TableCell>
                                    <TableCell align="left">Cancelar</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 }  }}
                                >

                                    <TableCell size='small' align='left' component="th" scope="row">
                                        { Servicio }
                                    </TableCell>

                                    <TableCell size='small' align='left' component="th" scope="row">
                                        { Hora }
                                    </TableCell>

                                    <TableCell size='small' align='left' component="th" scope="row">
                                        { moment(fecha).format('MMM Do YYYY') }
                                    </TableCell>

                                    <TableCell size='small' align='left' component="th" scope="row">
                                        <IconButton color = 'error'>
                                            <Cancel />
                                        </IconButton>
                                    </TableCell>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Collapse>
            </TableCell>
        }
    </>
  )
}
