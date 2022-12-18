import { Box } from "@mui/system"
import { useLocation } from "react-router-dom"
import { Navbar } from "../navbar/Navbar"
import { NavbBottom } from "../navbar/NavbBottom"
import { useResponsive } from '../../hooks/useResponsive';

interface Props {
  children: JSX.Element
}

export const Layaout = ({ children }: Props) => {

  const { pathname } = useLocation()

  const [ respWidth ] = useResponsive()

  return (
    <Box sx={{ flexFlow: 1 }}>

        <Navbar respWidth = { respWidth } />

        <Box sx={{ padding: ( pathname !== '/Inicio' ) ? '10px 20px' : '' }}>
          { children }
        </Box>

        {
          ( respWidth <= 700 )
            &&
          <NavbBottom />
        }
        
    </Box>
  )
}
