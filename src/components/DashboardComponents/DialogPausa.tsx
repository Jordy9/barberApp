import { forwardRef, Dispatch, SetStateAction } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Grid, MenuItem, Typography } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../../store/hooks';
import { isOpenDialogConfirm } from '../../store/dialogConfirm/dialogConfirmSlice';
import { useResponsive } from '../../hooks/useResponsive';

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

  const handleClose = () => {
    setShowDialog2(false)
  }

  const handleConfirm = () => {
    dispatch( isOpenDialogConfirm(
      {
        isOpen: true,
        content: '¿Está seguro que desea detener sus servicios por el día de hoy?',
        notice: 'Se cancelarán todas sus citas',
        function: setShowDialog2,
        argu: false
      }
    ) )
  }

  const [ respWidth ] = useResponsive()

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
            <TextField type={ 'time' } defaultValue = { '08:00' } variant='outlined' label = { 'Desde' } helperText = { 'Desde qué hora ofrecerá sus servicios' } />
          </Grid>

          <Grid px={ 1 } item xs = { 6 }>
            <TextField type={ 'time' } defaultValue = { '18:00' } variant='outlined' label = { 'Hasta' } helperText = { 'Hasta qué hora ofrecerá sus servicios' } />
          </Grid>

          <Typography mb={ 2 }>Tiempo que desea pausar sus servicios</Typography>

          <Grid p={ 1 } item xs = { 6 }>
            <TextField type={ 'number' } defaultValue = { 30 } variant='outlined' label = { 'Cantidad' } helperText = { 'Tiempo que desea pausar sus servicios' } />
          </Grid>

          <Grid p={ 1 } item xs = { 6 }>
            <TextField value={ 'Minutos' } type={ 'number' } select variant='outlined' label = { 'Tiempo' } helperText = { 'Minutos u horas que pausará sus servicios' }>
              <MenuItem value = 'Minutos' selected>Minutos</MenuItem>
              <MenuItem value = 'Horas'>Horas</MenuItem>
            </TextField>
          </Grid>

          <Grid p={ 1 } item xs = { 12 }>
            <Button onClick={ handleConfirm } fullWidth variant='contained' color='inherit'>Detener sus servicios por el día de hoy</Button>
          </Grid>
        </Grid>


      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Cerrar</Button>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Continuar</Button>
      </DialogActions>
    </Dialog>
  )
}
