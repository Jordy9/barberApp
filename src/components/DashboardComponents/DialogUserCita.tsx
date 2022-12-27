import { Dispatch, SetStateAction, forwardRef } from "react";

import { Dialog, Slide, Button, DialogContent, DialogActions, IconButton, DialogTitle, TextField } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import { ArrowBackIos } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import moment from 'moment';
import Autocomplete from '@mui/material/Autocomplete';
import { top100Films } from "../../utils/Search";

interface UsuariosProps {
    foto: string,
    name: string,
    Servicio: string,
    Hora: number,
    fecha: number
}

interface DialogProps extends UsuariosProps {
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

export const DialogUserCita = ({ showDialog, setShowDialog, respWidth, foto, fecha, name }: DialogProps) => {

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

        <Grid mb={ 1 } textAlign={ 'end' }> 
            { moment(fecha).format('MMMM Do YYYY') }
        </Grid>

        <Grid item container>
            <Grid display={ 'flex' } sx={{ mx: 'auto' }}> 
                <Avatar sx={{ width: 'auto', height: 'auto' }} src={ foto } />
            </Grid>
        </Grid>

        <Grid item container p={ 2 }>

            <Grid px={ 1 } xs = { 6 }>
                <TextField
                    id="outlined-select-currency"
                    label="Hora"
                    defaultValue="3:00"
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
                    label="Barbero"
                    defaultValue="Fulano"
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
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Films[13], top100Films[11]]}
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
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Cancelar cita</Button>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Finalizada</Button>
      </DialogActions>
    </Dialog>
  )
}
