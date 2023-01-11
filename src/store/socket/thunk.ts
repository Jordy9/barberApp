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

export const updateServiceCita = ( id: string, hora: string, uid: string ) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('update-service-cita', { id, hora, uid })

    }
}

export const removeServiceCita = ( id: string, uid: string ) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('remove-service-cita', { id, uid })

    }
}

export const removeAllOrManyServiceCita = ( content: any ) => {
    return ( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        socket?.emit('remove-all-or-many-service-cita', content)

    }
}