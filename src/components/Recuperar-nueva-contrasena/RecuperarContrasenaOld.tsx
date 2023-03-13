import { Box, Button, IconButton, Paper, Typography } from '@mui/material';
import { FormComponent } from '../formSesion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

export const RecuperarContrasenaOld = () => {

  const navigate = useNavigate()

  return (
    <>
      <IconButton onClick={ () => navigate(-1) } sx={{ position: 'absolute', zIndex: 1 }}>
        <ArrowBackIosIcon />
      </IconButton>

      <Box display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' } sx={{ height: '82vh' }}>

        <Box p = { 3 } component={ Paper } elevation = { 4 } sx = {{ width: '320px', height: '320px', borderRadius: '11px' }}>
          <Typography variant='h5' textAlign={ 'center' }>Recuperar contraseña</Typography>
          <Typography my = { 3 } variant='subtitle2' textAlign={ 'center' }>Se enviara un link a tu correo para recuperar tu contraseña</Typography>

          <FormComponent
            name = ''
            mb={ 3 }
            label='Correo electrónico' 
            Adornment = { true }
            Icon = { 'Arroba' }
            required = { true }
            helperText = { 'No compartas tu correo con nadie' }
            type = { 'email' }
          />

          <Button fullWidth variant='contained' color='inherit'>Enviar</Button>
        </Box>
      </Box>
    </>
  )
}
