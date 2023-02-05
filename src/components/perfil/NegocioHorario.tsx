import { horasClientes } from "../../interfaces/negocioInterface";
import { Typography, Grid, Chip, Tooltip } from '@mui/material';

interface Props {
    title: string,
    horario: horasClientes[] | undefined
}

export const NegocioHorario = ({ title, horario }: Props) => {
  return (
    <>
        <Typography textAlign={ 'center' }>{ title }</Typography>
        <hr />

        {
            horario?.map( ( e, index ) => (
                <Grid key={ e.horario + index } my={ 2 } sx = {{ maxWidth: '300px', whiteSpace: 'nowrap' }}>
                    <Tooltip arrow title={ <Typography variant='subtitle1'>{ e.horario }</Typography> } enterDelay={ 500 } enterNextDelay = { 200 } enterTouchDelay = { 500 } leaveDelay = { 200 }>
                        <Chip sx={{ backgroundColor: '#121212', overflow: 'auto' }} label={ e.horario } variant="outlined" />
                    </Tooltip>
                </Grid>
            ))
        }

    </>
  )
}
