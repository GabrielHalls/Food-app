import Food from './components/Food'
import { useState } from 'react'

import './App.css'

function App() {
  const [input, setIput] = useState("")

  const handleSubmit = (event)=>{
   event.preventDefault()
   setIput("")
   
   
  }

  return (
    <div className='App'>

      <div className='pesquisa'>
        <h1>Food App</h1>

        <form onSubmit={handleSubmit}>


          <input onChange={(e)=> setIput(e.target.value)} type="text" value={input}/>
          <button type='Submit'>Submit</button>



        </form>
          <h1>{input}</h1>
      </div>



    </div>


  )
}

export default App
