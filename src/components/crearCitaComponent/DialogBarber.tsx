import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions";
import { Dispatch, SetStateAction, forwardRef } from "react";

interface DialogProps {
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

export const DialogBarber = ({ showDialog, setShowDialog }: DialogProps) => {

  const handleClose = () => {
    setShowDialog(false)
  }

  return (
    <Dialog
      open={ showDialog }
      fullScreen
      TransitionComponent={ Transition }
      onClose={ handleClose }
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      scroll={ 'paper' }
    >
      <DialogTitle>
      </DialogTitle>
      <DialogContent>
        <Grid item container display = { 'flex' }>
          {
            [...Array(50)].map( e => (
                <Grid p = { 1 } xs = { 2 }>
                  <Avatar src="https://mui.com/static/images/avatar/2.jpg" sx={{ height: '100%', width: '100%' }} variant="rounded" />
                </Grid>
            ))
          }
        </Grid>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Cerrar</Button>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Continuar</Button>
      </DialogActions>
    </Dialog>
  )
}
