import { forwardRef } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { isOpenDialogConfirm } from '../../store/dialogConfirm/dialogConfirmSlice';
  
  const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const DialogConfirm = () => {

  const dispatch = useAppDispatch();

  const { isOpen, function: funciones, content, notice, argu } = useAppSelector( state => state.dc );

  const handleClose = () => {
    dispatch( isOpenDialogConfirm({isOpen: false}) )
  }

  const handleClick = () => {
    if ( !argu ) {
      funciones!()
    } else {
      funciones!(argu)
    }
  }

  return (
    <Dialog
      open={ isOpen }
      fullWidth
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
      <DialogTitle align="center">
        <IconButton onClick={ handleClose } sx={{ position: 'absolute', left: 24, top: 12.10 }}>
          <ArrowBackIos />
        </IconButton>
        Información de la cita
      </DialogTitle>

      <DialogContent sx={{ display: 'flex', textAlign: 'center' }}>

        { content }

        <br />
        <br />

        { notice }
        
      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button fullWidth onClick={ handleClick } color = { 'inherit' } variant='contained'>No</Button>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Si</Button>
      </DialogActions>
    </Dialog>
  )
}
