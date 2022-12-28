import { List, ListItem, Divider, Grid } from '@mui/material';

import { ListText } from '.';
import { useResponsive } from '../../hooks/useResponsive';

interface itemProps {
  title: string;
  description?: string;
  fecha: number;
  estado: boolean;
}

export const AnuncioList = () => {

  const arregloImagen: itemProps[] = [
    {
      title: 'Nuevo anuncio',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident enim beatae quaerat reprehenderit in, voluptatibus similique consectetur dolores dignissimos nesciunt eius quis! Aliquam laborum rerum quae vitae sint harum?',
      fecha: new Date().getTime(),
      estado: false
    },

    {
      title: 'Nuevo anuncio',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident enim beatae quaerat reprehenderit in, voluptatibus similique consectetur dolores dignissimos nesciunt eius quis! Aliquam laborum rerum quae vitae sint harum?',
      fecha: new Date().getTime(),
      estado: true
    },

    {
      title: 'Nuevo anuncio',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident enim beatae quaerat reprehenderit in, voluptatibus similique consectetur dolores dignissimos nesciunt eius quis! Aliquam laborum rerum quae vitae sint harum?',
      fecha: new Date().getTime(),
      estado: false
    },
    {
      title: 'Nuevo anuncio',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident enim beatae quaerat reprehenderit in, voluptatibus similique consectetur dolores dignissimos nesciunt eius quis! Aliquam laborum rerum quae vitae sint harum?',
      fecha: new Date().getTime(),
      estado: false
    },

    {
      title: 'Nuevo anuncio',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident enim beatae quaerat reprehenderit in, voluptatibus similique consectetur dolores dignissimos nesciunt eius quis! Aliquam laborum rerum quae vitae sint harum?',
      fecha: new Date().getTime(),
      estado: true
    },

    {
      title: 'Nuevo anuncio',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci provident enim beatae quaerat reprehenderit in, voluptatibus similique consectetur dolores dignissimos nesciunt eius quis! Aliquam laborum rerum quae vitae sint harum?',
      fecha: new Date().getTime(),
      estado: false
    },
  ]

  const [ respWidth ] = useResponsive()

  return (
    <List sx={{ display: 'grid', gridTemplateColumns: ( respWidth <= 991 ) ? '1fr' : '1fr 1fr' }}>

      {
        arregloImagen.map( ( props ) => (
          <Grid>
            <ListItem 
              sx={{ display: 'flex', justifyContent: 'flex-end' }} 
            >
                    
              <ListText { ...props } />
              
            </ListItem>
            <Divider variant="inset" component="li" />
          </Grid>
          
        ))
      }
    </List>
  )
}
