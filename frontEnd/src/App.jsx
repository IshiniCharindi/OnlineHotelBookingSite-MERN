import { useState } from 'react'
import './App.css'
import Home from "./Components/User Section/Home page/Home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Home/>
    </>
  )
}

export default App
