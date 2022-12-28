import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { DialogCambiarImagen } from '../listadoGaleriaComponents';

export const CardHeaderTemplateUser = () => {

  const [ShowDialog, setShowDialog] = useState(false)

  return (
    <Box p={ 2 } display={ 'flex' } justifyContent = { 'space-between' }>
      <Button onClick={ () => setShowDialog(true) } color='inherit' variant='contained'>Cambiar imagen</Button>
      <Button color='inherit' variant='contained'>Eliminar</Button>

      <DialogCambiarImagen showDialog = { ShowDialog } setShowDialog = { setShowDialog } />
    </Box>
  )
}
