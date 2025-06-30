import React,{useState} from 'react'

const App = () => {

  const [color, setColor] = useState("olive")
  return (
    <div className='h-screen w-full bg-zinc-400 flex flex-col justify-end items-center' style={{backgroundColor: color}}>
      <div className='bg-yellow-400 p-4 mb-4 rounded-xl flex gap-4 text-white'>
        <button  onClick={()=> setColor("red")} className='bg-red-500 p-1 rounded-full px-4' >
            red
        </button>
        <button  onClick={()=> setColor("blue")} className='bg-blue-500 p-1 rounded-full px-4' >
            blue
        </button>
        <button onClick={()=> setColor("green")} className='bg-green-500 p-1 rounded-full px-4'>
            grenn
        </button>
        <button onClick={()=>{ return setColor("black")}} className='bg-black p-1 rounded-full px-4'>
            black
        </button>
      </div>
    </div>
  )
}

export default App