import { Grid } from '@mui/material';

import { BarChartContainer, CardInfoContainer, PieChartContainer, SelectComponents, TableUsers } from "./"

export const ChartComponent = () => {
  return (
    <Grid container display={ 'flex' }>

      <Grid container display={ 'flex' }>
        <SelectComponents />
      </Grid>
      
      <CardInfoContainer />

      <Grid p = { 1 } xs = { 12 } sm = { 6 }>
        <BarChartContainer />
      </Grid>

      {/* <Grid p = { 1 } xs = { 12 } sm = { 6 }>
        <PieChartContainer />
      </Grid> */}

      <Grid p = { 1 } xs = { 12 } sm = { 6 }>
        <TableUsers />
      </Grid>
      
    </Grid>
  )
}
