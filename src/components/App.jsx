import { useState } from 'react'
import '../assets/style.css'
import books from '../utils/bookDataNew.js'
import Header from './Header.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
