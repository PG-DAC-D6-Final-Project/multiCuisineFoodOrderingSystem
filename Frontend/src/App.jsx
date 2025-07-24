import './App.css'
import ActiveOrders from './pages/delivery/ActiveOrders'
import AvailableOrders from './pages/delivery/AvailableOrders'
import Dashboard from './pages/delivery/Dashboard'

import DeliveryLayout from './pages/delivery/DeliveryLayout'
import { Route, Routes } from 'react-router-dom'
import OrderHistory from './pages/delivery/OrderHistory'
import Profile from './pages/delivery/Profile'

function App() {

  return (
    <>
      <Routes>
        <Route path="/delivery" element={<DeliveryLayout />} >
          <Route path="" element={<Dashboard />} />
          <Route path="active" element={<ActiveOrders />} />
          <Route path="available" element={<AvailableOrders />} />
          <Route path="history" element={<OrderHistory />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
