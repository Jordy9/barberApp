import { LocationOn } from "@mui/icons-material";
import { Chip, Grid, Typography, Button, Box, Tooltip } from '@mui/material';
import { Ubicacion } from "../../interfaces/negocioInterface";

interface Props {
    title: string,
    ubicacion: Ubicacion[] | undefined
}

export const NegocioUbicacion = ({ title, ubicacion }: Props) => {

    const handleClick = ( url: string ) => {
        window.open(url)
    };

  return (
    <>
        <Typography textAlign={ 'center' }>{ title }</Typography>
        <hr />

        {
            ubicacion?.map( ( e, index ) => (
                <Grid key={ e.link + index } my={ 2 } p = { 2 } sx={{ border: '1px solid', borderRadius: '20px', backgroundColor: '#121212' }}>

                    <Grid mb = { 1 } display={ 'flex' } justifyContent = { 'space-between' } alignItems = { 'center' } sx = {{ maxWidth: '300px', whiteSpace: 'nowrap' }}>
                        <Typography variant="subtitle1">
                            Ubicación:
                        </Typography>

                        <Tooltip arrow title={ <Typography variant='subtitle1'>{ e.ubicacion }</Typography> } enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                            <Chip label={ e.ubicacion } variant="outlined" sx={{ overflow: 'auto' }} />
                        </Tooltip>

                    </Grid>

                    <Grid mb = { 1 } display = { 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>

                        <Button onClick={ () => handleClick(e.link) } variant="contained" color="inherit" endIcon = { <LocationOn color="warning" /> }>
                            ¿Cómo llegar?: 
                        </Button>
                                                
                    </Grid>
                </Grid>
            ))
        }

    </>
  )
}
