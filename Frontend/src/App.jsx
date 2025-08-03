import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

function App() {

  return (
     <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/profile' element={<CustomerProfile />}/>
        <Route path='/UpdateCustomerProfile' element={<UpdateCustomerProfile />} />
        <Route path='/CustomerPastOrders' element={<CustomerPastOrders />}/>
        <Route path='/viewAllRestaurants' element={<ViewAllRestaurants />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </div>
  )
}

export default App
