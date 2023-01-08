import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface negocioState {
    negocio: any[]
}

const initialState: negocioState = {
    negocio: []
}

export const negocioSlice = createSlice({
   name: 'negocio',
   initialState,
   reducers: {
       onGetNegocio: (state, action: PayloadAction<negocioState[]> ) => {
           state.negocio = action.payload
        },

       onCreateNegocio: (state, action: PayloadAction<negocioState> ) => {
           state.negocio.push(action.payload)
        },
       onUpdateNegocio: (state, action: any ) => {
           state.negocio = state.negocio.map(
            e => e._id === action.payload._id ? action.payload : e
           )
        },
   }
});


// Action creators are generated for each case reducer function
export const { onGetNegocio, onCreateNegocio, onUpdateNegocio } = negocioSlice.actions;