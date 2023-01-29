import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface citasState {
    isOpen: boolean
    function?: Function | undefined;
    argu?: boolean | number | string | object
    content?: string
    notice?: string
    button1?: string
    button2?: string
}

const initialState: citasState = {
    isOpen: false,
    function: () => {},
    content: '',
    notice: '',
    argu: '',
    button1: 'No',
    button2: 'Si'
}

export const dialogConfirmSlice = createSlice({
   name: 'dialogConfirm',
   initialState,
   reducers: {
        isOpenDialogConfirm: (state, action: PayloadAction<citasState> ) => {
            state.content = action.payload.content;
            state.notice = action.payload.notice;
            state.function = action.payload.function;
            state.argu = action.payload.argu;
            state.isOpen = action.payload.isOpen;
            state.button1 = action.payload.button1
            state.button2 = action.payload.button2
        },
   }
});


// Action creators are generated for each case reducer function
export const { isOpenDialogConfirm } = dialogConfirmSlice.actions;