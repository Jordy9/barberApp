import { forwardRef, Dispatch, SetStateAction, useState, ChangeEvent } from 'react';

import { styled } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Typography, Grid, IconButtonProps, Box } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useResponsive } from '../../hooks/useResponsive';
import Collapse from '@mui/material/Collapse';
import { Horario, HorarioList, MisServicios, MisServiciosList, Ubicacion, UbicacionList } from './';

import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { createNegocio } from '../../store/negocio/thunk';

interface loginProps {
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

  interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  let serviciosList: object[] = []
  let ubicacionesList: object[] = []
  let horariosList: object[] = []

export const DialogNegocio = ({ showDialog2, setShowDialog2 }: loginProps) => {

  const [showList, setShowList] = useState('')

  const handleClose = () => {
    if ( !showList ) {
        setShowDialog2(false)
    } else {
        setShowList('')
    }
  }

  const [ respWidth ] = useResponsive()

  const [expanded, setExpanded] = useState(true);

  const [expanded2, setExpanded2] = useState(false);
  
  const [expanded3, setExpanded3] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };

  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };

  const dispatch = useAppDispatch();

  const { usuarioActivo } = useAppSelector( state => state.auth );

  const [servicios, setServicios] = useState(
    {
      servicio: '',
      tiempo: '10',
      minHor: 'Minutos',
    }
  )

  const addServicio = () => {
    serviciosList.push(servicios)

    setServicios(
      {
        servicio: '',
        tiempo: '',
        minHor: 'Minutos',
      }
    )
  }

  const [ubicaciones, setUbicaciones] = useState(
    {
      ubicacion: '',
      link: ''
    }
  )

  const addUbicaciones = () => {
    ubicacionesList.push(ubicaciones)
    setUbicaciones(
      {
        ubicacion: '',
        link: ''
      }
    )
  }

  const [horarios, setHorarios] = useState(
    {
      horario: '',
    }
  )

  const addHorarios = () => {
    horariosList.push(horarios)
    setHorarios(
      {
        horario: '',
      }
    )
  }

  const {handleSubmit, getFieldProps, touched, errors} = useFormik({
    initialValues: {
      servicios: serviciosList,
      ubicacion: ubicacionesList,
      horasClientes: horariosList
    },
    enableReinitialize: true,
    onSubmit: ({ servicios, ubicacion, horasClientes }) => {
      const negocio = { barberId: usuarioActivo?._id, servicios, ubicacion, horasClientes }

      dispatch( createNegocio(negocio) )

    },
    validationSchema: Yup.object({
    })
  })

  const handleButtonSubmit = () => {
    document.getElementById('buttonNegocioSubmit')?.click()
  }

  return (
    <Dialog
      open={ showDialog2 }
      fullWidth
      fullScreen = { ( respWidth < 600 ) }
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
      <DialogTitle>
        <IconButton onClick={ handleClose }>
          <ArrowBackIos />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {
            ( !showList )
              &&
            <Box component={ 'form' } noValidate onSubmit={ handleSubmit }>
                <Grid pb={ 1 }>
                <Grid component={ 'div' } onClick = { handleExpandClick } display={ 'flex' } alignItems = { 'center' } justifyContent = { 'space-between' }>
                    <Typography>Mis servicios</Typography>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </Grid>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Grid py={ 1 }>
                        <MisServicios
                          servicio = { servicios } 
                          setServicios = { setServicios }
                          addServicio = { addServicio }
                        />
                        <Button onClick={ () => setShowList('Servicios') } sx={{ my: 2 }} fullWidth variant='contained' color='inherit'>Ver listado de servicios</Button>
                    </Grid>
                </Collapse>
                </Grid>
                <Grid pb={ 1 }>

                <Grid component={ 'div' } onClick = { handleExpandClick2 } display={ 'flex' } alignItems = { 'center' } justifyContent = { 'space-between' }>
                    <Typography>Ubicación</Typography>
                    <ExpandMore
                    expand={expanded2}
                    onClick={handleExpandClick2}
                    aria-expanded={expanded2}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </Grid>
                <Collapse in={expanded2} timeout="auto" unmountOnExit>
                    <Grid py={ 1 }>
                        <Ubicacion 
                          ubicaciones = { ubicaciones }
                          setUbicaciones = { setUbicaciones }
                          addUbicaciones = { addUbicaciones }
                        />
                        <Button onClick={ () => setShowList('Ubicacion') } sx={{ my: 2 }} fullWidth variant='contained' color='inherit'>Ver listado de ubicaciones</Button>
                    </Grid>
                </Collapse>
                </Grid>

                <Grid pb={ 1 }>
                <Grid component={ 'div' } onClick = { handleExpandClick3 } display={ 'flex' } alignItems = { 'center' } justifyContent = { 'space-between' }>
                    <Typography>Horario</Typography>
                    <ExpandMore
                    expand={expanded3}
                    onClick={handleExpandClick3}
                    aria-expanded={expanded3}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </ExpandMore>
                </Grid>
                <Collapse in={expanded3} timeout="auto" unmountOnExit>
                    <Grid py={ 1 }>
                        <Horario
                          horarios = { horarios }
                          setHorarios = { setHorarios }
                          addHorarios = { addHorarios }
                        />
                        <Button onClick={ () => setShowList('Horario') } sx={{ my: 2 }} fullWidth variant='contained' color='inherit'>Ver listado de horarios</Button>
                    </Grid>
                </Collapse>
                </Grid>

                <button id='buttonNegocioSubmit' hidden></button>
            </Box>
                
        }
        
        {
            ( showList === 'Servicios' )
                &&
            <MisServiciosList setShowList = { setShowList } />
        }

        {
            ( showList === 'Ubicacion' )
                &&
            <UbicacionList setShowList = { setShowList } />
        }

        {
            ( showList === 'Horario' )
                &&
            <HorarioList setShowList = { setShowList } />
        }

      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button fullWidth onClick={ handleButtonSubmit } color = { 'inherit' } variant='contained'>Guardar cambios</Button>
      </DialogActions>
    </Dialog>
  )
}
