import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { horasClientes, Negocio, Servicio, Ubicacion } from '../../interfaces/negocioInterface';

interface negocioState {
    negocio: Negocio[];
    activeServicio: Servicio;
    activeUbicacion: Ubicacion;
    activeHorario: horasClientes;
}

const initialState: negocioState = {
    negocio: [],
    activeServicio: {} as Servicio,
    activeUbicacion: {} as Ubicacion,
    activeHorario: {} as horasClientes
}

export const negocioSlice = createSlice({
   name: 'negocio',
   initialState,
   reducers: {
       onGetNegocio: (state, action: PayloadAction<Negocio[]> ) => {
           state.negocio = action.payload
        },

       onCreateNegocio: (state, action: PayloadAction<Negocio> ) => {
           state.negocio.push(action.payload)
        },
       onUpdateNegocio: (state, action: PayloadAction<Negocio> ) => {
           state.negocio = state.negocio.map(
            e => e._id === action.payload._id ? action.payload : e
           )
        },
        onActiveServicio: (state, action: PayloadAction<Servicio> ) => {
            state.activeServicio = { ...action.payload }
        },
        
        onClearActiveServicio: (state) => {
            state.activeServicio = {} as Servicio
        },

        onActiveUbicacion: (state, action: PayloadAction<Ubicacion> ) => {
            state.activeUbicacion = action.payload
        },

        onClearActiveUbicacion: (state) => {
            state.activeUbicacion = {} as Ubicacion
        },

        onActiveHorario: (state, action: PayloadAction<horasClientes> ) => {
            state.activeHorario = action.payload
        },

        onClearActiveHorario: (state) => {
            state.activeHorario = {} as horasClientes
        },
   }
});


// Action creators are generated for each case reducer function
export const { 
    onGetNegocio, 
    onCreateNegocio, 
    onUpdateNegocio, 
    onActiveServicio, 
    onActiveUbicacion, 
    onActiveHorario, 
    onClearActiveHorario, 
    onClearActiveServicio, 
    onClearActiveUbicacion 
} = negocioSlice.actions;