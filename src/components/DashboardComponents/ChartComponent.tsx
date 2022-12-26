import { Grid } from '@mui/material';
import { useState } from 'react';

import { BarChartContainer, CardInfoContainer, DialogDateRange, DialogFilter, PieChartContainer, SelectComponents, TableUsers } from "."

export const ChartComponent = () => {

  const [showDialog, setShowDialog] = useState(false)

  const [showDialogFilter, setShowDialogFilter] = useState(false)

  return (
    <Grid container display={ 'flex' }>

      <Grid px={ 1 } container display={ 'flex' }>
        <SelectComponents setShowDialogFilter = { setShowDialogFilter } setShowDialog = { setShowDialog } />
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

      <DialogFilter showDialog = { showDialogFilter } setShowDialog = { setShowDialogFilter } />
    </Grid>
  )
}
