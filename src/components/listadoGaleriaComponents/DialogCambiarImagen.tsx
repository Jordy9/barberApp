import { Dispatch, forwardRef, SetStateAction } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, CardHeader, Avatar, CardMedia, Grid } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import { ArrowBackIos } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton/IconButton';
import { useResponsive } from '../../hooks/useResponsive';
import red from '@mui/material/colors/red';

interface CitaProps {
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

export const DialogCambiarImagen = ({ showDialog, setShowDialog }: CitaProps) => {

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
      maxWidth = 'sm'
      onClose={ handleClose }
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      scroll={ 'paper' }
      PaperProps = {{
        style: { borderRadius: '11px' }
      }}
    >
      <DialogTitle align="center">
        <IconButton onClick={ handleClose } sx={{ position: 'absolute', left: 30, top: 12.10 }}>
          <ArrowBackIos />
        </IconButton>
        Cambiar imagen
      </DialogTitle>

      <DialogContent sx={{ mt: 2 }}>
        <CardMedia
          component="img"
          height="330"
          image="https://cdn.pixabay.com/photo/2020/05/24/01/50/barber-shop-5212042_960_720.jpg"
          alt="Paella dish"
        />
        
        <Grid p={ 2 } display = { 'flex' } justifyContent = { 'center' }>
          <Button sx = {{  }} variant='contained' color='inherit'>Seleccionar imagen</Button>
        </Grid>
      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        {/* <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Cerrar</Button> */}
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Guardar cambios</Button>
      </DialogActions>
    </Dialog>
  )
}
