// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.step}
    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
}

function Counter({step = 1, initialState = 0}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialState,
  })

  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
