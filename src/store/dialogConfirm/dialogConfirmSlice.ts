import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface citasState {
    isOpen: boolean
    function?: Function | undefined;
    argu?: boolean | number | string | object
    content?: string
    notice?: string
}

const initialState: citasState = {
    isOpen: false,
    function: () => {},
    content: '',
    notice: '',
    argu: ''
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
        },
   }
});


// Action creators are generated for each case reducer function
export const { isOpenDialogConfirm } = dialogConfirmSlice.actions;