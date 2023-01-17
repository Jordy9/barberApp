import { Cancel, CheckCircle, ContentCut, Timer } from '@mui/icons-material';
import { ListItemText, Grid, Typography, Button } from '@mui/material';
import { Servicio, EstadoType, citaHoraType } from '../../interfaces/citasInterface';
import { useAppDispatch } from '../../store/hooks';
import { removeServiceCita, updateCitaState } from '../../store/socket/thunk';

interface ListTextProps {
    usuarioId: string;
    barberId: string;
    _id: string
    nombre: string;
    hora: citaHoraType;
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
    
  return (
    <ListItemText
        primary={
            <Grid display={ 'flex' }>
                <Grid my = { 1.5 }>
                    <Button onClick={ handleCancelCita } sx={{ mr: 2 }} size = 'small' variant='contained' color='inherit' endIcon = { <Cancel color='error' /> }>Cancelar</Button>
                    {
                        ( estado === 'Atendiendo' )
                            &&
                        <Button onClick={ handleUpdatelCita } sx={{ ml: 2 }} size = 'small' variant='contained' color='inherit' endIcon = { <CheckCircle color='success' /> }>Finalizada</Button>
                    }
                </Grid>
            </Grid>
        }

        secondary = {
            <Grid display={ 'flex' } justifyContent = { ( respWidth <= 991 ) ? 'inherit' : 'space-between' }>
                <Grid display={ 'block' }>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>{ nombre }</Typography>
                </Grid>

                <Grid ml={ 3 } display={ 'block' }>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>{ hora.hora }</Typography>
                </Grid>

                <Grid ml={ 3 } display={ 'block' }>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>{ servicio.map( ( e, index ) => ( servicio.length > 1 ) ? ( ( index ) ? ', ' : '' ) + e.servicio : e.servicio ) }</Typography>
                </Grid>

                <Grid ml={ 3 } display={ 'block' }>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>

                        {
                            ( estado === 'En-espera' )
                                &&
                            <Timer color='warning' />
                        }

                        {
                            ( estado === 'Atendiendo' )
                                &&
                            <ContentCut />
                        }

                    </Typography>
                </Grid>
            </Grid>
        }
    />
  )
}
