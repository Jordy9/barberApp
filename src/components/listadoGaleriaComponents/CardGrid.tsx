import { Grid } from '@mui/material';
import { useResponsive } from '../../hooks/useResponsive';
import { CardTemplate } from '../card';

export const CardGrid = () => {

    const arreglo: number[] = [ 1, 2, 3, 4, 5 ]

    const [ respWidth ] = useResponsive()

  return (
    <Grid item container mb={ ( respWidth < 991 ) ? 10 : 0 }>
        {
            arreglo.map(e => (
                <Grid item key={ e } p = { 1 } xs = { 12 } sm = { 6 } md = { 4 } lg = { 3 }>
                    <CardTemplate isUser = { true } />
                </Grid>
            ))
        }
    </Grid>
  )
}
