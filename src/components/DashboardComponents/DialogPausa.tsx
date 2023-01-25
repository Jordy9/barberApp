import { forwardRef, Dispatch, SetStateAction, useState, useEffect } from 'react';

import { Button, Dialog, DialogContent, DialogTitle, Slide, Grid, MenuItem, Typography } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { isOpenDialogConfirm } from '../../store/dialogConfirm/dialogConfirmSlice';
import { useResponsive } from '../../hooks/useResponsive';
import moment from 'moment';
import { MobileClock } from '../crearCitaComponent/MobileClock';
import { pauseService, startService } from '../../store/socket/thunk';

interface loginProps {
    showDialog2: boolean;
    setShowDialog2: Dispatch<SetStateAction<boolean>>
  }
  
  const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const DialogPausa = ({ showDialog2, setShowDialog2 }: loginProps) => {

  const dispatch = useAppDispatch();

  const { usuarioActivo } = useAppSelector( state => state.auth );

  const { negocio } = useAppSelector( state => state.ng );

  const negocioFilt = negocio.find( e => e.barberId === usuarioActivo?._id )

  const handleClose = () => {
    setShowDialog2(false)
  }

  const handleConfirm = ( pauseButton: any ) => {
    dispatch( isOpenDialogConfirm(
      {
        isOpen: true,
        content: '¿Está seguro que desea pausar el servicio?',
        notice: `Todas las citas pendientes se moveran ${pauseButton.cantidad} ${pauseButton.tiempo}`,
        function: handlePauseService,
        argu: false
      }
    ) )
  }

  const [ respWidth ] = useResponsive()

  const handleButtonSubmit = () => {
    document.getElementById('buttonIdPausa')?.click()
  }

  const minTime = moment()

  const [firstValue, setFirstValue] = useState(minTime.clone().add(1, 'minutes'))

  const [secondValue, setSecondValue] = useState(firstValue.clone().add(1, 'minutes'))

  const [thirdValue, setThirdValue] = useState({ cantidad: 30, tiempo: 'Minutos' })

  const [error, setError] = useState({ errorDesde: false, errorHasta: false })

  const [pauseButton, setPauseButton] = useState({ cantidad: 30, tiempo: 'Minutos' })

  useEffect(() => {

    if ( moment().isAfter(firstValue) ) {
      setError({ errorDesde: true, errorHasta: false })
    }

    if ( firstValue.isAfter(secondValue) ) {
      setError({ errorDesde: false, errorHasta: true })
    }
    
    if ( moment().isBefore(firstValue) ) {
      setError({ errorDesde: false, errorHasta: false })
    }

    if ( firstValue.isBefore(secondValue) ) {
      setError({ errorDesde: false, errorHasta: false })
    }
    
  }, [firstValue, secondValue])
  

  const handleStartService = () => {

    if ( error.errorDesde || error.errorHasta ) return

    dispatch( startService({ firstValue, secondValue, id: usuarioActivo?._id, thirdValue}) )

  }

  const handlePauseService = () => {
    dispatch( pauseService(pauseButton) )
  }

  return (
    <Dialog
      open={ showDialog2 }
      fullWidth
      fullScreen = { ( respWidth < 400 ) }
      TransitionComponent={ Transition }
      maxWidth = 'xs'
      onClose={ handleClose }
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      scroll={ 'paper' }
      PaperProps = {{
        style: { borderRadius: '11px' }
      }}
    >
      <DialogTitle>
        <IconButton onClick={ handleClose }>
          <ArrowBackIos />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 2 }}>
        <Grid item container>
          <Typography mb={ 2 }>Tiempo que estará ofreciendo sus servicios</Typography>

          <Grid px={ 1 } item xs = { 6 }>
            <MobileClock value={ firstValue } setValue = { setFirstValue } minTime = { minTime } error = { error.errorDesde } />
          </Grid>

          <Grid px={ 1 } item xs = { 6 }>
            <MobileClock label='Hasta' value={ secondValue } setValue = { setSecondValue } minTime = { firstValue.clone().add(1, 'minutes') } error = { error.errorHasta } />
          </Grid>

          <Typography my={ 2 }>¿Cada qué tiempo atenderá clientes?</Typography>

          <Grid p={ 1 } item xs = { 6 }>
            <TextField onChange={ ({ target }) => setThirdValue({ ...thirdValue, cantidad: +target.value }) } value = { thirdValue.cantidad } type={ 'number' } variant='outlined' label = { 'Cantidad' } />
          </Grid>

          <Grid mb={ 1 } p={ 1 } item xs = { 6 }>
            <TextField onChange={ ({ target }) => setThirdValue({ ...thirdValue, tiempo: target.value }) } value={ thirdValue.tiempo } type={ 'text' } select variant='outlined' label = { 'Tiempo' }>
              <MenuItem value = 'Minutos' selected>Minutos</MenuItem>
              <MenuItem value = 'Horas'>Horas</MenuItem>
            </TextField>
          </Grid>

          <Button onClick={ handleStartService } fullWidth variant='contained' color='inherit'>Comenzar servicio</Button>

          {
            ( negocioFilt )
              &&
            <>
              <Typography my={ 2 }>Tiempo que desea pausar sus servicios</Typography>

              <Grid p={ 1 } item xs = { 6 }>
                <TextField value={ pauseButton.cantidad } onChange = { ({ target }) => setPauseButton({ ...pauseButton, cantidad: +target.value }) } type={ 'number' } defaultValue = { 30 } variant='outlined' label = { 'Cantidad' } />
              </Grid>

              <Grid p={ 1 } item xs = { 6 }>
                <TextField value={ pauseButton.tiempo } onChange = { ({ target }) => setPauseButton({ ...pauseButton, tiempo: target.value }) } select variant='outlined' label = { 'Tiempo' }>
                  <MenuItem value = 'Minutos' selected>Minutos</MenuItem>
                  <MenuItem value = 'Horas'>Horas</MenuItem>
                </TextField>
              </Grid>

              <Grid p={ 1 } item xs = { 12 }>
                <Button onClick={ () => handleConfirm(pauseButton) } fullWidth variant='contained' color='inherit'>Pausar el servicio</Button>
              </Grid>
            </>

          }
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
