import React, { useState } from 'react'
import BookCard from './Books.jsx'
import { useParams } from 'react-router-dom'
import books from '../utils/bookDataNew.js'

export default function Genre() {
  const {cate} = useParams()
  const alpha = books.filter(book => book.genre.includes(cate))

  return (
    <>
      <div className="genreClass">
        <h1 id='genrename'>{cate}</h1>
      </div>
      <div className="bookList">
        {alpha.map(book => <BookCard key={book['id']} src={book["image_url"]} alt={book["alt"]} title={book["title"]} author={book["author"]} desc={book["description"]}/>)}
      </div>
    </>
  )
}
