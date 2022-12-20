import { Box, Grid, IconButton, Typography } from '@mui/material';
import { ButtonsSpace, Descripcion, FotoPerfil, NegocioContainer, Portada } from "./"
import { useResponsive } from '../../hooks/useResponsive';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

export const Perfil = () => {

  const [ respWidth ] = useResponsive()

  const navigate = useNavigate()

  return (
    <>
      <IconButton onClick={ () => navigate(-1) } sx={{ position: 'absolute', zIndex: 1 }}>
        <ArrowBackIosIcon />
      </IconButton>

      <Box px={ ( respWidth ) > 991 ? 10 : 0 } pb = { ( respWidth ) > 991 ? 5 : 10 }>

        <Portada />

        <Grid display={ 'flex' } alignItems = { 'center' } container sx = {{ height: '25vh' }}>

          <Grid px={ ( respWidth ) > 991 ? 4 : 0 } item xs = { 6 } sm = { 5 } md = { 3 } xl = { 3 }>
            <FotoPerfil />
            <Typography textAlign={ 'center' } >Fulano de tal</Typography>
          </Grid>

          <Grid px={ ( respWidth ) > 991 ? 4 : 0 } item xs = { 6 } sm = { 7 } md = { 9 } xl = { 9 }>
            <Descripcion />
          </Grid>

        </Grid>

        <Grid px={ ( respWidth ) > 991 ? 4 : 0 } my = { 1 }>
          <ButtonsSpace />
        </Grid>
        
        <Grid my = { 1 }>
          <NegocioContainer />
        </Grid>

      </Box>
    </>
  )
}
