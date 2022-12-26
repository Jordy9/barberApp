import { forwardRef, Dispatch, SetStateAction } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Grid } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import { CustomDateRange } from "./";
import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';
import { useResponsive } from '../../hooks/useResponsive';

interface loginProps {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  
export const DialogDateRange = ({ showDialog, setShowDialog }: loginProps) => { 

  const [ respWidth ] = useResponsive()

  const handleClose = () => {
    setShowDialog(false)
  }

  return (
    <Dialog
      open={ showDialog }
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
        <IconButton>
          <ArrowBackIos />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Grid display={ ( respWidth > 991 ) ? 'block' : 'flex' } justifyContent={ 'center' } alignItems = { 'center' }>
          <CustomDateRange />
        </Grid>
      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Cerrar</Button>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Continuar</Button>
      </DialogActions>
    </Dialog>
  )
}
