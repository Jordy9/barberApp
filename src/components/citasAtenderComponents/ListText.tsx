import { Cancel, Check, CheckCircle, Clear, ContentCut, Timer } from '@mui/icons-material';
import { ListItemText, Grid, Typography, IconButton, Box, LinearProgress, Button } from '@mui/material';
import { Servicio, EstadoType } from '../../interfaces/citasInterface';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeServiceCita, updateCitaState } from '../../store/socket/thunk';
import moment from 'moment';

interface ListTextProps {
    usuarioId: string;
    barberId: string;
    _id: string
    nombre: string;
    hora: string;
    servicio: Servicio[];
    estado: EstadoType;
    respWidth: number;
}


export const ListText = ({ _id, usuarioId, barberId, nombre, hora, servicio, estado, respWidth }: ListTextProps) => {

    const dispatch = useAppDispatch();

    const handleCancelCita = () => {
        dispatch( removeServiceCita(barberId, usuarioId) )
        dispatch( updateCitaState(_id, usuarioId, 'Cancelada') )
    }

    const handleUpdatelCita = () => {
        dispatch( updateCitaState(_id, usuarioId, 'Finalizada') )
    }
    
    const { negocio } = useAppSelector( state => state.ng );

    const negocioFilt = negocio.find( neg => neg.barberId === barberId )

    console.log(hora.slice(0, 8), negocioFilt?.horarioDia![0]?.hora.slice(0, 8))

  return (
    <ListItemText
        primary={
            <Grid display={ 'flex' }>
                <Grid my = { 1.5 }>
                    <Button onClick={ handleCancelCita } sx={{ mr: 2 }} size = 'small' variant='contained' color='inherit' endIcon = { <Cancel color='error' /> }>Cancelar</Button>
                    <Button onClick={ handleUpdatelCita } sx={{ ml: 2 }} size = 'small' variant='contained' color='inherit' endIcon = { <CheckCircle color='success' /> }>Finalizada</Button>
                </Grid>
            </Grid>
        }

        secondary = {
            <Grid display={ 'flex' } justifyContent = { ( respWidth <= 991 ) ? 'inherit' : 'space-between' }>
                <Grid display={ 'block' }>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>{ nombre }</Typography>
                </Grid>

                <Grid ml={ 3 } display={ 'block' }>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>{ hora }</Typography>
                </Grid>

                <Grid ml={ 3 } display={ 'block' }>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>{ servicio.map( ( e, index ) => ( servicio.length > 1 ) ? ( ( index ) ? ', ' : '' ) + e.servicio : e.servicio ) }</Typography>
                </Grid>

                <Grid ml={ 3 } display={ 'block' }>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>
                        {
                            ( negocioFilt && negocioFilt?.horarioDia!.length > 0 && hora.slice(0, 8) === negocioFilt?.horarioDia![0]?.hora.slice(0, 8) )
                                ?
                            <ContentCut />
                                :
                            ( estado === 'En-espera' )
                                &&
                            <Timer color='warning' />
                        }
                    </Typography>
                </Grid>
            </Grid>
        }
    />
  )
}
