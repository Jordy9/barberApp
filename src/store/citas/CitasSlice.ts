import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface citasState {
    isOpen: boolean
}

const initialState: citasState = {
    isOpen: false
}

export const CitasSlice = createSlice({
   name: 'Citas',
   initialState,
   reducers: {
       isOpenCita: (state, action: PayloadAction<boolean> ) => {
           state.isOpen = action.payload;
        },
   }
});


// Action creators are generated for each case reducer function
export const { isOpenCita } = CitasSlice.actions;