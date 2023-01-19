import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitasInterface, CitasInterfaceCita } from '../../interfaces/citasInterface';

const initialState: CitasInterface = {
    isOpen: false,
    cita: [],
    citaActiva: null
}

export const CitasSlice = createSlice({
   name: 'Citas',
   initialState,
   reducers: {
       isOpenCita: (state, action: PayloadAction<boolean> ) => {
           state.isOpen = action.payload;
        },

       onGetCita: (state, action: PayloadAction<CitasInterfaceCita[]> ) => {
           state.cita = action.payload
        },

       onCreateCita: (state, action: PayloadAction<CitasInterfaceCita> ) => {
           state.cita.unshift(action.payload)
        },

        onUpdateCita: (state, action: PayloadAction<CitasInterfaceCita> ) => {
            state.cita = state.cita.map(
             e => e._id === action.payload._id ? action.payload : e
            )
        },
        
        onGetCitaActiva: (state, action: PayloadAction<CitasInterfaceCita> ) => {
            state.citaActiva = action.payload
        },

        onClearCitaActiva: ( state ) => {
            state.citaActiva = null
        },
   }
});


// Action creators are generated for each case reducer function
export const { isOpenCita, onGetCita, onCreateCita, onUpdateCita, onGetCitaActiva, onClearCitaActiva } = CitasSlice.actions;