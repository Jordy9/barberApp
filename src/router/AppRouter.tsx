import { Routes, Navigate, Route } from "react-router-dom"
import { Barberos, Galeria, Inicio, NuevaContrasena, ProfileBarber, RecuperarContrasena } from "../components/pages"
import { DashBoard } from "../components/pagesAccount"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/DashBoard" element = { <DashBoard /> } />
      <Route path="/Inicio" element = { <Inicio /> } />
      <Route path="/Galeria" element = { <Galeria /> } />
      <Route path="/Barberos" element = { <Barberos /> } />
      <Route path="/Perfil/name/:id" element = { <ProfileBarber /> } />
      <Route path="/RecuperarContrasena" element = { <RecuperarContrasena /> } />
      <Route path="/NuevaContrasena" element = { <NuevaContrasena /> } />
      <Route path="/*" element = { <Navigate to='/Inicio' /> } />
    </Routes>
  )
}
