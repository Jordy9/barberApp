import { Box, Button, IconButton, Paper, Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { FormComponent } from "../formSesion";
import { useNavigate } from "react-router-dom";

export const NuevaContrasenaNew = () => {

    const navigate = useNavigate()

  return (
    <>
      <IconButton onClick={ () => navigate('/Inicio', { replace: true }) } sx={{ position: 'absolute', zIndex: 1 }}>
        <ArrowBackIosIcon />
      </IconButton>

      <Box display={ 'flex' } justifyContent = { 'center' } alignItems = { 'center' } sx={{ height: '82vh' }}>

        <Box p = { 3 } component={ Paper } elevation = { 4 } sx = {{ width: '320px', height: 'auto', borderRadius: '11px' }}>
          <Typography my = { 3 } variant='h5' textAlign={ 'center' }>Nueva contraseña</Typography>

          <FormComponent
            name = ''
            mb={ 3 }
            label='Contraseña' 
            Adornment = { true }
            Icon = { 'Eye' }
            required = { true }
            helperText = { 'No compartas tu contraseña con nadie' }
            type = { 'password' }
          />

          <FormComponent
            name = ''
            mb={ 3 }
            label='Confirmar contraseña' 
            Adornment = { true }
            Icon = { 'Eye' }
            required = { true }
            type = { 'password' }
          />

          <Button fullWidth variant='contained' color='inherit'>Guardar</Button>
        </Box>
      </Box>
    </>
  )
}
