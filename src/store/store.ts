import { configureStore } from '@reduxjs/toolkit'
import { CitasSlice } from './citas/CitasSlice';
import { dialogConfirmSlice } from './dialogConfirm/dialogConfirmSlice';

export const store = configureStore({
  reducer: {
    ct: CitasSlice.reducer,
    dc: dialogConfirmSlice.reducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch