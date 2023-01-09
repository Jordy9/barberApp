import { ChangeEvent, forwardRef, Fragment, useState, useEffect } from 'react';

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

import moment, { Moment } from 'moment';

type horas = {
  fecha: string;
  hora: string | undefined | number;
}

type service = {
  servicio: string;
  tiempo: string;
  minHor: string
}

interface formValuesProps {
  hora: string;
  barbero: string;
  servicio: service[]
}

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

  const [formValues, setFormValues] = useState<formValuesProps[]>([
    {
      hora: '',
      barbero: '',
      servicio: [],
    }
  ])

  const addNino = () => {
    setFormValues([
      ...formValues,
      {
        hora: '',
        barbero: '',
        servicio: [],
      }
    ])
    setCont( prev => prev + 1 )
  }

  const handleChange = ( i: number, { target }: ChangeEvent<HTMLTextAreaElement | HTMLInputElement> ) => {
    let newFormValues = [ ...formValues ]
    newFormValues[i] = {
      ...newFormValues[i],
      [target.name]: target.value
    }

    setFormValues(newFormValues)
  }

  const handleChangeBarber = ( i: number, e: string ) => {
    let newFormValues = [ ...formValues ]

    newFormValues[i].barbero = e

    setFormValues(newFormValues)
  }

  const handleChangeAutoComplete = ( i: number, e: service[] ) => {
    let newFormValues = [ ...formValues ]

    newFormValues[i].servicio = [ ...e ]

    setFormValues(newFormValues)
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

  // let arreglo: horas[] = []

  // for (let index = 0; index < 20; index++) {

  //   let horaSuma = 30

  //   if ( index === 0 ) {
  //     arreglo.push({ fecha: moment(), hora: moment().format('hh:mm a') })
  //   } else {
  //     if ( index === 1 ) {
  //       arreglo.push({fecha: moment().add(horaSuma, 'minutes'), hora: moment().add(horaSuma, 'minutes').format('hh:mm a')})
  //     } else {
  //       // if ( index === 10 ) {
  //       //   let fecha = arreglo[index - 1]?.fecha?.clone().add(10, 'minutes')
  //       //   let hora = arreglo[index - 1]?.fecha?.clone().add(10, 'minutes').format('hh:mm a')
  //       //   arreglo.push({ fecha, hora })
  //       // } else {

  //         // if ( index === 11 ) {
  //         //   let fecha = arreglo[index - 1]?.fecha?.clone().add(20, 'minutes')
  //         //   let hora = arreglo[index - 1]?.fecha?.clone().add(20, 'minutes').format('hh:mm a')
  //         //   arreglo.push({ fecha, hora })
  //         // } else {
  //         //   let fecha = arreglo[index - 1]?.fecha?.clone().add(horaSuma, 'minutes')
  //         //   let hora = arreglo[index - 1]?.fecha?.clone().add(horaSuma, 'minutes').format('hh:mm a')
  //         //   arreglo.push({ fecha, hora })
  //         // }
  //         let fecha = arreglo[index - 1]?.fecha?.clone().add(horaSuma, 'minutes')
  //         let hora = arreglo[index - 1]?.fecha?.clone().add(horaSuma, 'minutes').format('hh:mm a')
  //         arreglo.push({ fecha, hora })
  //       // }
  //     }
  //   }
    
  // }

  // // console.log(arreglo)

  // useEffect(() => {
  //   if ( arreglo?.length === 0 ) return

  //   let lol = []

  //   // arreglo?.map( ( e, index ) => (arreglo[index + 1]?.fecha?.diff(e.fecha, 'minutes')! < 30) && e.fecha)

  //   lol = arreglo?.map( ( e, index ) => (index === 10) ? { fecha: e.fecha?.clone()?.subtract(20, 'minutes'), hora: e.fecha?.clone()?.subtract(20, 'minutes').format('hh:mm a') } : {fecha: e.fecha, hora: e.hora})

  //   lol.push({ fecha: arreglo[10].fecha?.clone(), hora: arreglo[10].fecha?.clone().format('hh:mm a') })

  //   lol.sort( (a:horas, b: horas) => a.fecha!.unix() - b.fecha!.unix() )

  //   // console.log({fecha: arreglo[10].fecha?.clone()?.subtract(20, 'minutes'), hora: arreglo[10].fecha?.clone()?.subtract(20, 'minutes').format('hh:mm a')})

  //   // console.log(lol)

  // }, [])
  
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
            <Fragment key={ index }>
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
                    handleChange = { handleChange }
                    handleChangeAutoComplete = { handleChangeAutoComplete }
                    // handleChangeHora = { handleChangeHora }
                    handleChangeBarber = { handleChangeBarber }
                    // minTime = { ( index > 0 ) ? formValues[index - 1].hora : moment() }
                    formValues = { formValues }
                  />
                </motion.div>
              }
            </Fragment>
          ))
        }
      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button fullWidth color = { 'inherit' } variant='contained'>Crear cita</Button>
      </DialogActions>
    </Dialog>
  )
}
