import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Negocio } from '../../interfaces/negocioInterface';

interface negocioState {
    negocio: Negocio[]
}

const initialState: negocioState = {
    negocio: []
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
   }
});


// Action creators are generated for each case reducer function
export const { onGetNegocio, onCreateNegocio, onUpdateNegocio } = negocioSlice.actions;