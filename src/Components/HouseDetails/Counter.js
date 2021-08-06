import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value.toFixed(1));
  const dispatch = useDispatch()
  console.log(count);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increase Review
        </button>
        <span>{count}</span>
      </div>
    </div>
  )
}