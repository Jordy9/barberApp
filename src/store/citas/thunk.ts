import { Dispatch } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast";
import barberApi from '../../Api/barberApi';
import { onGetCita, onGetCitaInit, onGetPagination } from "./CitasSlice";
import { AppDispatch } from '../store';

export const obtenerCita = (page?: number, size?: number, setIsLoading?: ( arg: boolean ) => void, isLoading?: boolean) => {
    return async ( dispatch: Dispatch, getState: any ) => {

        const { pagination } = getState().ct;

        const { usuarioActivo } = getState().auth;

        const condition = ( window.location.pathname === 'CitasAtender' )

        try {
            const { data } =  await barberApi.get<any>(`cita?id=${usuarioActivo?._id}&page=${page}&size=${size}&condition=${condition}&start=${pagination?.start}&end=${pagination?.end}`)

            dispatch( onGetCita(data.cita) )
            dispatch( onGetPagination({
                page: data.page,
                total: data.total,
                start: pagination?.start,
                end: pagination?.end
            }) )

            if ( isLoading ) {
                setIsLoading!(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const obtenerCitaNewDate = (page?: number, size?: number, setIsLoading?: ( arg: boolean ) => void, isLoading?: boolean, startEnd?: any) => {
    return async ( dispatch: Dispatch, getState: any ) => {

        const { usuarioActivo } = getState().auth;

        const condition = ( window.location.pathname === 'CitasAtender' )

        try {
            const { data } =  await barberApi.get<any>(`cita?id=${usuarioActivo?._id}&page=${page}&size=${size}&condition=${condition}&start=${startEnd?.start}&end=${startEnd?.end}`)

            dispatch( onGetCitaInit(data.cita) )
            dispatch( onGetPagination({
                page: data.page,
                total: data.total,
                start: startEnd.start,
                end: startEnd.end
            }) )

            if ( isLoading ) {
                setIsLoading!(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const obtenerCitaList = (page?: number, size?: number, setIsLoading?: ( arg: boolean ) => void, isLoading?: boolean) => {
    return async ( dispatch: Dispatch, getState: any ) => {

        const { usuarioActivo } = getState().auth;

        try {
            const { data } =  await barberApi.get<any>(`cita/list?id=${usuarioActivo?._id}&page=${page}&size=${size}`)

            dispatch( onGetCita(data.cita) )
            dispatch( onGetPagination({
                page: data.page,
                total: data.total
            }) )

            if ( isLoading ) {
                setIsLoading!(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const createCita = ( cita: any, ninos: boolean, userId: string, handleClose: () => void ) => {
    return async ( dispatch: AppDispatch, getState: any ) => {

        const { socket } = getState().sk;

        const toastId = toast.loading('Guardando cita', {
            position: 'top-right'
        })

        try {
            const { data } =  await barberApi.post('cita', { userId, cita, ninos })
            
            socket?.emit( 'create-cita', data.cita )

            toast.success('Cita guardada', {
                id: toastId,
                position: 'top-right'
            })

            handleClose()

        } catch (error) {
            toast.error('Hubo un error, verifique que haya llenado los campos correctamente', {
                id: toastId,
                position: 'top-right'
            })
            console.log(error)
        }
    }
}

export const actualizarCita = ( id: string, cita: any, ninos: boolean, userId: string, handleClose: () => void ) => {
    return async ( dispatch: AppDispatch, getState: any ) => {

        const { socket } = getState().sk;

        const toastId = toast.loading('Actualizando cita', {
            position: 'top-right'
        })

        try {
            const { data } =  await barberApi.put(`cita/${id}`, { userId, cita, ninos })
            
            socket?.emit( 'update-cita', data.cita )

            toast.success('Cita actualizada', {
                id: toastId,
                position: 'top-right'
            })

            handleClose()
            
        } catch (error) {
            toast.error('Hubo un error, verifique que haya llenado los campos correctamente', {
                id: toastId,
                position: 'top-right'
            })
            console.log(error)
        }
    }
}