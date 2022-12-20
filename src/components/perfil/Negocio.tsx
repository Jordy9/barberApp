import { Chip, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system";

interface Props {
    title: string,
    descripcion: string
}

export const Negocio = ({ title, descripcion }: Props) => {

    const handleClick = () => {
        null
    };

    const arreglo: number[] = [ 1, 2, 3, 4, 6, 7, 8, 4 ,8 ]

  return (
    <>
        <Typography textAlign={ 'center' }>{ title }</Typography>
        <hr />

        {
            arreglo.map(e => (
                <Grid my={ 2 } item>
                    <Chip label={ descripcion } variant="outlined" onClick={handleClick} />
                </Grid>
            ))
        }

    </>
  )
}
