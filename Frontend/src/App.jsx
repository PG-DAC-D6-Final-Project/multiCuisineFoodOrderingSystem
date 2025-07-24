import './App.css'
import Dashboard from './pages/delivery/Dashboard'

import DeliveryLayout from './pages/delivery/DeliveryLayout'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/delivery" element={<DeliveryLayout />} >
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
