import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface citasState {
    isOpen: boolean
    function?: Function | undefined;
    content?: string
}

const initialState: citasState = {
    isOpen: false,
    function: () => {},
    content: ''
}

export const dialogConfirmSlice = createSlice({
   name: 'dialogConfirm',
   initialState,
   reducers: {
        isOpenDialogConfirm: (state, action: PayloadAction<citasState> ) => {
            state.content = action.payload.content;
            state.function = action.payload.function;
            state.isOpen = action.payload.isOpen;
        },
   }
});


// Action creators are generated for each case reducer function
export const { isOpenDialogConfirm } = dialogConfirmSlice.actions;