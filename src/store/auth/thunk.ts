import { Dispatch } from "@reduxjs/toolkit"
import barberApi from "../../Api/barberApi"
import { toast } from 'react-hot-toast';
import { getUsuarioActivo, logoutAuth } from "./authSlice";
import { UsuarioLogin, UsuarioPost, Usuarios } from "../../interfaces/usuarios";
import { AppDispatch } from "../store";

export const createUsuario = ( usuario: UsuarioPost ) => {
    return async( dispatch: Dispatch ) => {

        const toastAwait = toast.loading('Registrando', {
            position: 'top-right'
        })

        try {


            const { data } = await barberApi.post<Usuarios>('auth', { ...usuario })

            console.log(data)

            dispatch( getUsuarioActivo(data.usuario) )

            toast.success('Bienvenido', {
                id: toastAwait,
                position: 'top-right'
            })
            
        } catch (error) {
            toast.error('Hubo un error', {
                id: toastAwait,
                position: 'top-right'
            })
        }

    }
}

export const loginUsuario = ( usuario: UsuarioLogin ) => {
    return async( dispatch: Dispatch ) => {

        const toastAwait = toast.loading('Iniciando sesión', {
            position: 'top-right'
        })

        try {

            const { data } = await barberApi.post<Usuarios>('auth/login', { ...usuario })

            dispatch( getUsuarioActivo(data.usuario) )

            localStorage.setItem('token', data.token!)
            localStorage.setItem('token-init-date', new Date().getTime().toString());

            toast.success('Bienvenido', {
                id: toastAwait,
                position: 'top-right'
            })
            
        } catch (error) {
            toast.error('Hubo un error', {
                id: toastAwait,
                position: 'top-right'
            })
        }

    }
}

const onLogout = () => {
    return ( dispatch: Dispatch ) => {

        localStorage.removeItem('token')
        localStorage.removeItem('token-init-date')

        dispatch( logoutAuth() )
    }
}

export const checkAuthToken = () => {
    return async( dispatch: AppDispatch ) => {

        const token = localStorage.getItem('token')

        if (!token) return dispatch( onLogout() )

        try {
            const { data } = await barberApi.get<Usuarios>(`/auth/renew`);
            
            localStorage.setItem('token', data.token!)
            localStorage.setItem('token-init-date', new Date().getTime().toString());

            dispatch( getUsuarioActivo(data.usuario) )

        } catch ({response}) {
            dispatch( onLogout() )
        }
    }
}