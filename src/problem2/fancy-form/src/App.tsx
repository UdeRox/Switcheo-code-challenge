import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import { SendToken } from './component/SendToken'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className="App">
      <SendToken />
    // </div>
  )
}

export default App
