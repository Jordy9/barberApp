import { Dispatch } from '@reduxjs/toolkit';
import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks';

export const useInfiniteScroll = ( dispatchFunc: ( page?: number, size?: number, setIsLoading?: ( arg: boolean ) => void, isLoading?: boolean ) => (dispatch: Dispatch, getState: any) => Promise<void> ) => {

    const dispatch = useAppDispatch();

    const { pagination } = useAppSelector( state => state.ct );

    const page = pagination?.page! + 1

    const refElement = useRef<HTMLDivElement>(null);

    const [isLoading, setIsLoading] = useState(false)

    const handleScroll = () => {

      if ( pagination?.page! >= pagination?.total! ) return

      if ( isLoading ) return

      // if ( window.scrollY - 200 >= ( refElement.current!.offsetHeight * 0.5 ) ) {
      //   setIsLoading(true)
      // }

      if ( window.scrollY, ( refElement.current!.offsetHeight * 0.56 - 200 ) ) {
        setIsLoading(true)
      }

    }

    useEffect(() => {

      if ( pagination?.page! >= pagination?.total! ) return

      if ( !isLoading ) return

      dispatch( dispatchFunc( page, 15, setIsLoading, isLoading ) )

    }, [isLoading])

    useEffect(() => {
        
      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll)

    }, [isLoading, handleScroll])

  return {
    refElement,
    isLoading,
    setIsLoading
  }
}
