import {createSlice} from '@reduxjs/toolkit';

import {cardMidData} from "@models/interfeic/categoryDataType";
import {NewsCardData} from "@models/interfeic/newsCardData";
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
    value: number | undefined;
    card: NewsCardData[];
    cardMidData: cardMidData[];

}

const initialState: CounterState = {
    value: undefined,
    card: [],
    cardMidData: [],
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        IdCard: (state, action: PayloadAction<any>) => {
            state.value = action.payload;
            console.log(state.value);
        },
        CardData: (state, action) => {
            state.card = action.payload;
        },
    },
});

export const {IdCard, CardData} = counterSlice.actions;

export default counterSlice.reducer;
