import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rating } from '../../interfaces/ratingForm';

interface ratingProps {
    rating: Rating[] | null
}

const initialState: ratingProps = {
    rating: null
}

export const ratingSlice = createSlice({
   name: 'rating',
   initialState,
   reducers: {
       onGetRating: (state, action: PayloadAction<Rating[]> ) => {
           state.rating = action.payload;
        },
       onCreateRating: (state, action: PayloadAction<Rating> ) => {
           state.rating?.unshift(action.payload);
        },
   }
});


// Action creators are generated for each case reducer function
export const { onGetRating, onCreateRating } = ratingSlice.actions;