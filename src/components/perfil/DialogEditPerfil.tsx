import { forwardRef, Dispatch, SetStateAction, useState } from 'react';

import { styled } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Box, Typography, Grid, Avatar, IconButtonProps } from '@mui/material';
import { TransitionProps } from "@mui/material/transitions";

import IconButton from '@mui/material/IconButton';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useResponsive } from '../../hooks/useResponsive';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';

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

export const DialogEditPerfil = ({ showDialog, setShowDialog }: loginProps) => {

  const handleClose = () => {
    setShowDialog(false)
  }

  const [ respWidth ] = useResponsive()

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Dialog
      open={ showDialog }
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
        <Typography mb={ 1 } variant='h5'>Portada</Typography>
        <Box>
          <img 
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=400&fit=crop&auto=format" 
            alt="" 
            style = {{ width: '100%', height: '45vh', objectFit: 'cover', borderRadius: '12px' }}
            loading="lazy"
          />
        </Box>

        <Typography my={ 1 } variant='h5'>Portada</Typography>

        <Grid container display={ 'flex' } alignItems = { 'center' } justifyContent = { 'center' } sx = {{ width: '100%' }}>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 'auto', height: 'auto' }}
          />
        </Grid>

        <Typography my={ 2 } variant='h5'>Breve descripción</Typography>

        <Box>
          <TextField label = { 'Descripción' } value = { `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nisi beatae exercitationem consectetur recusandae numquam necessitatibus, magni aut, libero consequatur cumque distinctio aperiam sint ipsum veniam impedit perspiciatis. Nobis, distinctio.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nisi beatae exercitationem consectetur recusandae numquam necessitatibus, magni aut, libero consequatur cumque distinctio aperiam sint ipsum veniam impedit perspiciatis. Nobis, distinctio.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nisi beatae exercitationem consectetur recusandae numquam necessitatibus, magni aut, libero consequatur cumque distinctio aperiam sint ipsum veniam impedit perspiciatis. Nobis, distinctio.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nisi beatae exercitationem consectetur recusandae numquam necessitatibus, magni aut, libero consequatur cumque distinctio aperiam sint ipsum veniam impedit perspiciatis. Nobis, distinctio.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nisi beatae exercitationem consectetur recusandae numquam necessitatibus, magni aut, libero consequatur cumque distinctio aperiam sint ipsum veniam impedit perspiciatis. Nobis, distinctio.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus nisi beatae exercitationem consectetur recusandae numquam necessitatibus, magni aut, libero consequatur cumque distinctio aperiam sint ipsum veniam impedit perspiciatis. Nobis, distinctio.` } variant="outlined" sx={{ width: '100%' }} multiline rows={ 5 } />
        </Box>

        <Box>
          <Typography my={ 1 } variant='h5'>Cómo llegar</Typography>
          <TextField label = { 'Nombre de la calle' } helperText = { 'Aqui proporcionarás la dirección: calle tal esquina tal' } fullWidth />
          <TextField label = { 'Ubicación' } helperText = { 'Aqui proporcionarás un link de google map con la ubicación de la barbería donde ofreces tus servicios' } fullWidth />
        </Box>

      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button fullWidth onClick={ handleClose } color = { 'inherit' } variant='contained'>Guardar cambios</Button>
      </DialogActions>
    </Dialog>
  )
}
