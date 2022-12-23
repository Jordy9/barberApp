import { Dispatch, SetStateAction } from 'react';

import { useNavigate } from 'react-router-dom'

import { Dashboard, LibraryAdd, Favorite, DriveFolderUpload, Collections, LibraryBooks } from '@mui/icons-material'
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
            label: 'Crear cita',
            route: '/CrearCita',
            Icon: () => <LibraryAdd />
        },

        {
            label: 'Listado de citas',
            route: '/crearPregunta',
            Icon: () => <LibraryBooks />
        },

        {
            label: 'Barberos favoritos',
            route: '/listadoPreguntas',
            Icon: () => <Favorite />
        },

        {
            label: 'Subir imagen a galería',
            route: '/listadoPreguntas',
            Icon: () => <DriveFolderUpload />
        },

        {
            label: 'Listado de mi galería',
            route: '/listadoPreguntas',
            Icon: () => <Collections />
        },
    ]

    const navigate = useNavigate()

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
                        <ListItemButton onClick={ () => navigate(route) }>
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
