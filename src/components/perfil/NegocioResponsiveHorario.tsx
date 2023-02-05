import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography, Tooltip } from '@mui/material';
import Grid from '@mui/material/Grid';
import { horasClientes } from '../../interfaces/negocioInterface';

interface Props {
    horario: horasClientes[] | undefined
}

export const NegocioResponsiveHorario = ({ horario }: Props) => {
  return (
    <>
        {
            horario?.map(( e, index) => (
                <ListItem key={ e.horario + index }>
                    <ListItemText 
                        primary={ 
                            <Grid>
                                <Typography color={ 'white' } variant='subtitle1'>Horario: </Typography>

                                <Tooltip arrow title={ <Typography variant='subtitle1'>{ e.horario }</Typography> } enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                                    <Typography 
                                        sx={{ 
                                            display: '-webkit-box', 
                                            overflow: 'hidden', 
                                            WebkitBoxOrient: 'vertical', 
                                            WebkitLineClamp: 2 
                                        }}
                                        color={ 'whitesmoke' } >
                                            { e.horario }
                                    </Typography>
                                </Tooltip>

                            </Grid>
                         }
                    />
                </ListItem>
            ))
        }
    </>
  )
}
