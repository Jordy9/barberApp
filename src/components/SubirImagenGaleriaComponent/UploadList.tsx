import { List, ListItem, Divider } from '@mui/material';
import { ListAvatar, ListText } from './';

interface itemProps {
  imagen?: string;
  imagenName: string;
  porcentage: number;
  velocidad: number
}

export const UploadList = () => {

  const arregloImagen: itemProps[] = [
    {
      imagen: 'https://images.unsplash.com/photo-1536520002442-39764a41e987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      imagenName: 'Recorte.jpg',
      porcentage: 10,
      velocidad: 150
    },

    {
      imagen: 'https://images.unsplash.com/photo-1605497787865-e6d4762b386f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhcmJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      imagenName: 'peinado.jpg',
      porcentage: 45,
      velocidad: 90
    },

    {
      imagen: 'https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJhcmJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      imagenName: 'Herramientas.jpg',
      porcentage: 93,
      velocidad: 450
    }
  ]

  return (
    <List sx={{ width: '100%' }}>

      {
        arregloImagen.map( ( props ) => (
          <>
            <ListItem 
              sx={{ display: 'flex', justifyContent: 'flex-end' }} 
            >
              <ListAvatar imagen = { props.imagen } />
      
              <ListText { ...props } />
              
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
          
        ))
      }
    </List>
  )
}
