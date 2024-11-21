import React, {useState} from 'react'
import books from '../utils/bookDataNew'
import BookCard from './Books'

export default function BrowsePage() {
  
  const [searchBook, setSearchBook] = useState("")
  const [filterBooks, setFilterBooks] = useState(books)

  function FilterTheBook(){
    setFilterBooks(books.filter(book => 
      book.title.toLowerCase().includes(searchBook.toLowerCase())
    ))
  }
  return (
    <section>
      <div className="searchBar">
          <input type="text" className='inputbox' placeholder='Search books...' onChange={(e) => setSearchBook(e.target.value)}/>
          <button className='searchBTN' onClick={FilterTheBook}><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className="bookList">
        {filterBooks.map(book => <BookCard key={book['id']} src={book["image_url"]} alt={book["alt"]} title={book["title"]} author={book["author"]} desc={book["description"]}/>)}
      </div>
    </section>
  )
}
