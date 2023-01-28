import { Dispatch } from "@reduxjs/toolkit"
import { Moment } from 'moment';

interface startServiceProps {
    firstValue: Moment;
    secondValue: Moment;
    id?: string;
    thirdValue: object
}


export const startService = ({ firstValue, secondValue, id, thirdValue }: startServiceProps) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('start-service', { firstValue, secondValue, id, thirdValue })

    }
}

export const pauseService = ( pauseButton: object, id: string ) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('pause-service', pauseButton, id)

    }
}

export const cancelStopServiceBarber = ( id: string ) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('cancel-stop-service', id)

    }
}

export const updateServiceCita = ( id: string, hora: string, uid: string, idCita: string | null ) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('update-service-cita', { id, hora, uid, idCita })

    }
}

export const createServiceCitaForm = ( form: any, idCita: any, barberId: string ) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('create-service-cita-form', form, idCita, barberId)

    }
}

export const removeServiceCitaForm = () => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('remove-service-cita-form')

    }
}

export const removeServiceCita = ( id: string, uid: string ) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('remove-service-cita', { id, uid })

    }
}

export const cancelCitaComplete = ( id: string, formCita: any ) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('cancel-cita', { id, formCita })

    }
}

export const updateCitaState = ( citaId: string, usuarioId: string, estado: string ) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('update-cita-state', { citaId, usuarioId, estado })

    }
}

export const removeAllOrManyServiceCita = () => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('remove-all-or-many-service-cita')

    }
}

export const removeManyServiceCita = ( content: any ) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('remove-meny-service-cita', content)

    }
}