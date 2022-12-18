import { Box } from "@mui/system"
import { useLocation } from "react-router-dom"
import { Navbar } from "../navbar/Navbar"

interface Props {
  children: JSX.Element
}

export const Layaout = ({ children }: Props) => {

  const { pathname } = useLocation()

  return (
    <Box sx={{ flexFlow: 1 }}>

        <Navbar />

        <Box sx={{ padding: ( pathname !== '/Inicio' ) ? '10px 20px' : '' }}>
            { children }
        </Box>
    </Box>
  )
}
