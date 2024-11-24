import { useState } from 'react'
import '../assets/style.css'
import Header from './Header.jsx'
import books from '../utils/bookDataNew.js'
import booksContext from '../utils/booksContext.js'
import { Outlet } from 'react-router-dom'

function App() {

  const [booksC, setBooksC] = useState(books)

  return (
    <booksContext.Provider value={{booksC, setBooksC}}>
      <Header/>
      <Outlet/>
    </booksContext.Provider>
  )
}

export default App
