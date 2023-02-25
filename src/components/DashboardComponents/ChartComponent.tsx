import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';

import { BarChartContainer, CardInfoContainer, ClientStatus, DialogDateRange, DialogFilter, PieChartContainer, SelectComponents, ServiceStar, StartsInfo, TableUsers, TimeStar } from "."
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getdashboardinfo } from '../../store/socket/thunk';

export const ChartComponent = () => {

  const dispatch = useAppDispatch();

  const [showDialog, setShowDialog] = useState(false)

  const [showDialogFilter, setShowDialogFilter] = useState(false)

  const { cita } = useAppSelector( state => state.ct );

  const { rating } = useAppSelector( state => state.rt );

  useEffect(() => {
    dispatch( getdashboardinfo() )
  }, [])
  
  return (
    <Grid container display={ 'flex' }>

      <Grid px={ 1 } container display={ 'flex' }>
        <SelectComponents setShowDialogFilter = { setShowDialogFilter } setShowDialog = { setShowDialog } />
      </Grid>
      
      <CardInfoContainer info = { rating?.cardInfo || [0, 0, 0, 0] } sumService = { rating?.sumService[0] } cita = { cita } />

      <Grid p = { 1 } xs = { 12 } sm = { 6 }>
        <StartsInfo ratingSum = { rating?.ratingSum } />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 6 }>
        <ClientStatus ratingSum = { rating?.ratingSum } />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 12 } lg = { 6 }>
        <ServiceStar sumService = { rating?.sumService } />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 6 } lg = { 3 }>
        <TimeStar time={ rating?.minTime } title='Esta es la hora más temprana a la que tus clientes hacen citas' />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 6 } lg = { 3 }>
        <TimeStar time={ rating?.preferTime } title='Esta es la hora preferida preferida por tus clientes para ser atendidos' />
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
