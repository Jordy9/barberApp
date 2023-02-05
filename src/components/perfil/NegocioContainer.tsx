import { Box, Grid } from "@mui/material"
import { NegocioResponsive, NegocioServicio, NegocioUbicacion, NegocioHorario } from './';
import { useResponsive } from '../../hooks/useResponsive';
import { useAppSelector } from "../../store/hooks";

export const NegocioContainer = () => {

  const { usuarioActivo } = useAppSelector( state => state.auth );

  const { negocio } = useAppSelector( state => state.ng );

  const negocioFilt = negocio.find( e => e.barberId === usuarioActivo?._id )

  const [ respWidth ] = useResponsive()

  return (
    <Box sx={{ border: '1px solid', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px', height: '40vh', overflow: 'auto' }}>

      {
        ( respWidth > 991 )
          ?
        <Grid px={ ( respWidth > 1205 ) ? 10 : 2 } py = { 2 } display={ 'center' } justifyContent = { 'space-between' }>

          <Grid>
            <NegocioServicio title="Mis servicios" servicio = { negocioFilt?.servicios } />
          </Grid>

          <Grid mx={ 2 }>
            <NegocioUbicacion title="Ubicación" ubicacion = { negocioFilt?.ubicacion } />
          </Grid>

          <Grid>
            <NegocioHorario title="Horario" horario = { negocioFilt?.horasClientes } />
          </Grid>

        </Grid>
          :
        <NegocioResponsive />
      }
    </Box>
  )
}
