import { Box, Paper } from '@mui/material';
import { SubirImagenContainer } from './';

export const SubirImagenGaleriaComponent = () => {
  return (
    <Box p={ 5 } elevation = { 10 } sx = {{ height: 'auto' }} component={ Paper }>
      <SubirImagenContainer />
    </Box>
  )
}
