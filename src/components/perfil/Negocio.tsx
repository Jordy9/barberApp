import { Directions } from "@mui/icons-material";
import { Chip, Grid, Typography } from "@mui/material"

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
                    {
                        ( title === 'Ubicación')
                            ?
                        <Chip label={ descripcion } variant="outlined" onClick={handleClick} icon = { <Directions /> } />
                            :
                        <Chip label={ descripcion } variant="outlined" onClick={handleClick} />
                    }
                </Grid>
            ))
        }

    </>
  )
}
