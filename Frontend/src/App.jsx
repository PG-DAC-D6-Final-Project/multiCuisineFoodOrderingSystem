import './App.css'

import Home from './pages/User/Home'
import {Route, Router, Routes } from 'react-router-dom'
import Login from './pages/User/Login'
import Register from './pages/User/Register'
import Cart from './pages/User/Cart'
import CustomerProfile from './pages/User/CustomerProfile'
import UpdateCustomerProfile from './components/user/UpdateCustomerProfile'
import CustomerPastOrders from './pages/User/CustomerPastOrders'
import ViewAllRestaurants from './pages/User/ViewAllRestaurants'
import Checkout from './pages/User/Checkout'

import ActiveOrders from './pages/delivery/ActiveOrders'
import AvailableOrders from './pages/delivery/AvailableOrders'
import Dashboard from './pages/delivery/Dashboard'

import DeliveryLayout from './pages/delivery/DeliveryLayout'

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
        <Route path="/customer" >
        <Route path="" element={<Home />} />
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Register />}/>
        <Route path='cart' element={<Cart />}/>
        <Route path='profile' element={<CustomerProfile />}/>
        <Route path='UpdateCustomerProfile' element={<UpdateCustomerProfile />} />
        <Route path='CustomerPastOrders' element={<CustomerPastOrders />}/>
        <Route path='viewAllRestaurants' element={<ViewAllRestaurants />}/>
        <Route path='checkout' element={<Checkout />}/>
        </Route>
      </Routes>
    </>

  )
}

export default App
