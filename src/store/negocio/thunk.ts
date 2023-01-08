import { Dispatch } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"
import barberApi from "../../Api/barberApi"
import { onCreateNegocio, onGetNegocio } from "./negocioSlice"

export const getHorarioNegocio = () => {
    return async( dispatch: Dispatch ) => {

        try {

            const { data } = await barberApi.get('negocio')

            dispatch( onGetNegocio( data.negocio ) )
            
        } catch (error) {
            console.log(error)
        }
    }
}

export const createNegocio = ( negocio: object ) => {
    return async( dispatch: Dispatch ) => {

        const toastId = toast.loading('Guardando', {
            position: 'top-right'
        })

        try {

            const { data } = await barberApi.post('negocio', { ...negocio })

            dispatch( onCreateNegocio( data.negocio ) )

            toast.success('Información guardada', {
                id: toastId,
                position: 'top-right'
            })
            
        } catch (error) {
            toast.error('Hubo un problema, intentelo de nuevo', {
                id: toastId,
                position: 'top-right'
            })
        }
    }
}