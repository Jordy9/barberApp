import { useCallback, useEffect, useState } from 'react';

import * as io from "socket.io-client";
import { useAppDispatch } from '../store/hooks';
import { onUpdateNegocio } from '../store/negocio/negocioSlice';

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
            dispatch( onUpdateNegocio(resp) )
        });
    }, [ socket ])

    // useEffect(() => {
    //     socket?.on('disconnect', () => setOnline( false ));
    // }, [ socket ])
    
    return {
        socket,
        conectarSocket,
        desconectarSocket
    }
}