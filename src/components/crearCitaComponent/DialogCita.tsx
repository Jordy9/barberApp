import { forwardRef, Fragment, useState, useEffect, useRef } from 'react';

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Slide, Typography, Box } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import { FormBarber } from "./";

import { ArrowBackIos, Search } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton/IconButton';

import { useNavigate } from 'react-router-dom';

import { motion, useIsPresent } from 'framer-motion';

import { useResponsive } from '../../hooks/useResponsive';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { isOpenCita, onClearCitaActiva } from '../../store/citas/CitasSlice';

import { useFormik } from 'formik';

import * as Yup from 'yup'
import { actualizarCita, createCita } from '../../store/citas/thunk';
import { citaHoraType, EstadoType } from '../../interfaces/citasInterface';
import { removeAllOrManyServiceCita, removeManyServiceCita, removeServiceCita, removeServiceCitaForm } from '../../store/socket/thunk';
import { toast } from 'react-hot-toast';
import { IconCondicionBarber } from '../DashboardComponents';

type horas = {
  fecha: string;
  hora: citaHoraType | undefined | number;
}

type service = {
  servicio: string;
  tiempo: string;
  minHor: string
}

interface formValuesProps {
  hora: citaHoraType;
  barberId: string;
  servicio: service[];
  estado: EstadoType;
  nombre?: string;
  usuarioId?: string;
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
  
  const { isOpen, citaActiva } = useAppSelector( state => state.ct );

  const { usuarioActivo } = useAppSelector( state => state.auth );

  const [count, setCont] = useState(0)

  const [formValues, setFormValues] = useState<formValuesProps[]>([
    {
      hora: { hora: '', fecha: 0 },
      barberId: '',
      servicio: [],
      estado: 'En-espera'
    }
  ])

  const [ninos, setNinos] = useState(false)

  const handleClose = () => {
    if ( citaActiva ) {
      dispatch( onClearCitaActiva() )
      dispatch( removeAllOrManyServiceCita() )
      dispatch( removeServiceCitaForm() )
    } else {
      dispatch( removeAllOrManyServiceCita() )
      dispatch( removeServiceCitaForm() )
    }
    setFormValues([
      {
        hora: { hora: '', fecha: 0 },
        barberId: '',
        servicio: [],
        estado: 'En-espera'
      }
    ])
    setNinos(false)
    setCont(0)
    dispatch( isOpenCita(false) )
  }

  const {handleSubmit, touched, errors} = useFormik({
    initialValues: {
      cita: formValues
    },
    enableReinitialize: true,
    onSubmit: ({ cita }) => {

      let nuevaCita: any = []

      let citaCortada = [ ...cita ]

      if ( !ninos && cita.length > 1 ) {
        citaCortada = cita.slice( 0, 1 )

        const citaBorrar = cita.slice(1)

        dispatch( removeManyServiceCita(citaBorrar) )
      }

      const ninosValid = ( ninos && cita.length === 1 ) ? false : ninos

      const id = citaActiva?._id!

      for ( let index = 0; index < citaCortada.length; index++ ) {
        const element = citaCortada[index];

        nuevaCita.push({ barberId: element.barberId, usuarioId: ( index === 0 ) ? usuarioActivo!._id : usuarioActivo?._id + ' nino ' + index , hora: element.hora, servicio: element.servicio, nombre: ( index > 0 ) ? usuarioActivo?.name + ' niño ' + index : usuarioActivo?.name, estado: element.estado })
        
      }

      if ( !citaActiva ) {
        dispatch( createCita(nuevaCita, ninosValid, usuarioActivo?._id!, handleClose) )
      } else {
        dispatch( actualizarCita(id, nuevaCita, ninosValid, usuarioActivo?._id!, handleClose) )
      }

    },
    validationSchema: Yup.object({
      cita: Yup.array().of(Yup.object({
        hora: Yup.object({
          hora: Yup.string().required('Requerido'),
        }),
        barberId: Yup.string().required('Requerido'),
        servicio: Yup.array().of(Yup.object({
          servicio: Yup.string().required('Requerido'),
          tiempo: Yup.string().required('Requerido'),
          minHor: Yup.string().required('Requerido'),
        })).min(1, 'Debe de seleccionar al menos un servicio')
      }))
    })
  })

  const addNino = () => {
    setFormValues([
      ...formValues,
      {
        hora: { hora: '', fecha: 0 },
        barberId: '',
        servicio: [],
        estado: 'En-espera'
      }
    ])
    setCont( prev => prev + 1 )
  }

  const handleChange = ( i: number, e: citaHoraType ) => {
    let newFormValues = [ ...formValues ]
    newFormValues[i] = {
      ...newFormValues[i],
      hora: e
    }

    setFormValues(newFormValues)
  }

  const handleChangeBarber = ( i: number, e: string ) => {
    let newFormValues = [ ...formValues ]

    newFormValues[i] = {
      ...newFormValues[i],
      barberId: e,
      // hora: { hora: '', fecha: 0 },
      servicio: []
    }

    setFormValues(newFormValues)
  }

  const handleChangeAutoComplete = ( i: number, e: service[], index: number ) => {
    let newFormValues = [ ...formValues ]

    if ( newFormValues[i].servicio.some( sv => sv.servicio === e[0].servicio ) ) {

      const newForm = newFormValues[i].servicio.filter( sv => sv.servicio !== e[0].servicio)

      newFormValues[i] = {
        ...newFormValues[i],
        servicio: newForm
      }
      setFormValues(newFormValues)

    } else {

      newFormValues[i] = {
        ...newFormValues[i],
        servicio: [ ...newFormValues[i].servicio, ...e ]
      }
      setFormValues(newFormValues)
      
    }

  }

  const deleteNino = ( i: number ) => {
    let newFormValues = [ ...formValues ]

    if ( newFormValues[i].barberId && newFormValues[i].hora.hora ) {
      dispatch( removeServiceCita(newFormValues[i].barberId, usuarioActivo?._id + ' nino ' + i) )
    }

    newFormValues.splice( i, 1 )
    
    setFormValues([ ...newFormValues ])

    setCont( prev => prev - 1 )
  }

  const navigate = useNavigate()

  const handleBarber = () => {
    dispatch( isOpenCita(false) )
    const timeout = setTimeout(() => {
      navigate('/Barberos')
      clearTimeout(timeout)
    }, 350);
  }

  useEffect(() => {
    if ( citaActiva ) {
      setFormValues(citaActiva.cita)
      setNinos( citaActiva.ninos )
    }

  }, [citaActiva])
  
  const isPresent = useIsPresent();

  const [ respWidth ] = useResponsive()

  useEffect(() => {
    if ( formValues.length > 1 && errors.cita && errors.cita?.length > 0 ) {
      toast.error('Revise que haya llenado todos los campos correctamente, incluyendo los de los niños', { position: 'top-right' })
    }
  }, [errors])

  const handleSubmitCita = () => {
    document.getElementById('buttonSubmitCita')?.click()
  }

  const valueFiltrado = formValues.filter( e => e.estado !== 'En-espera' )

  const [segundos, setSegundos] = useState(0)
  const refSegundos = useRef<NodeJS.Timer>()

  // useEffect(() => {
  //   refSegundos.current && clearInterval(refSegundos.current)
  //   refSegundos.current = setInterval(
  //     () =>  setSegundos( s => s - 1 )
  //   , 1000)
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

        {
          ( !citaActiva )
            ?
          'Crear cita'
            :
          'Actualizar cita'
        }
        
        <div>
          <Typography variant='h6'>{ count + 1 } / { formValues.length }</Typography>
        </div>
      </DialogTitle>

      <DialogContent>
        <Grid display={ 'flex' } justifyContent = { 'space-between' }>
          <Grid>
            {
              ( citaActiva && citaActiva?.cita[count]?.estado )
                ?
              <Typography variant='h5'>
                {
                  ( citaActiva!.cita[count].estado === 'En-espera' )
                    ?
                  'En espera'
                    :
                  citaActiva!.cita[count].estado
                }
                <IconCondicionBarber estado = { citaActiva!.cita[count].estado } />
              </Typography>
                :
              <Typography variant='h5' p={ 2 }>Mis barberos</Typography>
            }
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

        <Box component={ 'form' } onSubmit = { handleSubmit }>

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
                      setFormValues = { setFormValues }
                      handleChangeBarber = { handleChangeBarber }
                      // minTime = { ( index > 0 ) ? formValues[index - 1].hora : moment() }
                      touchedBarbero = { ( touched?.cita && touched?.cita?.length > 0 ) ? touched.cita[index]?.barberId : false }
                      touchedHora = { ( touched?.cita && touched?.cita?.length > 0 ) ? touched.cita[index]?.hora?.hora : false }
                      touchedServicio = { ( touched?.cita && touched?.cita?.length > 0 ) ? touched.cita[index]?.servicio : false }
                      errors = { ( errors?.cita ) ? errors?.cita[index] : false }
                      formValues = { formValues }
                    />
                  </motion.div>
                }
              </Fragment>
            ))
          }
          <button id='buttonSubmitCita' hidden></button>
        </Box>

      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        {
          ( valueFiltrado.length !== formValues.length )
            &&
          <Button onClick={ handleSubmitCita } type = 'submit' fullWidth color = { 'inherit' } variant='contained'>
            {
              ( !citaActiva )
                ?
              'Crear cita'
                :
              'Actualizar cita'
            }
          </Button>
        }
      </DialogActions>
    </Dialog>
  )
}
