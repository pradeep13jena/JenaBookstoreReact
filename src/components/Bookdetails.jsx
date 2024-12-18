import React, { useContext } from 'react'
import '../assets/Bookdetails.css'
import books from '../utils/bookDataNew'
import { Link, useParams } from 'react-router-dom'
import booksContext from '../utils/booksContext.js'

export default function Bookdetails() {
  const params = useParams().book
  const bookArray = books.filter(book => book.title == params)
  let alpha = bookArray[0]
  const genres = alpha.genre

  const {booksC, setBooksC} = useContext(booksContext)
  function handleBookmark(id){
    console.log()
    const newArray = booksC.map(book => {
      if(book.id == id){
        return {...book, is_bookmarked: !book.is_bookmarked}
      } else {
        return book
      }
    })
    setBooksC(newArray)
    localStorage.setItem('books', JSON.stringify(newArray))
  }

  return (
    <div className="books-details-container" key={alpha.id}>
      <div className="book-image-container">
        <img src={alpha.image_url} alt={alpha.title + ' book cover image'} />
      </div>
      <div className="book-info-container">
        <div className="book-header">
          <h1 id='alphaTitle'> {alpha.title}</h1>
          <h3 id='alphaAuthor'>{alpha.author}</h3>
        </div>
        <div className="book-text">
          <h2 id='alphaPrice'>{alpha.price}</h2>
          <p id='alphaISBN'><b>ISBN: </b> {alpha.isbn}</p>
          <p id='alphaPages'><b>Page: </b>{alpha.pages}</p>
          <p id='alphaLang'><b>Language: </b> {alpha.language}</p>
          <p id='alphaFormat'><b>Format: </b>{alpha.format}</p>
          <p id='alphaPublish_date'><b>Publish Date:</b> {alpha.publish_date}</p>
          <p id='alphaPublisher'><b>Publisher:</b> {alpha.publisher}</p>
          <p id='alphaSummary'><b>Summary:</b> {alpha.summary}</p>
          <p id="bookGenre">
          <b>Genre: </b>{genres.map((genre, index) => <Link to={`/genre/${genre}`} key={index} id='alphaGenre'>{genre}</Link>)}
          </p>
        </div>
        <div className='book-button-static'>
          <button className='buyButton'>Buy Now</button>
          <button className='AddToCart'>Add to Cart</button>
          <button className='NextRead'>Bookmark </button>
        </div>
        <div className='book-button'>
          <button className='buyButton'>Buy Now</button>
          <button className='AddToCart'>Add to Cart</button>
          <button className='NextRead' onClick={() => handleBookmark(alpha.id)}>Bookmark</button>
        </div>
      </div>
    </div>
  )
}
