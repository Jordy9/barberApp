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

        onActiveUbicacion: (state, action: PayloadAction<Ubicacion> ) => {
            state.activeUbicacion = action.payload
        },

        onActiveHorario: (state, action: PayloadAction<horasClientes> ) => {
            state.activeHorario = action.payload
        },
   }
});


// Action creators are generated for each case reducer function
export const { onGetNegocio, onCreateNegocio, onUpdateNegocio, onActiveServicio, onActiveUbicacion, onActiveHorario } = negocioSlice.actions;