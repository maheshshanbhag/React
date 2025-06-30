import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [count, setCount] = useState(5)

  const handleIncremrnt = ()=>{

    setCount(count + 1)
    setCount((preCounter)=>preCounter + 1)
  }
  const handleDcrement = ()=>{
    setCount(count - 1)
  }
  return (
    <>
      <h1>hello world {count} </h1>
      <button onClick={handleIncremrnt}>Increment</button>
      <button onClick={handleDcrement}>decrement</button>
    </>
  )
}

export default App
