import { Dispatch, forwardRef, SetStateAction, useState } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, TextField, Typography } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions";
import { FormBarber, SlideImage } from "./";
import Autocomplete from '@mui/material/Autocomplete';
import { Android12Switch, hoursSelect, top100Films } from '../../utils/Search';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import { ArrowBackIos, Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { motion, useIsPresent } from 'framer-motion';
import IconButton from '@mui/material/IconButton/IconButton';
import { useResponsive } from '../../hooks/useResponsive';

interface CitaProps {
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

export const DialogCita = ({ showDialog2, setShowDialog2 }: CitaProps) => {

  const handleClose = () => {
    setShowDialog2(false)
  }

  const navigate = useNavigate()

  const handleBarber = () => {
    setShowDialog2(false)
    const timeout = setTimeout(() => {
      navigate('/Barberos')
      clearTimeout(timeout)
    }, 350);
  }

  const isPresent = useIsPresent();

  const [count, setCont] = useState(0)

  const [ respWidth ] = useResponsive()

  return (
    <Dialog
      open={ showDialog2 }
      fullWidth
      fullScreen = { ( respWidth <= 600 ) }
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
        Crear cita
      </DialogTitle>

      <DialogContent>
        <Grid display={ 'flex' } justifyContent = { 'space-between' }>
          <Grid>
            <Typography variant='h5' p={ 2 }>Mis barberos</Typography>
          </Grid>
          <Grid display={ 'flex' } alignItems = { 'center' }>
            <Button size='large' onClick={ handleBarber } variant='contained' color='inherit' endIcon = { <Search /> }>
              {
                ( respWidth > 991 )
                  ?
                'Buscar más Barberos'
                  :
                'Barberos'  
              }
            </Button>
          </Grid>
        </Grid>

        {
          [ 1, 2, 3 ].map( (e, index) =>  (
            <>
              {
                ( index === count )
                  &&
                <motion.div
                  initial={{ width: '100%', opacity: 0, scaleX: 0 }}
                  animate={{ width: '100%', scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: "linear" } }}
                  exit={{ scaleX: 0.5, transition: { duration: 0.3, ease: "linear" } }}
                  style={{ originX: isPresent ? 0 : 2 }}
                >
                  <FormBarber count = { count } />
                </motion.div>
              }
            </>
          ))
        }
      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button disabled = { count === 0 } fullWidth onClick={ () => setCont(prev => prev - 1) } color = { 'inherit' } variant='contained'>Cerrar</Button>
        <Button disabled = { count === 2 } fullWidth onClick={ () => setCont(prev => prev + 1) } color = { 'inherit' } variant='contained'>Continuar</Button>
      </DialogActions>
    </Dialog>
  )
}
