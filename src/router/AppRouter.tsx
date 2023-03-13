import { Routes, Navigate, Route, useLocation } from 'react-router-dom';
import { Barberos, Galeria, Inicio, NuevaContrasena, ProfileBarber, RecuperarContrasena } from "../components/pages"
import { DashBoard, ListadoDeCitas, BarberosFavoritos, SubirImagenGaleria, ListadoMiGaleria, Anuncio, Perfil, CitasAtender } from "../components/pagesAccount"
import { AnimatePresence } from "framer-motion"
import { DialogConfirm } from '../components/dialogConfirm/DialogConfirm';
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { checkAuthToken, obtenerUsuarios } from '../store/auth/thunk';
import { CircularProgressIndicator } from '../circularProgress/CircularProgressIndicator';
import { useSocket } from '../hooks/useSocket';
import { startSocket } from '../store/socket/socketSlice';
import { getHorarioNegocio } from '../store/negocio/thunk';
import { obtenerCita, obtenerCitaList } from '../store/citas/thunk';
import { RatingDialog } from '../components/ratingDialog';
import { getRating } from '../store/rating/thunk';
import { onClearCita } from '../store/citas/CitasSlice';

export const AppRouter = () => {

  const dispatch = useAppDispatch();

  const { usuarioActivo } = useAppSelector( state => state.auth );

  const location = useLocation()

  const token = localStorage.getItem('token')

  const API_URL = process.env.REACT_APP_API_URL!

  const { socket, conectarSocket, desconectarSocket } = useSocket(`${API_URL.split('/api')[0]}`)

  useEffect(() => {
    localStorage.removeItem('showTooltip')
  }, [])

  useEffect(() => {
    if ( location.pathname !== '/CitasAtender' ) return

    dispatch( onClearCita() )
    dispatch( obtenerCita() )

  }, [location.pathname])
  
  useEffect(() => {
    dispatch( checkAuthToken() )
    dispatch( obtenerUsuarios() )
  }, [])

  useEffect(() => {
    dispatch( startSocket(socket) )
  }, [dispatch, socket])

  useEffect(() => {
    if ( usuarioActivo?._id ) {
      conectarSocket()
      dispatch( getHorarioNegocio() )
      if ( usuarioActivo.role === 'Barbero' ) {
        dispatch( obtenerCita() )
      } else {
        dispatch( obtenerCitaList() )
      }
      dispatch( getRating(usuarioActivo?._id) )
    }
  }, [usuarioActivo?._id, conectarSocket])

  useEffect(() => {
    if ( !usuarioActivo?._id ) {
      desconectarSocket()
    }
  }, [usuarioActivo?._id, desconectarSocket])

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
        <Route path="/CitasAtender" element = { <CitasAtender /> } />
        <Route path="/Inicio" element = { <Inicio /> } />
        <Route path="/Galeria" element = { <Galeria /> } />
        <Route path="/Barberos" element = { <Barberos /> } />
        <Route path="/Perfil/name/:id" element = { <ProfileBarber /> } />
        <Route path="/RecuperarContrasena" element = { <RecuperarContrasena /> } />
        <Route path="/NuevaContrasena" element = { <NuevaContrasena /> } />
        <Route path="/*" element = { <Navigate to='/Inicio' /> } />
      </Routes>

      <Toaster />

      {
        ( usuarioActivo )
          &&
        <RatingDialog ratingForm = { usuarioActivo?.ratingForm } />
      }
      
      <DialogConfirm />
    </AnimatePresence>
  )
}
