import { Routes, Navigate, Route } from "react-router-dom"
import { Inicio } from "../components/pages"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/Inicio" element = { <Inicio /> } />
        <Route path="/*" element = { <Navigate to='/Inicio' /> } />
    </Routes>
  )
}
