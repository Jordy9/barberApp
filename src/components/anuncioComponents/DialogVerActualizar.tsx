import { forwardRef, Dispatch, SetStateAction } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Grid, Typography } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';
import { top100Films } from '../../utils/Search';
import { useResponsive } from '../../hooks/useResponsive';
import { CustomDateRange } from '../DashboardComponents';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { TextAreaAnuncio } from './';

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

export const DialogVerActualizar = ({ showDialog, setShowDialog }: loginProps) => {

  const handleClose = () => {
    setShowDialog(false)
  }

  const [ respWidth ] = useResponsive()

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
      <DialogTitle align="center">
        <IconButton onClick={ handleClose } sx={{ position: 'absolute', left: ( respWidth < 335 ) ? 10 : 30, top: 12.10 }}>
          <ArrowBackIos />
        </IconButton>
        Ver o actualizar anuncio
      </DialogTitle>

      <DialogContent>

        <Grid item container>
            <Grid p={ 1 } xs = { 12 }>
                <TextField variant="outlined" label = { 'Titulo' } placeholder = { 'Estaré comiendo a las 12 pm' } sx={{ width: '100%' }} />
            </Grid>

            <Grid p={ 1 } xs = { 12 }>
                <TextAreaAnuncio />
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
