import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography, Button, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Ubicacion } from '../../interfaces/negocioInterface';
import { LocationOn } from '@mui/icons-material';

interface Props {
    ubicacion: Ubicacion[] | undefined
}

export const NegocioResponsiveUbicacion = ({ ubicacion }: Props) => {

    const handleClick = ( url: string ) => {
        window.open(url)
    };

  return (
    <>
        {
            ubicacion?.map(( e, index) => (
                <ListItem key={ e.link + index }>
                    <ListItemText 
                        primary={ 
                            <Grid mb = { 1 }>
                                <Typography color={ 'white' } variant='subtitle1'>Ubicación: </Typography>

                                <Tooltip arrow title={ <Typography variant='subtitle1'>{ e.ubicacion }</Typography> } enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                                    <Typography 
                                        sx={{ 
                                            display: '-webkit-box', 
                                            overflow: 'hidden', 
                                            WebkitBoxOrient: 'vertical', 
                                            WebkitLineClamp: 2 
                                        }}
                                        color={ 'whitesmoke' } >
                                            { e.ubicacion }
                                    </Typography>
                                </Tooltip>

                            </Grid>
                         } 
                        secondary={
                            <Grid mb = { 1 } display = { 'flex' } justifyContent = { 'center' } alignItems = { 'center' }>

                                <Button onClick={ () => handleClick(e.link) } variant="contained" sx={{ color: 'white' }} endIcon = { <LocationOn color="warning" /> }>
                                    ¿Cómo llegar?: 
                                </Button>
                                                
                            </Grid>
                        } 
                    />
                </ListItem>
            ))
        }
    </>
  )
}
