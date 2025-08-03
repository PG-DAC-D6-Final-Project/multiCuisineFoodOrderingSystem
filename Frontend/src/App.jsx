import './App.css'
import RegistrationPage from './pages/restaurant/Registration'
import RestaurantDashboard from './pages/restaurant/Dashboard'
import {BrowserRouter, Route,Routes} from 'react-router-dom'


import {Button} from "./components/ui/button"
import ShowOrders from './pages/restaurant/ShowOrders'
import RestaurantRegistration from './pages/restaurant/RestaurantRegistration'
import AddFoodItem from './pages/restaurant/AddMenuItems'
import EditRestaurantProfile from './pages/restaurant/EditProfile'
import EditMenuItem from './pages/restaurant/EditMenuItem'
import RemoveMenuItems from './pages/restaurant/RemoveItems'
import RestaurantLayout from './pages/restaurant/RestaurantLayout'

import Home from './pages/User/Home'

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
import RegisterDeliveryAgent from './pages/delivery/RegisterDeliveryPerson'


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
          <Route path="register" element={<RegisterDeliveryAgent />} />
        </Route>
        <Route path="/customer" >
          <Route path="" element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='cart' element={<Cart />} />
          <Route path='profile' element={<CustomerProfile />} />
          <Route path='UpdateCustomerProfile' element={<UpdateCustomerProfile />} />
          <Route path='CustomerPastOrders' element={<CustomerPastOrders />} />
          <Route path='viewAllRestaurants' element={<ViewAllRestaurants />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
          <Route path='/restaurant' element={<RestaurantLayout />}>
            <Route path='Register' element={<RestaurantRegistration />}/>
            <Route path="" element={<RegistrationPage />} />
            {/* <Route path='/restaurant' element={<RestaurantLayout />}>  */}

            <Route path="Dashboard" element={<RestaurantDashboard />} />
            <Route path="Orders" element={<ShowOrders />} />

            <Route path='AddItem' element={<AddFoodItem />}/>
            <Route path='EditProfile' element={<EditRestaurantProfile />}/>
            <Route path='EditItem' element={<EditMenuItem />}/>
            <Route path='DeleteItem' element={<RemoveMenuItems />}/></Route>
            
      </Routes>
    </>
  )
}

export default App
