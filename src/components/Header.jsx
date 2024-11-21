import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <h1>Jena's Book Store</h1>
      </div>
      <div className="menus">
        <Link to={`/Bookmark`} className='bookmark'><i className="fa-solid fa-book-bookmark"></i></Link>
        <p className='toggle'><i className="fa-regular fa-moon"></i></p>
      </div>
    </div>
  )
}
