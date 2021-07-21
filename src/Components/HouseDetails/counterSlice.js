import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 3.5,
    },
    reducers: {
      increment: (state) => {

        state.value += 0.1;
      },

      incrementByAmount: (state, action) => {
        state.value += action.payload;
      },
    },
  })
  
  export const { increment, incrementByAmount } = counterSlice.actions
  
  export default counterSlice.reducer