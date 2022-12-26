import { forwardRef, Dispatch, SetStateAction, useState } from 'react';

import { styled } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Grid, Typography, IconButtonProps, Collapse } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import IconButton from '@mui/material/IconButton';
import { ArrowBackIos } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { CustomDateRange } from './';

interface loginProps {
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

  const arregloFtiempo = [ 'Ayer', 'Hoy', 'Semana pasada', 'Esta semana', 'Este mes', 'Mes pasado', 'Este año', 'Año pasado' ]

  const arregloFHora = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

  const arregloFServicios = [ 'Recortada', 'Cerquillo', 'Limpieza de cejas' ]

export const DialogFilter = ({ showDialog, setShowDialog }: loginProps) => {

  const handleClose = () => {
    setShowDialog(false)
  }

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Dialog
      open={ showDialog }
      fullWidth
      fullScreen
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
        <Grid pb={ 1 }>
          <Grid component={ 'div' } onClick = { handleExpandClick } display={ 'flex' } alignItems = { 'center' } justifyContent = { 'space-between' }>
            <Typography>Filtrar por rango de fecha</Typography>
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
              <CustomDateRange />
            </Grid>
          </Collapse>
        </Grid>

        <Grid>
          <Typography>Filtrar por fechas predeterminadas</Typography>
          <Grid py={ 1 }>
            {
              arregloFtiempo.map( e => (
                <Button size='small' sx = {{ my: 1, mx: 0.5 }} variant={ 'contained' } color = { 'inherit' } key={ e } >{ e }</Button>
              ))
            }
          </Grid>
        </Grid>

        <Grid>
          <Typography>Filtrar por hora</Typography>
          <Grid py={ 1 } container>
            {
              arregloFHora.map( e => (
                <Button size='small' sx = {{ my: 1, mx: 0.5 }} variant={ 'contained' } color = { 'inherit' } key={ e } >{ e }</Button>
              ))
            }
          </Grid>
        </Grid>

        <Grid>
          <Typography>Filtrar por Servicio</Typography>
          <Grid py={ 1 }>
            {
              arregloFServicios.map( e => (
                <Button sx = {{ my: 1, mx: 0.5 }} size='small' variant={ 'contained' } color = { 'inherit' } key={ e } >{ e }</Button>
              ))
            }
          </Grid>
        </Grid>
      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Cerrar</Button>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Continuar</Button>
      </DialogActions>
    </Dialog>
  )
}
