import { Dispatch, SetStateAction, useState } from 'react';

import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'

import { LibraryAdd, Menu } from '@mui/icons-material'

import { NavLink } from 'react-router-dom';

import { NavbarLateralDesk } from './NavbarLateralDesk';
import { Login } from '../formSesion';
import Fab from '@mui/material/Fab';
import { DialogCita } from '../crearCitaComponent';
import { NavbarSesion } from './NavbarSesion';

interface RespWidthProps {
  respWidth: number
  setShow: Dispatch<SetStateAction<boolean>>
  pathname: string;
}

export const Navbar = ({ respWidth, setShow, pathname }: RespWidthProps) => {

  const [showDialog, setShowDialog] = useState(false)

  const appBarMenu = [
    {
      label: 'Inicio',
      route: '/Inicio',
    },
    {
      label: 'Galería',
      route: '/Galeria',
    },
    {
      label: 'Nuestros barberos',
      route: '/Barberos',
    },
  ]

  let activeStyle = {
    textDecoration: "none",
    color: 'white'
  };

  let isNotActiveStyle = {
    textDecoration: "none",
    color: 'hsla(0,0%,100%,.55)'
  };

  const [showDialog2, setshowDialog2] = useState(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation={ 0 }>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick = { () => setShow(true) }
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: (respWidth > 991) ? 0.1 : 1 }}>
            BarberApp
          </Typography>

          {
            ( respWidth > 991 )
              &&
            <Box sx={{ flexGrow: 1 }}>
              {
                appBarMenu.map(({ label, route }, index) => (
                  <NavLink key={ route } to={ route } style={({ isActive }) =>
                    isActive ? activeStyle : isNotActiveStyle}
                  >
                    <Button sx = {{ mx: ( index === 1 ) ? 1 : 0 }} color="inherit" variant='contained'>{ label }</Button>
                  </NavLink>
                ))
              }
            </Box>
          }

          {
            ( respWidth > 991 )
              ?
            <NavbarLateralDesk setShowDialog = { setShowDialog } />
              :
            <NavbarSesion setShowDialog={ setShowDialog } respWidth = { respWidth } />
          }

        </Toolbar>
      </AppBar>
      <Login showDialog = { showDialog } setShowDialog = { setShowDialog } />

      {
        ( pathname !== '/Perfil/name/:id' )
          &&
        <Fab 
          sx={{ 
            position: 'fixed',
            zIndex: 1046,
            bottom: 30,
            left: 0,
            right: 0,
            margin: '0 auto',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            '&:hover, &:focus': { backgroundColor: 'rgba(0, 0, 0, 1)' }
          }} 
          size="large" 
          color="inherit" 
          aria-label="add"
          onClick={ () => setshowDialog2(true) }
        >
          <LibraryAdd />
        </Fab>
      }

      <DialogCita showDialog2 = { showDialog2 } setShowDialog2 = { setshowDialog2 } />
    </Box>
  )
}
