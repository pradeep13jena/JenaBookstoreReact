import React, {useContext} from "react";
import booksContext from '../utils/booksContext.js'

export default function BookmarkCard(Props) {

  const {booksC, setBooksC} = useContext(booksContext)
  function handleBookmark(id){
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
    <div className="Bookmarkbooks">
      <div className="bookmarkImage">
        <img src={Props.src} alt={Props.alt} />
      </div>
      <div className="bookmarkDetails">          
        <h2 id="bookmarkTitle">{Props.title}</h2>
        <p id="bookmarkAuthor">{Props.author}</p>
        <p id="bookmarkPages">Pages: {Props.pages}</p>
        <p id="bookmarkRating">Rating: {Props.rating}</p>
      </div>
      <div className="bookmarkButtons">
          <button id="bmButtonBM" onClick={() => handleBookmark(Props.id)}><i className="fa-solid fa-bookmark"></i></button>
          <button id="bmButtonBuy"><i className="fa-solid fa-bag-shopping"></i></button>
          <button id="bmButtonCart"><i className="fa-solid fa-cart-shopping"></i></button>
      </div>
    </div>
  );
}
