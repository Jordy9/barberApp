import { useCallback, useEffect, useState } from 'react';

import * as io from "socket.io-client";
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { onUpdateNegocio } from '../store/negocio/negocioSlice';
import { toast } from 'react-hot-toast';
import { onUpdateCita } from '../store/citas/CitasSlice';

export const useSocket = ( serverPath: string ) => {

    const token = localStorage.getItem('token')

    const dispatch = useAppDispatch();

    const { usuarioActivo } = useAppSelector( state => state.auth );
    
    const [ socket, setSocket ] = useState<io.Socket | null>(null);

    const conectarSocket = useCallback(
        () => {
           const socketTemp = io.connect( serverPath, {
                transports: ['websocket'],
                autoConnect: true,
                forceNew: true,
                query: {
                    'x-token': token
                }
            } )

           setSocket(socketTemp)
        }, [serverPath, token])

    const desconectarSocket = useCallback(
        () => {
            socket?.disconnect()
        }, [socket]
    )

    useEffect(() => {
        socket?.on('started-service', ( resp ) => {
            toast.success('Horario de servicio creado', {
                position: 'top-right'
            })
            if ( !resp ) return

            dispatch( onUpdateNegocio(resp) )
        });
    }, [ socket ])

    useEffect(() => {
        socket?.on('updated-service-cita', ( resp ) => {
            if ( !resp ) return

            dispatch( onUpdateNegocio(resp) )
        });
    }, [ socket ])
    
    useEffect(() => {
        socket?.on('updated-cita-state', ( resp ) => {
            if ( !resp ) return

            dispatch( onUpdateCita(resp) )
        });
    }, [ socket ])

    useEffect(() => {
        socket?.on('removed-service-cita', ( resp ) => {
            if ( !resp ) return

            dispatch( onUpdateNegocio(resp) )
        });
    }, [ socket ])

    useEffect(() => {
        socket?.on('disconect-remove-accidentally-service-cita', ( resp ) => {
            if ( !resp || resp.length === 0 ) return

            resp.forEach((element: any) => {
                dispatch( onUpdateNegocio(element) )    
            });
            
        });
    }, [ socket ])

    useEffect(() => {
        socket?.on('update-negocio-by-minute', ( resp ) => {

            if ( !usuarioActivo?._id && !resp || resp.length === 0 ) return

            if ( !resp || resp.length === 0 ) return

            resp.forEach((element: any) => {
                dispatch( onUpdateNegocio(element) )    
            });
            
        });
    }, [ socket ])
    
    return {
        socket,
        conectarSocket,
        desconectarSocket
    }
}