import { Dispatch } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast";
import barberApi from '../../Api/barberApi';
import { updateServiceCita } from "../socket/thunk";
import { onCreateCita, onGetCita } from "./CitasSlice";
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