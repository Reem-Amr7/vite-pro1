import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import SubFooter from '../SubFooter/SubFooter'

export default function Layout() {
  return (
    <div>
      <Navbar/>
    <Outlet/>
      <SubFooter/>
      <Footer/>
    </div>
  )
}
