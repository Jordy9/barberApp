import { forwardRef } from "react";

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Avatar, Typography, Grid, TextField } from '@mui/material';
import { RatingComponent } from "./RatingComponent"
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const RatingDialog = () => {

    const handleClose = () => {

    }

  return (
    <Dialog
        open={ true }
        fullWidth
        TransitionComponent={ Transition }
        maxWidth = 'xs'
        // onClose={ handleClose }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll={ 'paper' }
        PaperProps = {{
            style: { borderRadius: '11px' }
        }}
    >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} align="center">
            <IconButton onClick={ handleClose }>
                <ArrowBackIos />
            </IconButton>

            <Typography>
                ¿Cómo fue tu experiencia conmigo?
            </Typography>

            <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
        </DialogTitle>

        <DialogContent sx={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>

            <Grid>
                <Typography mb={ 2 }>
                    Esta valoración es anónima por lo que puedes expresarte libremente
                </Typography>

                <RatingComponent />

                <Grid>
                    <TextField
                        maxRows={ 6 }
                        multiline
                        fullWidth
                        label = 'Comentario'
                        placeholder="Me atendiste de maravilla"
                        helperText = 'Este comentario no es obligatorio, con solo calificarme es suficiente.'
                    />
                </Grid>

            </Grid>
        </DialogContent>
        
        <DialogActions sx={{ p: 2 }}>
            <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Enviar</Button>
        </DialogActions>
    </Dialog>
  )
}
