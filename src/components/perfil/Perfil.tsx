import { Box, Grid, IconButton, Typography, Button } from '@mui/material';
import { ButtonsSpace, Descripcion, DialogEditPerfil, DialogNegocio, FotoPerfil, NegocioContainer, Portada } from "./"
import { useResponsive } from '../../hooks/useResponsive';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { Edit } from '@mui/icons-material';
import { useState } from 'react';

export const Perfil = ({ isUser = false }) => {

  const [ respWidth ] = useResponsive()

  const navigate = useNavigate()

  const [showDialog, setShowDialog] = useState(false)

  const [showDialog2, setShowDialog2] = useState(false)

  return (
    <>
      <IconButton onClick={ () => navigate(-1) } sx={{ position: 'absolute', zIndex: 1 }}>
        <ArrowBackIosIcon />
      </IconButton>

      <Box px={ ( respWidth ) > 991 ? 10 : 0 } pb = { ( respWidth ) > 991 ? 5 : 10 }>

        <Portada />

        {
          ( isUser )
            &&
          <Grid mb={ 1 } px={ ( respWidth ) > 991 ? 4 : 0 } display={ 'flex' } justifyContent = { 'end' }>
            <Button onClick={ () => setShowDialog(true) } endIcon = { <Edit /> } variant='contained' color='inherit'>Editar perfil</Button>
          </Grid>
        }

        <Grid display={ 'flex' } alignItems = { 'center' } container sx = {{ height: '25vh' }}>

          <Grid px={ ( respWidth ) > 991 ? 4 : 0 } item xs = { 6 } sm = { 5 } md = { 3 } xl = { 3 }>
            <FotoPerfil />
            <Typography textAlign={ 'center' } >Fulano de tal</Typography>
          </Grid>

          <Grid px={ ( respWidth ) > 991 ? 4 : 0 } item xs = { 6 } sm = { 7 } md = { 9 } xl = { 9 }>
            <Descripcion />
          </Grid>

        </Grid>

        {
          ( !isUser )
            &&
          <Grid px={ ( respWidth ) > 991 ? 4 : 0 } my = { 1 }>
            <ButtonsSpace />
          </Grid>
        }

        {
          ( isUser )
            &&
          <Grid my={ 1 } px={ ( respWidth ) > 991 ? 4 : 0 } display={ 'flex' } justifyContent = { 'end' }>
            <Button onClick={ () => setShowDialog2(true) } endIcon = { <Edit /> } variant='contained' color='inherit'>Editar información de mi negocio</Button>
          </Grid>
        }
        
        <Grid my = { 1 }>
          <NegocioContainer />
        </Grid>

        <DialogEditPerfil showDialog = { showDialog } setShowDialog = { setShowDialog } />

        <DialogNegocio showDialog2 = { showDialog2 } setShowDialog2 = { setShowDialog2 } />
      </Box>
    </>
  )
}
