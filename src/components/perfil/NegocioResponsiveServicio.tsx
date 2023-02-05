import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Servicio } from '../../interfaces/citasInterface';
import { Typography, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';

interface Props {
    servicio: Servicio[] | undefined
}

export const NegocioResponsiveServicio = ({ servicio }: Props) => {
  return (
    <>
        {
            servicio?.map(( e, index) => (
                <ListItem key={ e.servicio + index }>
                    <ListItemText 
                        primary={ 
                            <Grid display={ 'flex' } justifyContent = { 'space-between' } alignItems = { 'center' }>
                                <Typography color={ 'white' } variant='subtitle1'>Servicio: </Typography>

                                <Tooltip arrow title={ <Typography variant='subtitle1'>{ e.servicio }</Typography> } enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                                    <Typography color={ 'whitesmoke' } >{ e.servicio }</Typography>
                                </Tooltip>
                            </Grid>
                         } 
                        secondary={
                            <Grid display={ 'flex' } justifyContent = { 'space-between' } alignItems = { 'center' }>
                                <Typography color={ 'white' } variant='subtitle1'>Tiempo estimado: </Typography>

                                <Typography color={ 'whitesmoke' } >{ e.tiempo } { e.minHor }</Typography>
                            </Grid>
                        } 
                    />
                </ListItem>
            ))
        }
    </>
  )
}
