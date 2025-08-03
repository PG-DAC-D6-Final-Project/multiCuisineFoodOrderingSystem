import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationPage from './pages/restaurant/Registration'
import Dashboard from './pages/restaurant/Dashboard'
import {BrowserRouter, Route,Routes} from 'react-router-dom'

import {Button} from "./components/ui/button"
import ShowOrders from './pages/restaurant/ShowOrders'
import RestaurantRegistration from './pages/restaurant/RestaurantRegistration'
import AddFoodItem from './pages/restaurant/AddMenuItems'
import EditRestaurantProfile from './pages/restaurant/EditProfile'
import EditMenuItem from './pages/restaurant/EditMenuItem'
import RemoveMenuItems from './pages/restaurant/RemoveItems'
import RestaurantLayout from './pages/restaurant/RestaurantLayout'

function App() {

  return (
  <>
  <Routes>
    <Route path='/restaurant' >
    <Route path='Register' element={<RestaurantRegistration />}/>
    <Route path="" element={<RegistrationPage />} />
    <Route path='/restaurant' element={<RestaurantLayout />}> 
    
    <Route path="Dashboard" element={<Dashboard />} />
    <Route path="Orders" element={<ShowOrders />} />
    
    <Route path='AddItem' element={<AddFoodItem />}/>
    <Route path='EditProfile' element={<EditRestaurantProfile />}/>
    <Route path='EditItem' element={<EditMenuItem />}/>
    <Route path='DeleteItem' element={<RemoveMenuItems />}/></Route>
    </Route>
  </Routes>
  </>
  )
}

export default App
