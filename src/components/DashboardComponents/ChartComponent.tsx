import { Grid } from '@mui/material';
import { useState } from 'react';

import { BarChartContainer, CardInfoContainer, ClientStatus, DialogDateRange, DialogFilter, PieChartContainer, SelectComponents, ServiceStar, StartsInfo, TableUsers, TimeStar } from "."

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
        <StartsInfo />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 6 }>
        <ClientStatus />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 12 } lg = { 6 }>
        <ServiceStar />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 6 } lg = { 3 }>
        <TimeStar time='04:50 pm' title='Esta es la hora más temprana a la que tus clientes hacen citas' />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 6 } lg = { 3 }>
        <TimeStar time='04:50 pm' title='Esta es la hora preferida preferida por tus clientes para ser atendidos' />
      </Grid>
      
      {/* <Grid p = { 1 } xs = { 6 } sm = { 6 } md = { 6 } lg = { 3 }>
        <StartsInfo />
      </Grid> */}

      {/* <Grid p = { 1 } xs = { 12 } sm = { 6 }>
        <BarChartContainer />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 6 }>
        <PieChartContainer />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 12 }>
        <TableUsers />
      </Grid> */}
      
      <DialogDateRange showDialog = { showDialog } setShowDialog = { setShowDialog } />

      <DialogFilter showDialog = { showDialogFilter } setShowDialog = { setShowDialogFilter } />
    </Grid>
  )
}
