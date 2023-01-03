import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface citasState {
    isOpen: boolean
}

const initialState: citasState = {
    isOpen: false
}

export const dialogConfirmSlice = createSlice({
   name: 'dialogConfirm',
   initialState,
   reducers: {
        isOpenDialogConfirm: (state, action: PayloadAction<boolean> ) => {
            state.isOpen = action.payload;
        },
   }
});


// Action creators are generated for each case reducer function
export const { isOpenDialogConfirm } = dialogConfirmSlice.actions;