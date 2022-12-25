import { Routes, Navigate, Route, useLocation } from 'react-router-dom';
import { Barberos, Galeria, Inicio, NuevaContrasena, ProfileBarber, RecuperarContrasena } from "../components/pages"
import { DashBoard, ListadoDeCitas } from "../components/pagesAccount"
import { AnimatePresence } from "framer-motion"

export const AppRouter = () => {

  const location = useLocation()

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes key={ location.pathname } location = { location }>
        <Route path="/DashBoard" element = { <DashBoard /> } />
        <Route path="/ListadoDeCitas" element = { <ListadoDeCitas /> } />
        <Route path="/Inicio" element = { <Inicio /> } />
        <Route path="/Galeria" element = { <Galeria /> } />
        <Route path="/Barberos" element = { <Barberos /> } />
        <Route path="/Perfil/name/:id" element = { <ProfileBarber /> } />
        <Route path="/RecuperarContrasena" element = { <RecuperarContrasena /> } />
        <Route path="/NuevaContrasena" element = { <NuevaContrasena /> } />
        <Route path="/*" element = { <Navigate to='/Inicio' /> } />
      </Routes>
    </AnimatePresence>
  )
}
