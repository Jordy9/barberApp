import { useCallback, useEffect, useState } from 'react';

import * as io from "socket.io-client";
import { useAppDispatch } from '../store/hooks';
import { onUpdateNegocio } from '../store/negocio/negocioSlice';
import { toast } from 'react-hot-toast';
import { getHorarioNegocio } from '../store/negocio/thunk';

export const useSocket = ( serverPath: string ) => {

    const token = localStorage.getItem('token')

    const dispatch = useAppDispatch();
    
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
    
    return {
        socket,
        conectarSocket,
        desconectarSocket
    }
}