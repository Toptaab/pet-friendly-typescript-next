'use client'
import React from 'react'

import { useAppSelector, useAppDispatch } from '@/lib/hooks'
import { decrement, increment, selectCount } from '@/lib/features/counter/counterSlice'

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <>
    <h1>{count}</h1>
    <button className='btn bg-green-400 p-4 hover:bg-green-700' onClick={() => dispatch(increment())}>increment</button>
    <button className='btn bg-red-400 p-4 hover:bg-red-700'onClick={() => dispatch(decrement())}>decrement</button>
    </>
  )
}