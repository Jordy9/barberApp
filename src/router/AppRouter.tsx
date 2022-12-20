import { Routes, Navigate, Route } from "react-router-dom"
import { Barberos, Galeria, Inicio, ProfileBarber } from "../components/pages"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/Inicio" element = { <Inicio /> } />
        <Route path="/Galeria" element = { <Galeria /> } />
        <Route path="/Barberos" element = { <Barberos /> } />
        <Route path="/Perfil/name/:id" element = { <ProfileBarber /> } />
        <Route path="/*" element = { <Navigate to='/Inicio' /> } />
    </Routes>
  )
}
