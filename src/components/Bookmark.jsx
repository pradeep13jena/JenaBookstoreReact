import React from 'react'
import books from '../utils/bookDataNew'
import BookCard from './Books'

export default function Bookmark() {
  const filterIt = books.filter(book => book.is_bookmarked == true)
  return (
    <section>
      <div className="bookList">
        {filterIt.map(book => <BookCard key={book['id']} src={book["image_url"]} alt={book["alt"]} title={book["title"]} author={book["author"]} desc={book["description"]}/>)}
      </div>
    </section>
  )
}
