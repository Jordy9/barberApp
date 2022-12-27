import { Dispatch, SetStateAction } from 'react';

import { useNavigate } from 'react-router-dom'

import { Dashboard, Favorite, CloudUpload, Collections, LibraryBooks } from '@mui/icons-material'
import { Box } from '@mui/system'

import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer, Typography } from '@mui/material';

interface DrawerProps {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>
}

export const DrawerMenu = ({ show, setShow }: DrawerProps) => {

    const listRoute = [
        {
            label: 'DashBoard',
            route: '/DashBoard',
            Icon: () => <Dashboard />
        },

        {
            label: 'Listado de citas',
            route: '/ListadoDeCitas',
            Icon: () => <LibraryBooks />
        },

        {
            label: 'Barberos favoritos',
            route: '/BarberosFavoritos',
            Icon: () => <Favorite />
        },

        {
            label: 'Subir imagen a galería',
            route: '/ImagenAGaleria',
            Icon: () => <CloudUpload />
        },

        {
            label: 'Listado de mi galería',
            route: '/listadoPreguntas',
            Icon: () => <Collections />
        },
    ]

    const navigate = useNavigate()

    const handleNavigate = ( route: string ) => {
        setShow(false)
        navigate(route)
    }

  return (
    <Drawer
      anchor={'left'}
      open={ show }
      onClose={ () => setShow(false) }
    >
        <Box sx = {{width: 250}}>
            <Box sx={{ padding: '5px 10px' }}>
                <Typography variant='h5' textAlign={ 'center' }>Fulano de tal</Typography>
            </Box>
            {
                listRoute.map(({ label, route, Icon }) => (
                    <ListItem  key={ route } disablePadding>
                        <ListItemButton onClick={ () => handleNavigate(route) }>
                            <ListItemIcon>
                                <IconButton>
                                    <Icon />
                                </IconButton>
                            </ListItemIcon>
                            <ListItemText primary={ label } />
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </Box>
    </Drawer>
  )
}
