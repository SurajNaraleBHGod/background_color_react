import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("black")

  return (
    
    <div className="h-screen "
    style={{backgroundColor:color}}
    >
      <div className="fixed flex felx-wrep justify-center bottom-12 inset-x-0 px-2 text-white">
        <div className="flex flex-wrep justify-center gap-3 shadow-lg bg-white rounded-full p-2"> 
          <button
          className="outline-none px-4  rounded-full"
          style={{backgroundColor:"red"}} onClick={()=>{
            console.log(setColor("red"))
          }}
          >Red</button>
           <button
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor:"green"}}
          onClick={()=>{
            console.log(setColor("green"))
          }}
          >Green</button>
           <button
          className="outline-none px-4 py-1 rounded-full"
          style={{backgroundColor:"blue"}}
          onClick={()=>{
            console.log(setColor("blue"))
          }}
          >blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
