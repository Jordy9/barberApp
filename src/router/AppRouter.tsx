import { Routes, Navigate, Route } from "react-router-dom"
import { Galeria, Inicio } from "../components/pages"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/Inicio" element = { <Inicio /> } />
        <Route path="/Galeria" element = { <Galeria /> } />
        <Route path="/*" element = { <Navigate to='/Inicio' /> } />
    </Routes>
  )
}
