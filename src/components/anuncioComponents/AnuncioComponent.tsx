import { AnuncioList } from './';
import { Button, Grid, Box } from '@mui/material';
import { Add } from "@mui/icons-material";

export const AnuncioComponent = () => {
  return (
    <Box p={ 1 } pb = { 10 }>
      <Grid display={ 'flex' } justifyContent = { 'end' }>
        <Button endIcon = { <Add /> } variant="contained" color="inherit">Crear Anuncio</Button>
      </Grid>
      <AnuncioList />
    </Box>
  )
}
