import { Cancel, CheckCircle, RemoveRedEye, Timer } from '@mui/icons-material';
import { ListItemText, Grid, Typography, Button, Tooltip } from '@mui/material';
import { CitasInterfaceCita } from '../../interfaces/citasInterface';
import { useAppDispatch } from '../../store/hooks';
import moment from 'moment';
import { useResponsive } from '../../hooks/useResponsive';
import { cancelCitaComplete } from '../../store/socket/thunk';
import { isOpenCita, onGetCitaActiva } from '../../store/citas/CitasSlice';

interface ListTextProps {
    cita: CitasInterfaceCita
}

export const ListText = ({ cita }: ListTextProps) => {

    const dispatch = useAppDispatch();

    const handleOpenCita = ( props: CitasInterfaceCita ) => {
        dispatch( onGetCitaActiva(props))
        dispatch( isOpenCita(true))
    }

    const handleCancelCita = () => {
        dispatch( cancelCitaComplete(cita._id, cita) )
    }

    const [ respWidth ] = useResponsive()

    const isFinish = cita.cita.every( e => e.estado === 'Finalizada' )

    const isAllCanceled = cita.cita.every( e => e.estado === 'Cancelada' )
    
  return (
    <ListItemText
        sx={{ p: 1 }}
        primary={
            <Grid display={ 'flex' }>
                <Grid my = { 1.5 }>
                    {
                        ( cita.cita.some( e => e.estado === 'En-espera' ) )
                            &&
                        <Button onClick={ handleCancelCita } sx={{ mr: 2 }} size = 'small' variant='contained' color='inherit' endIcon = { <Cancel color='error' /> }>Cancelar</Button>
                    }
                    <Button onClick={ () => handleOpenCita(cita) } sx={{ ml: 2 }} size = 'small' variant='contained' color='inherit' endIcon = { <RemoveRedEye color='info' /> }>Ver cita</Button>
                </Grid>
            </Grid>
        }

        secondary = {
            <Grid display={ 'flex' } justifyContent = { 'space-between' }>
                <Grid display={ 'block' }>
                    <Typography mb={ 1 } textAlign={ 'center' } color = 'white' variant = 'subtitle1'>Barbero</Typography>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>{ cita.cita[0].barberName }</Typography>
                </Grid>

                <Grid ml={ 3 } display={ 'block' }>
                    <Typography mb={ 1 } textAlign={ 'center' } color = 'white' variant = 'subtitle1'>Fecha</Typography>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>{ moment(cita.createdAt).format('DD/MM/YY') }</Typography>
                </Grid>

                <Grid ml={ 3 } display={ 'block' }>
                    <Typography mb={ 1 } textAlign={ 'center' } color = 'white' variant = 'subtitle1'>¿Niños?</Typography>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>{ ( cita.ninos ) ? 'Si' : 'No' }</Typography>
                </Grid>

                <Grid ml={ 3 } display={ 'block' }>
                    <Typography mb={ 1 } textAlign={ 'center' } color = 'white' variant = 'subtitle1'>Estado</Typography>
                    <Typography textAlign={ 'center' } color = 'white' variant = 'subtitle1'>

                        {
                            ( isFinish )
                                ?
                            <Typography alignItems={ 'center' } textAlign={ 'center' } color = '#66bb6a' variant = 'subtitle1'>
                                {
                                    ( respWidth <= 390 )
                                        ?
                                    <Tooltip arrow title="Finalizada" enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                                        <CheckCircle color='success' />
                                    </Tooltip>
                                        :
                                    'Finalizada'
                                }
                            </Typography>
                                :
                            ( !isAllCanceled )
                                ?
                            <Typography textAlign={ 'center' } color = '#ffa726' variant = 'subtitle1'>
                                {
                                    ( respWidth <= 390 )
                                        ?
                                    <Tooltip arrow title="Aún no ha finalizado" enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                                        <Timer color='warning' />
                                    </Tooltip>
                                        :
                                    'Aún no ha finalizado'
                                }
                            </Typography>
                                :
                            <Typography textAlign={ 'center' } color = '#f44336' variant = 'subtitle1'>
                                {
                                    ( respWidth <= 390 )
                                        ?
                                    <Tooltip arrow title="Todas las citas han sido canceladas" enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                                        <Cancel color='error' />
                                    </Tooltip>
                                        :
                                    'Cancelada'
                                }
                            </Typography>
                        }

                    </Typography>
                </Grid>
            </Grid>
        }
    />
  )
}
