import React from 'react'
import Sidebar from '../templates/Sidebar'
import { Outlet } from 'react-router-dom'

export default function App(){
  return (
    <>
       <Sidebar/>
       <main>
         <Outlet/>
       </main>
    </>
  )
}