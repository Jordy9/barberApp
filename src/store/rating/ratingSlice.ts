import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Rating, RatingForm } from '../../interfaces/ratingForm';

interface ratingProps {
    rating: RatingForm[] | null
}

const initialState: ratingProps = {
    rating: null
}

export const ratingSlice = createSlice({
   name: 'rating',
   initialState,
   reducers: {
       onGetRating: (state, action: PayloadAction<RatingForm[]> ) => {
           state.rating = action.payload;
        },
       onCreateRating: (state, action: PayloadAction<RatingForm> ) => {
           state.rating?.unshift(action.payload);
        },
   }
});


// Action creators are generated for each case reducer function
export const { onGetRating, onCreateRating } = ratingSlice.actions;