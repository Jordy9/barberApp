import { Grid } from '@mui/material';
import { useState } from 'react';

import { BarChartContainer, CardInfoContainer, ClientStatus, DialogDateRange, DialogFilter, PieChartContainer, SelectComponents, ServiceStar, StartsInfo, TableUsers, TimeStar } from "."
import { getCardsInfo, getPreferTime, getServiceStars, getStars, getTimeEarly } from '../../helpers/getBarbersStastics';
import { useAppSelector } from '../../store/hooks';

export const ChartComponent = () => {

  const [showDialog, setShowDialog] = useState(false)

  const [showDialogFilter, setShowDialogFilter] = useState(false)

  const { usuarioActivo } = useAppSelector( state => state.auth );

  const { negocio } = useAppSelector( state => state.ng );

  const { cita } = useAppSelector( state => state.ct );

  const { rating } = useAppSelector( state => state.rt );

  const ratingSum = getStars(rating)

  const minTime = getTimeEarly(cita)

  const preferTime = getPreferTime(cita)

  const cardInfo = getCardsInfo(cita)

  const negocioFilt = negocio.find( ng => ng.barberId === usuarioActivo?._id )

  const sumService = getServiceStars(negocioFilt, cita)

  return (
    <Grid container display={ 'flex' }>

      <Grid px={ 1 } container display={ 'flex' }>
        <SelectComponents setShowDialogFilter = { setShowDialogFilter } setShowDialog = { setShowDialog } />
      </Grid>
      
      <CardInfoContainer info = { cardInfo } sumService = { sumService[0] } cita = { cita } />

      <Grid p = { 1 } xs = { 12 } sm = { 6 }>
        <StartsInfo ratingSum = { ratingSum } />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 6 }>
        <ClientStatus ratingSum = { ratingSum } />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 12 } lg = { 6 }>
        <ServiceStar sumService = { sumService } negocioFilt = { negocioFilt } />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 6 } lg = { 3 }>
        <TimeStar time={ minTime } title='Esta es la hora más temprana a la que tus clientes hacen citas' />
      </Grid>

      <Grid p = { 1 } xs = { 12 } sm = { 6 } lg = { 3 }>
        <TimeStar time={ preferTime } title='Esta es la hora preferida preferida por tus clientes para ser atendidos' />
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
