import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Button} from "./components/ui/button"

function App() {

  return (
  <>
    <h1 class="md:text-3xl lg:text-9xl font-bold underline">
      Hello world!
    </h1>
    <Button className="text-red-600 bg-amber-50 border-2 border-amber-300 hover:bg-amber-400">Hello</Button>
  </>
  )
}

export default App
