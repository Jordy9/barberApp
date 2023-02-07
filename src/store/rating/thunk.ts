import { Dispatch } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import barberApi from '../../Api/barberApi';
import { onGetRating } from './ratingSlice';

export const getRating = () => {
    return async( dispatch: Dispatch ) => {

        try {
            const { data } = await barberApi.get('rating')
            
            dispatch( onGetRating(data.rating) )
        } catch (error) {
            console.log(error)
        }

    }
}

export const createRating = ( ratingFormValues: any, isDelete: boolean ) => {
    return async( dispatch: Dispatch, getState: any ) => {

        const { socket } = getState().sk;

        const toastId = toast.loading('Guardando calificación', {
            position: 'top-right'
        })

        try {
            const { data } = await barberApi.post('rating', ratingFormValues)
            
            toast.success('Calificación enviada', {
                id: toastId,
                position: 'top-right'
            })

            socket?.emit('create-rating', { rating: data.rating, isDelete } )
        } catch (error) {
            console.log(error)
        }

    }
}