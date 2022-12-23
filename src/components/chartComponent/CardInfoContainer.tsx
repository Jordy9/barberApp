import { FactCheck, Timer, Cancel, ContentCut  } from '@mui/icons-material';
import { Grid } from '@mui/material';

import Image1 from '../../assets/Image1.jpg'
import Image2 from '../../assets/Image2.jpg'
import Image3 from '../../assets/Image3.jpg'
import Image4 from '../../assets/Image4.jpg'

import { CardInfoProps } from '../../interfaces/interfaces';

import { CardInfo } from './';

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
    Icon: () => <Timer />,
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
    title: 'Servicio del día',
    actual: 70,
    total: 100,
    backgroundImage: Image4,
    Icon: () => <ContentCut />
  },
]

export const CardInfoContainer = () => {
  return (
    <>
      {
        arregloCardInfo.map(({ title, actual, total, backgroundImage, Icon, image, name }) => (
        <Grid p={ 1 } xs = { 6 } sm = { 3 } >
          <CardInfo 
            title = { title } 
            actual={ actual } 
            total = { total } 
            backgroundImage = { backgroundImage } 
            Icon = { Icon } 
            image = { image } 
            name = { name } 
          />
        </Grid>
        ))
      }
    </>
  )
}
