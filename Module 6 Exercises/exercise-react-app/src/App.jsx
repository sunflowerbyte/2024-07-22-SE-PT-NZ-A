import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Components/Greeting'
import BigCats from './Components/BigCats'
import Emoji from './Components/Emoji'
import Calculator from './Components/Calculator'
function App() {

  return (
    <>
    <Greeting name="Tricia">
      <div>
        <h3>This is a children support message</h3>
      </div>
    </Greeting>
    <BigCats></BigCats>

    <Emoji></Emoji>
    <Calculator></Calculator>
    </>


  )
}

export default App
