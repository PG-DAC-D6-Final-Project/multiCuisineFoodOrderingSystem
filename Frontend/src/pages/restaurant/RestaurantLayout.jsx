import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../../components/ui/Nav'

function RestaurantLayout() {
  return (
    <div className='flex h-full'>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  )
}

export default RestaurantLayout
