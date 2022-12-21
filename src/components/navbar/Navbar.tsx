import { AppBar, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { Box } from '@mui/system'

import { RespWidthProps } from '../../interfaces/interfaces';
import { NavLink } from 'react-router-dom';
import { NavbarLateralDesk } from './NavbarLateralDesk';
import { useState } from 'react';
import { Login } from '../formSesion';

export const Navbar = ({ respWidth }: RespWidthProps) => {

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={ 0 }>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton> */}
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
            <Box display={ 'flex' } justifyContent = { 'space-between' }>
              <Button onClick={ () => setShowDialog(true) } sx={{ ml: 2 }} color="inherit" variant='contained'>Iniciar sesión</Button>
            </Box>

          }

        </Toolbar>
      </AppBar>
      <Login showDialog = { showDialog } setShowDialog = { setShowDialog } />
    </Box>
  )
}
