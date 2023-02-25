import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CitasInterface, CitasInterfaceCita, paginationType } from '../../interfaces/citasInterface';

const initialState: CitasInterface = {
    isOpen: false,
    cita: [],
    citaActiva: null,
    pagination: null
}

export const CitasSlice = createSlice({
   name: 'Citas',
   initialState,
   reducers: {
       isOpenCita: (state, action: PayloadAction<boolean> ) => {
           state.isOpen = action.payload;
        },

       onGetCita: (state, action: PayloadAction<CitasInterfaceCita[]> ) => {
           state.cita.push( ...action.payload )
        },

       onGetCitaInit: (state, action: PayloadAction<CitasInterfaceCita[]> ) => {
           state.cita = action.payload
        },

       onGetPagination: (state, action: PayloadAction<paginationType> ) => {
           state.pagination = action.payload
        },

       onGetDatePagination: (state, action: PayloadAction<paginationType> ) => {
           state.pagination!.start = action.payload.start
           state.pagination!.end = action.payload.end
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

        onClearCita: ( state ) => {
            state.cita = []
            state.citaActiva = null
            state.pagination = null
        },
   }
});


// Action creators are generated for each case reducer function
export const { isOpenCita, onGetCita, onGetCitaInit, onCreateCita, onUpdateCita, onGetCitaActiva, onClearCitaActiva, onClearCita, onGetPagination, onGetDatePagination } = CitasSlice.actions;