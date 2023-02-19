import { FactCheck, Timer, Cancel, ContentCut  } from '@mui/icons-material';
import { Grid } from '@mui/material';

import Image1 from '../../assets/Image1.jpg'
import Image2 from '../../assets/Image2.jpg'
import Image3 from '../../assets/Image3.jpg'
import Image4 from '../../assets/Image4.jpg'

import { CardInfoProps } from '../../interfaces/interfaces';

import { CardInfo } from '.';
import { CitasInterfaceCita } from '../../interfaces/citasInterface';

const arregloCardInfo: CardInfoProps[] = [
  {
    title: 'Citas completas',
    actual: 70,
    total: 100,
    backgroundImage: Image1,
    Icon: () => <FactCheck />
  },
  {
    title: 'Citas en espera',
    actual: 70,
    total: 100,
    backgroundImage: Image2,
    Icon: () => <ContentCut />,
    image: 'https://mui.com/static/images/avatar/5.jpg',
    name: 'Fulano'
  },
  {
    title: 'Citas canceladas',
    actual: 70,
    total: 100,
    backgroundImage: Image3,
    Icon: () => <Cancel />
  },
  {
    title: 'Servicio del mes',
    actual: 70,
    total: 100,
    backgroundImage: Image4,
    Icon: () => <ContentCut />
  },
]

interface sumServiceProps {
  title: string;
  count: number 
}

interface props {
  info: number[]
  sumService: sumServiceProps
  cita: CitasInterfaceCita[]
}

export const CardInfoContainer = ({ info, sumService, cita }: props) => {

  let citaEspera: any[] = []

  cita.map( e => {
    const citaOrder = [...e.cita].sort( (a, b) => a.hora.fecha - b.hora.fecha )

    return citaOrder.find( ct => ct.estado === 'En-espera' ? citaEspera.push(ct) : ct )
  })

  const nuevoCardInfo = arregloCardInfo.map(( e, index ) => ( index < 3 ) ? ( index === 1 ) ? { ...e, actual: info[index], total: info[3], name: citaEspera[0]?.nombre } : { ...e, actual: info[index], total: info[3] } : { ...e, titleService: sumService?.title }  )
  
  return (
    <>
      {
        nuevoCardInfo.map(({ title, actual, total, backgroundImage, Icon, image, name, titleService }) => (
        <Grid p={ 1 } xs = { 6 } sm = { 6 } md = { 6 } lg = { 3 } >
          <CardInfo
            title = { title } 
            actual={ actual } 
            total = { total } 
            backgroundImage = { backgroundImage } 
            Icon = { Icon } 
            image = { image } 
            name = { name }
            titleService = { titleService }
          />
        </Grid>
        ))
      }
    </>
  )
}
