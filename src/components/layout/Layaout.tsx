import { Box } from "@mui/system"
import { useLocation } from "react-router-dom"
import { Navbar } from "../navbar/Navbar"
import { NavbBottom } from "../navbar/NavbBottom"
import { useResponsive } from '../../hooks/useResponsive';
import { DrawerMenu } from "../drawer/DrawerMenu";
import { useState } from "react";
import { Toolbar } from "@mui/material";
import { motion, useIsPresent } from 'framer-motion'

interface Props {
  children: JSX.Element
}

export const Layaout = ({ children }: Props) => {

  const { pathname } = useLocation()

  const [ respWidth ] = useResponsive()

  const [show, setShow] = useState(false)

  const isPresent = useIsPresent();

  return (
    <Box sx={{ flexFlow: 1 }}>

      <Navbar respWidth = { respWidth } setShow = { setShow } />

      <DrawerMenu show = { show } setShow = { setShow } />

      <Box sx={{ padding: ( pathname !== '/Inicio' ) ? '10px 20px' : '' }}>
        <Toolbar />
        <motion.div
          initial={{ width: '100%', opacity: 0 }}
          animate={{ width: '100%', scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: "linear" } }}
          exit={{ scaleX: 0.5, transition: { duration: 0.3, ease: "linear" } }}
          style={{ originX: isPresent ? 0 : 2 }}
        >
          { children }
        </motion.div>
      </Box>

      {
        ( respWidth <= 991 && pathname !== '/Perfil/name/:id' )
          &&
        <NavbBottom pathname = { pathname } />
      }
        
    </Box>
  )
}
