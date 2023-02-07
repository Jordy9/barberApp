import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Usuario } from '../../interfaces/usuarios';

interface AuthState {
    usuarioActivo: Usuario | null;
    usuarios: Usuario[];
}

const initialState: AuthState = {
    usuarioActivo: null,
    usuarios: []
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
       getUsuarioActivo: ( state, action: PayloadAction<Usuario> ) => {
           state.usuarioActivo = action.payload
        },
       getUsuarios: ( state, action: PayloadAction<Usuario[]> ) => {
           state.usuarios = action.payload
        },
       updateUsuario: ( state, action: PayloadAction<Usuario> ) => {
           state.usuarios = state.usuarios.map( 
            e => e._id === action.payload._id ? action.payload : e
           )
           
           state.usuarioActivo =  ( action.payload._id === state.usuarioActivo?._id ) ? action.payload : state.usuarioActivo
        },

       logoutAuth: ( state ) => {
            state.usuarioActivo = null
            state.usuarios = []
        },
   }
});


// Action creators are generated for each case reducer function
export const { getUsuarioActivo, getUsuarios, updateUsuario, logoutAuth } = authSlice.actions;