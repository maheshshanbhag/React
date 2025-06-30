import React,{useCallback, useEffect, useState,useRef} from 'react'

// useCallback = "Here is the latest version of the function, ready to be used."
// useEffect = "Now that something changed, let's actually run that function."

const App = () => {

  const passRef = useRef("")
  
  const [length, setLength] = useState(8)
  const [isNumberAllowed, setIsNumberAllowed] = useState(false)
  const [isCharAlllowd,setIsCharAllowed ] = useState(false)
  const [password, setPassword] = useState("")
  const [copie, setCopie] = useState("copy")


  const handlePassword = useCallback(()=>{
    let pass = ""
    let str ="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(isNumberAllowed){
      str += "1234567890"
    }
    if(isCharAlllowd){
      str += "!@#$%^&*()_+"
    }
    
    for(let i = 0;i<length;i++){
      let rand = Math.floor(Math.random()*str.length)
      pass += str.charAt(rand)
    }

    setPassword(pass)

  },[length,isNumberAllowed,isCharAlllowd]) //Only make a new version of handlePassword when one of the dependencies changes

  useEffect(()=>{
    handlePassword()
  },[length,isNumberAllowed,isCharAlllowd,handlePassword]) // if any of the dependecy changes call the funtion

  const handleCopy = ()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password)
    setCopie("copied")
    
    setInterval(()=>{
      setCopie("copy")
    },1000)
  }
  return (
    <>
      <div className='h-screen w-full bg-zinc-950 flex flex-col items-center '>
        <h1 className='text-white text-4xl font-bold text-center '>password generator</h1>
        <div className=' mt-4 bg-amber-300 p-4 rounded-xl w-fit '>
            <div className='flex flex-row items-center mt-2 bg-amber-300 p-4 rounded-xl w-fit '>
              <input type="text" className='bg-white p-2'
              placeholder='password'
              value={password}
              ref={passRef}
              />
              <button className='bg-blue-600 cursor-pointer text-white p-2 rounded-xl ml-4'
              onClick={handleCopy}
              >{copie}</button>
            </div>
            <div className='flex flex-row gap-1 items-center mt-2  p-4 rounded-xl w-fit '>
                <input type="range"
                 min={2}
                 max={99}
                 value={length}
                 onChange={(e)=>{setLength(e.target.value)}}
                 />
                 <label className='ml-2 mr-3'>length:{length}</label>

                 <input type="checkbox"
                  onChange={()=>{setIsNumberAllowed(!isNumberAllowed)}}
                  />
                  <label>Number</label>
                  <input type="checkbox" className='ml-2'
                   onChange={() => {
                    setIsCharAllowed((prev) => !prev);
                  }}
                  />
                  <label>charcter</label>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default App