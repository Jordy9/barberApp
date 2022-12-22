import { Box } from "@mui/system"
import { useLocation } from "react-router-dom"
import { Navbar } from "../navbar/Navbar"
import { NavbBottom } from "../navbar/NavbBottom"
import { useResponsive } from '../../hooks/useResponsive';
import { DrawerMenu } from "../drawer/DrawerMenu";
import { useState } from "react";
import { Toolbar } from "@mui/material";

interface Props {
  children: JSX.Element
}

export const Layaout = ({ children }: Props) => {

  const { pathname } = useLocation()

  const [ respWidth ] = useResponsive()

  const [show, setShow] = useState(false)

  return (
    <Box sx={{ flexFlow: 1 }}>

      <Navbar respWidth = { respWidth } setShow = { setShow } />

      <DrawerMenu show = { show } setShow = { setShow } />

      <Box sx={{ padding: ( pathname !== '/Inicio' ) ? '10px 20px' : '' }}>
        <Toolbar />
        { children }
      </Box>

      {
        ( respWidth <= 991 && pathname !== '/Perfil/name/:id' )
          &&
        <NavbBottom pathname = { pathname } />
      }
        
    </Box>
  )
}
