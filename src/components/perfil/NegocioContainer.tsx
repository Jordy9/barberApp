import { Box, Grid } from "@mui/material"
import { Negocio, NegocioResponsive } from './';
import { useResponsive } from '../../hooks/useResponsive';

export const NegocioContainer = () => {

  const [ respWidth ] = useResponsive()

  return (
    <Box sx={{ border: '1px solid', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', height: '40vh', overflow: 'auto' }}>

      {
        ( respWidth > 991 )
          ?
        <Grid px={ 10 } py = { 2 } display={ 'center' } justifyContent = { 'space-between' }>

          <Grid>
            <Negocio title="Mis servicios" descripcion="Recortada 300" />
          </Grid>

          <Grid>
            <Negocio title="Ubicación" descripcion="Estoy ubicado en tal lugar de tal barberia" />
          </Grid>

          <Grid>
            <Negocio title="Horario" descripcion="Lunes a viernes de 8 am a 5 pm" />
          </Grid>

        </Grid>
          :
        <NegocioResponsive />
      }
    </Box>
  )
}
