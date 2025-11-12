import React from 'react'
import UseActionState from './hooks/UseActionState'
import Counter from './hooks/Counter'
import Calculator from './hooks/ExpensiveCalculation'
import Parent from './hooks/Parent'
import TodoApp from './hooks/TodoApp'
import RefCounter from './hooks/RefCounter'



export const Hooks = () => {
  return (
    <>
        <UseActionState />
        <Counter />
        <Calculator />
        <Parent />
        <TodoApp />
        <RefCounter />
    </>
  )
}
