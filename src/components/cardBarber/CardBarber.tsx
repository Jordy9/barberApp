import { Grid } from "@mui/material"
import { CardTemplate } from "./"
import { useResponsive } from "../../hooks/useResponsive"

export const CardBarber = () => {

  const arreglo: number[] = [1, 2, 3, 4, 5]

  const [ respWidth ] = useResponsive()

  return (
    <Grid item container mb={ ( respWidth < 700 ) ? 10 : 0 }>
      {
        arreglo.map(e => (
          <Grid p = { 1 } xs = { 12 } sm = { 6 } md = { 4 } lg = { 3 }>
            <CardTemplate />
          </Grid>
        ))
      }
    </Grid>
  )
}
