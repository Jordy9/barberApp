import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface sumService {
    title: string;
    count: number 
}

export interface ratingPropsIt {
    cardInfo: number[];
    minTime: string;
    preferTime: string;
    ratingSum: number;
    sumService: sumService[]
}

interface ratingProps {
    rating: ratingPropsIt | null
}

const initialState: ratingProps = {
    rating: null
}

export const ratingSlice = createSlice({
   name: 'rating',
   initialState,
   reducers: {
       onGetRating: (state, action: PayloadAction<ratingPropsIt> ) => {
           state.rating = action.payload;
        }
   }
});


// Action creators are generated for each case reducer function
export const { onGetRating } = ratingSlice.actions;