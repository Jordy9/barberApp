import { Dispatch, SetStateAction } from 'react';
import { Servicio } from '../interfaces/negocioInterface';

export const handleChange = ( i: number, target: EventTarget & (HTMLTextAreaElement | HTMLInputElement), array: any[], setArray: Dispatch<SetStateAction<any[]>> ) => {
    let newFormValues = [ ...array ]

    newFormValues[i] = {
      ...newFormValues[i],
      [target.name]: target.value
    }

    setArray(newFormValues);
}

export const addNew = ( array: any[], setArray: Dispatch<SetStateAction<any[]>> ) => {
    const newService: Servicio = { servicio: '', tiempo: '10', minHor: 'Minutos' }

    let newFormValues = [ newService, ...array ]

    setArray(newFormValues)
}

export const deleteOld = ( i: number, array: any[], setArray: Dispatch<SetStateAction<any[]>> ) => {
    let newFormValues = [ ...array ];
    newFormValues.splice(i, 1);
    setArray(newFormValues)
}