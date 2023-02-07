import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice';
import { CitasSlice } from './citas/CitasSlice';
import { dialogConfirmSlice } from './dialogConfirm/dialogConfirmSlice';
import { negocioSlice } from './negocio/negocioSlice';
import { ratingSlice } from './rating/ratingSlice';
import { socketSlice } from './socket/socketSlice';

export const store = configureStore({
  reducer: {
    ct: CitasSlice.reducer,
    dc: dialogConfirmSlice.reducer,
    auth: authSlice.reducer,
    ng: negocioSlice.reducer,
    sk: socketSlice.reducer,
    rt: ratingSlice.reducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch