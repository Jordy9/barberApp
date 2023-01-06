import { Routes, Navigate, Route, useLocation } from 'react-router-dom';
import { Barberos, Galeria, Inicio, NuevaContrasena, ProfileBarber, RecuperarContrasena } from "../components/pages"
import { DashBoard, ListadoDeCitas, BarberosFavoritos, SubirImagenGaleria, ListadoMiGaleria, Anuncio, Perfil } from "../components/pagesAccount"
import { AnimatePresence } from "framer-motion"
import { DialogConfirm } from '../components/dialogConfirm/DialogConfirm';
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { checkAuthToken } from '../store/auth/thunk';
import { CircularProgressIndicator } from '../circularProgress/CircularProgressIndicator';

export const AppRouter = () => {

  const dispatch = useAppDispatch();

  const { usuarioActivo } = useAppSelector( state => state.auth );

  const location = useLocation()

  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch( checkAuthToken() )
  }, [])

  if ( token && !usuarioActivo ) {
    return <CircularProgressIndicator />
  }

  return (
    <AnimatePresence mode="wait" initial={true}>
      <Routes key={ location.pathname } location = { location }>
        <Route path="/DashBoard" element = { <DashBoard /> } />
        <Route path="/ListadoDeCitas" element = { <ListadoDeCitas /> } />
        <Route path="/BarberosFavoritos" element = { <BarberosFavoritos /> } />
        <Route path="/ImagenAGaleria" element = { <SubirImagenGaleria /> } />
        <Route path="/ListadoDeMiGaleria" element = { <ListadoMiGaleria /> } />
        <Route path="/Anuncio" element = { <Anuncio /> } />
        <Route path="/Perfil" element = { <Perfil /> } />
        <Route path="/Inicio" element = { <Inicio /> } />
        <Route path="/Galeria" element = { <Galeria /> } />
        <Route path="/Barberos" element = { <Barberos /> } />
        <Route path="/Perfil/name/:id" element = { <ProfileBarber /> } />
        <Route path="/RecuperarContrasena" element = { <RecuperarContrasena /> } />
        <Route path="/NuevaContrasena" element = { <NuevaContrasena /> } />
        <Route path="/*" element = { <Navigate to='/Inicio' /> } />
      </Routes>

      <Toaster />
      <DialogConfirm />
    </AnimatePresence>
  )
}
