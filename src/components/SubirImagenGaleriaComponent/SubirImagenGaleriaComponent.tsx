import { Box, Paper } from '@mui/material';
import { SubirImagenContainer } from './';

export const SubirImagenGaleriaComponent = () => {
  return (
    <Box p={ 5 } mb = { 10 } elevation = { 10 } sx = {{ height: 'auto' }} component={ Paper }>
      <SubirImagenContainer />
    </Box>
  )
}
