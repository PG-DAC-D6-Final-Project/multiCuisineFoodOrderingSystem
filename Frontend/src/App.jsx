import Admin from "./pages/admin/admin";
import "./App.css";
import RegistrationPage from "./pages/restaurant/Registration";
import RestaurantDashboard from "./pages/restaurant/Dashboard";
import { Route, Routes } from "react-router-dom";

import OrderDetailsPage from "./components/admin/OrderDetails";
import ShowOrders from "./pages/restaurant/ShowOrders";
import RestaurantRegistration from "./pages/restaurant/RestaurantRegistration";
import AddFoodItem from "./pages/restaurant/AddMenuItems";
import EditRestaurantProfile from "./pages/restaurant/EditProfile";
import EditMenuItem from "./pages/restaurant/EditMenuItem";
import RemoveMenuItems from "./pages/restaurant/RemoveItems";
import RestaurantLayout from "./pages/restaurant/RestaurantLayout";
import RestaurantDetailsPage from "./components/admin/RestaurantDetailsPage";

import Home from "./pages/User/Home";

import Login from "./pages/User/Login";
import Register from "./pages/User/Register";
import Cart from "./pages/User/Cart";
import CustomerProfile from "./pages/User/CustomerProfile";
import UpdateCustomerProfile from "./components/user/UpdateCustomerProfile";
import CustomerPastOrders from "./pages/User/CustomerPastOrders";
import ViewAllRestaurants from "./pages/User/ViewAllRestaurants";
import Checkout from "./pages/User/Checkout";

import ActiveOrders from "./pages/delivery/ActiveOrders";
import AvailableOrders from "./pages/delivery/AvailableOrders";
import Dashboard from "./pages/delivery/Dashboard";

import DeliveryLayout from "./pages/delivery/DeliveryLayout";
import DeliveryAgentDetailsPage from "./components/admin/DeliveryAgentDetails";
import OrderHistory from "./pages/delivery/OrderHistory";
import Profile from "./pages/delivery/Profile";
import RegisterDeliveryAgent from "./pages/delivery/RegisterDeliveryPerson";
import LoginDeliveryPerson from "./pages/delivery/LoginDeliveryPerson";
import MenuItemsByCuisine from "./pages/User/MenuItemsByCuisine";
import ViewOrders from "./pages/User/ViewOrders";
import MenuItemsByRestaurants from "./pages/User/MenuItemsByRestaurants";
import ReviewPage from "./pages/User/Review";

function App() {
  return (
    <>
      <Routes>
        <Route path="/delivery">
          <Route path="login" element={<LoginDeliveryPerson />} />
          <Route path="register" element={<RegisterDeliveryAgent />} />
          <Route path="" element={<DeliveryLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="active" element={<ActiveOrders />} />
            <Route path="available" element={<AvailableOrders />} />
            <Route path="history" element={<OrderHistory />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="" element={<Home />} />
        <Route path="/customer">
          {/* <Route path="" element={<Home />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<CustomerProfile />} />
          <Route
            path="UpdateCustomerProfile"
            element={<UpdateCustomerProfile />}
          />
          <Route path="CustomerPastOrders" element={<CustomerPastOrders />} />
          <Route path="viewAllRestaurants" element={<ViewAllRestaurants />} />
          <Route path="viewRestaurantMenuItems" element={<MenuItemsByRestaurants />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cuisine/:id" element={<MenuItemsByCuisine />} />
          <Route path="orders" element={<ViewOrders />} />
          <Route path="rate/:orderId" element={<ReviewPage />} />
        </Route>

        <Route path="/restaurant">
          <Route path="Register" element={<RestaurantRegistration />} />
          <Route path="" element={<RegistrationPage />} />
          <Route path="" element={<RestaurantLayout />}>
            <Route path="Dashboard" element={<RestaurantDashboard />} />
            <Route path="Orders" element={<ShowOrders />} />

            <Route path="AddItem" element={<AddFoodItem />} />
            <Route path="EditProfile" element={<EditRestaurantProfile />} />
            <Route path="EditItem/:id" element={<EditMenuItem />} />
            <Route path="DeleteItem" element={<RemoveMenuItems />} />
          </Route>
        </Route>
        <Route path="/admin">
          <Route path="" element={<Admin />} />
          <Route path="restaurants/:id" element={<RestaurantDetailsPage />} />
          <Route path="orders/:id" element={<OrderDetailsPage />} />
           <Route path="delivery-agents/:id" element={<DeliveryAgentDetailsPage />} />
        </Route>
      </Routes >
    </>
  );
}

export default App;
