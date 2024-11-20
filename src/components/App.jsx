import { useState } from 'react'
import '../assets/style.css'
import BookCard from './Books'
import books from '../utils/bookDataNew.js'

function App() {
  const [searchBook, setSearchBook] = useState("")
  const [filterBooks, setFilterBooks] = useState(books)

  function FilterTheBook(){
    setFilterBooks(books.filter(book => 
      book.title.toLowerCase().includes(searchBook.toLowerCase())
    ))
  }

  console.table(books)

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

export default App
