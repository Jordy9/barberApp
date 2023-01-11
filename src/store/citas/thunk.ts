import { Dispatch } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast";
import barberApi from '../../Api/barberApi';
import { onCreateCita, onGetCita, onUpdateCita } from "./CitasSlice";
import { AppDispatch } from '../store';

export const obtenerCita = () => {
    return async ( dispatch: Dispatch ) => {

        try {
            const { data } =  await barberApi.get<any>('cita')

            dispatch( onGetCita(data.cita) )
        } catch (error) {
            console.log(error)
        }
    }
}

export const createCita = ( cita: any, ninos: boolean ) => {
    return async ( dispatch: AppDispatch ) => {

        const toastId = toast.loading('Guardando cita', {
            position: 'top-right'
        })

        try {
            const { data } =  await barberApi.post('cita', { cita, ninos })
            
            dispatch( onCreateCita(data.cita) )

            toast.success('Cita guardada', {
                id: toastId,
                position: 'top-right'
            })
        } catch (error) {
            toast.error('Hubo un error, verifique que haya llenado los campos correctamente', {
                id: toastId,
                position: 'top-right'
            })
            console.log(error)
        }
    }
}

export const actualizarCita = ( id: string, cita: any, ninos: boolean ) => {
    return async ( dispatch: AppDispatch ) => {

        const toastId = toast.loading('Actualizando cita', {
            position: 'top-right'
        })

        try {
            const { data } =  await barberApi.put(`cita/${id}`, { cita, ninos })
            
            dispatch( onUpdateCita(data.cita) )

            toast.success('Cita actualizada', {
                id: toastId,
                position: 'top-right'
            })
        } catch (error) {
            toast.error('Hubo un error, verifique que haya llenado los campos correctamente', {
                id: toastId,
                position: 'top-right'
            })
            console.log(error)
        }
    }
}