import { Clear } from '@mui/icons-material';
import { ListItemText, Grid, Typography, IconButton, Box, LinearProgress } from '@mui/material';

interface ListTextProps {
    imagenName: string;
    porcentage: number;
    velocidad: number
}

export const ListText = ({ imagenName, porcentage, velocidad }: ListTextProps) => {
  return (
    <ListItemText
        primary={
        <Grid display={ 'flex' }>
            <Typography>{ imagenName }</Typography>
            <Typography ml={ 3 }>7.5 mb</Typography>

            <Grid sx={{ ml: 'auto' }}>
                <IconButton sx={{ p: 0 }}>
                    <Clear />
                </IconButton> 
            </Grid>
        </Grid>
        }
        secondary={
        <Grid sx={{ width: '100%' }}>
            <Box mt={ 1 }>
                <LinearProgress variant="determinate" value={ porcentage } />
            </Box>

            <Box mt={ 1 } display= { 'flex' } justifyContent = { 'space-between' }>
                <Typography>{ porcentage }% subido</Typography>
                <Typography>{ velocidad }KB/seg</Typography>
            </Box>
        </Grid>
        }
    />
  )
}
