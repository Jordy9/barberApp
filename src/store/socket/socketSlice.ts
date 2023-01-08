import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as io from 'socket.io-client';

interface socketState {
   socket: io.Socket | null
}

const initialState: socketState = {
   socket: null
}

export const socketSlice = createSlice({
   name: 'socket',
   initialState,
   reducers: {
      startSocket: (state, action ) => {
         state.socket = action.payload
      },
   }
});


// Action creators are generated for each case reducer function
export const { startSocket } = socketSlice.actions;