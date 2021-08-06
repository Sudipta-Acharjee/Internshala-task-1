import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: parseFloat('3.5'),
  },
  reducers: {
    increment: (state) => {
      let x=parseFloat('0.1');
      state.value += x;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
})

export const { increment, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer