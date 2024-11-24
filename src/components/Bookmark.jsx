import React, {useContext, useEffect} from 'react'
import booksContext from '../utils/booksContext'
import BookmarkCard from './bookmarkCard'
import '../assets/BookmarkCard.css'

export default function Bookmark() {
  const {booksC, setBooksC} = useContext(booksContext)
  useEffect(() => {
    const alpha = JSON.parse(localStorage.getItem('books'))
    if(alpha){
      setBooksC(alpha)
    } 

  }, [])

  const filterIt = booksC.filter(book => book.is_bookmarked == true)
  return (
    <div className="bookmarkList">
      {filterIt.length ? filterIt.map(book => <BookmarkCard key={book['id']} id={book['id']} src={book["image_url"]} alt={book["alt"]} title={book["title"]} author={book["author"]} pages={book['pages']} rating={book['rating']}/>) : <h3 className='bookmarkNo'>No books to display</h3>}
    </div>
  )
}
