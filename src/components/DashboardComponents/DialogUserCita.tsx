import { Dispatch, SetStateAction, forwardRef } from "react";

import { Dialog, Slide, Button, DialogContent, DialogActions, IconButton, DialogTitle, TextField } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import { ArrowBackIos } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import moment from 'moment';
import Autocomplete from '@mui/material/Autocomplete';
import { useAppDispatch } from '../../store/hooks';
import { isOpenDialogConfirm } from "../../store/dialogConfirm/dialogConfirmSlice";
import { nuevaCitasInterfaceCita } from "../../interfaces/citasInterface";

interface DialogProps extends nuevaCitasInterfaceCita {
  showDialog: boolean;
  setShowDialog: Dispatch<SetStateAction<boolean>>;
  respWidth: number;
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const DialogUserCita = ({ showDialog, setShowDialog, respWidth, createdAt, hora, nombre, servicio }: DialogProps) => {

  const dispatch = useAppDispatch();

  const handleCancelarCita = () => {
    dispatch( 
      isOpenDialogConfirm(
        { 
          isOpen: true, 
          // function: holaM, 
          content: '¿Está seguro que desea cancelar esta cita?' 
        }
      ) 
    )
  }

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
      <DialogTitle align="center">
        <IconButton onClick={ handleClose } sx={{ position: 'absolute', left: 24, top: 12.10 }}>
          <ArrowBackIos />
        </IconButton>
        Información de la cita
      </DialogTitle>

      <DialogContent>

        <Grid my={ 1 } textAlign={ 'end' }> 
          { moment(createdAt).format('MMMM Do YYYY') }
        </Grid>

        <Grid item container mt = { ( respWidth < 400 ) ? 5 : 3 }>
          <Grid display={ 'flex' } sx={{ mx: 'auto' }}> 
            <Avatar sx={{ width: '182px', height: '182px' }} src={ 'https://mui.com/static/images/avatar/3.jpg' } />
          </Grid>
        </Grid>

        <Grid item container p={ 2 } mt = { 3 }>

          <Grid px={ 1 } xs = { 6 }>
            <TextField
              id="outlined-select-currency"
              label="Hora"
              value={ hora }
              inputProps={
                { readOnly: true, }
              }
            >
            </TextField>
          </Grid>

          <Grid px={ 1 } xs = { 6 }>
            <TextField
              fullWidth
              id="outlined-select-currency"
              label="Nombre"
              value={ nombre }
              inputProps={
                { readOnly: true, }
              }
            >
            </TextField>
          </Grid>
            
          <Grid px={ 1 } mt={ 3 } xs = { 12 }>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={servicio}
              getOptionLabel={(option) => option.servicio}
              value = { servicio }
              fullWidth
              filterSelectedOptions
              popupIcon = { false }
              readOnly
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Servicios"
                  placeholder="..."
                />
              )}
            />
          </Grid>
        </Grid>
        
      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button fullWidth onClick={ handleCancelarCita } color = { 'inherit' } variant='contained'>Cancelar cita</Button>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Finalizada</Button>
      </DialogActions>
    </Dialog>
  )
}
