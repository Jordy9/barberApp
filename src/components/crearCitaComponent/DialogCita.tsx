import { forwardRef, useState } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, Typography } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions";

import { FormBarber } from "./";

import { ArrowBackIos, Search } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton/IconButton';

import { useNavigate } from 'react-router-dom';

import { motion, useIsPresent } from 'framer-motion';

import { useResponsive } from '../../hooks/useResponsive';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { isOpenCita } from '../../store/citas/CitasSlice';

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const DialogCita = () => {

  const dispatch = useAppDispatch();
  
  const { isOpen } = useAppSelector( state => state.ct );

  const handleClose = () => {
    dispatch( isOpenCita(false) )
  }

  const [count, setCont] = useState(0)

  const [formValues, setFormValues] = useState([
    {
      hora: '',
      barbero: '',
      servicio: '',
    }
  ])

  const addNino = () => {
    setFormValues([
      ...formValues, 
      {
        hora: '',
        barbero: '',
        servicio: '',
      }
    ])
    setCont( prev => prev + 1 )
  }

  const deleteNino = ( i: number ) => {
    let newFormValues = [ ...formValues ]

    newFormValues.splice( i, 1 )
    
    setFormValues([ ...newFormValues ])

    setCont( prev => prev - 1 )
  }

  const [ninos, setNinos] = useState(false)

  const navigate = useNavigate()

  const handleBarber = () => {
    dispatch( isOpenCita(false) )
    const timeout = setTimeout(() => {
      navigate('/Barberos')
      clearTimeout(timeout)
    }, 350);
  }

  const isPresent = useIsPresent();

  const [ respWidth ] = useResponsive()

  return (
    <Dialog
      open={ isOpen }
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
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton onClick={ handleClose }>
          <ArrowBackIos />
        </IconButton>
        
        Crear cita

        <Typography variant='h6'>{ count + 1 } / { formValues.length }</Typography>
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
          formValues.map( (e, index) =>  (
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
                  <FormBarber 
                    count = { count }
                    setCont = { setCont }
                    formCount = { formValues.length }
                    { ...formValues[index] }
                    ninos = { ninos }
                    setNinos = { setNinos }
                    addNino = { addNino }
                    deleteNino = { deleteNino }
                  />
                </motion.div>
              }
            </>
          ))
        }
      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button fullWidth color = { 'inherit' } variant='contained'>Crear cita</Button>
      </DialogActions>
    </Dialog>
  )
}
