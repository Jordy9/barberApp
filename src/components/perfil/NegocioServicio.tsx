import { Servicio } from "../../interfaces/negocioInterface";
import { Typography, Grid, Chip, Tooltip } from '@mui/material';

interface Props {
    title: string,
    servicio: Servicio[] | undefined
}

export const NegocioServicio = ({ title, servicio }: Props) => {
  return (
    <>
        <Typography textAlign={ 'center' }>{ title }</Typography>
        <hr />

        {
            servicio?.map( ( e, index ) => (
                <Grid key={ e.servicio + index } my={ 2 } p = { 2 } sx={{ border: '1px solid', borderRadius: '20px', backgroundColor: '#121212' }}>

                    <Grid mb = { 1 } display={ 'flex' } justifyContent = { 'space-between' } sx = {{ maxWidth: '300px', whiteSpace: 'nowrap' }}>
                        <Typography variant="subtitle1">
                            Servicio: 
                        </Typography>

                        <Tooltip arrow title={ <Typography variant='subtitle1'>{ e.servicio }</Typography> } enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                            <Chip sx={{ overflow: 'auto' }} label={ e.servicio } variant="outlined" />
                        </Tooltip>
                        
                    </Grid>

                    <Grid mb = { 1 } display={ 'flex' } justifyContent = { 'space-between' }>
                        <Typography variant="subtitle1">
                            Tiempo estimado: 
                        </Typography>

                        <Chip label={ <Typography>{ e.tiempo } { e.minHor }</Typography> } variant="outlined" />
                    </Grid>
                </Grid>
            ))
        }

    </>
  )
}
