import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    usuarioActivo: object | null;
    usuarios: object[];
}

const initialState: AuthState = {
    usuarioActivo: null,
    usuarios: []
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
       getUsuarioActivo: ( state, action: PayloadAction<object> ) => {
           state.usuarioActivo = action.payload
        },
       getUsuarios: ( state, action: PayloadAction<object[]> ) => {
           state.usuarios = action.payload
        },

       logoutAuth: ( state ) => {
            state.usuarioActivo = null
            state.usuarios = []
        },
   }
});


// Action creators are generated for each case reducer function
export const { getUsuarioActivo, getUsuarios, logoutAuth } = authSlice.actions;