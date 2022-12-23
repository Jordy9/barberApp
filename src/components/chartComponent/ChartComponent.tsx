import { Button, Grid } from '@mui/material';
import { useState } from 'react';

import { BarChartContainer, CardInfoContainer, DialogDateRange, PieChartContainer, SelectComponents, TableUsers } from "./"

export const ChartComponent = () => {

  const [showDialog, setShowDialog] = useState(false)

  return (
    <Grid container display={ 'flex' }>

      <Grid container display={ 'flex' }>
        <SelectComponents />
        <Button onClick={ () => setShowDialog(true) }>Abrir</Button>
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
      
      <DialogDateRange showDialog = { showDialog } setShowDialog = { setShowDialog } />
    </Grid>
  )
}
