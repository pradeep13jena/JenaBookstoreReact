import React from "react";
import { Link } from "react-router-dom";

export default function BookCard(Props){
  return (
    <>
      <Link to={`/${Props.title}`} className="books">
        <img src={Props.src} alt={Props.alt}/>
        <div className="stuffs">
          <h2 id="bookTitle">{Props.title}</h2>
          <p id="bookAuthor">{Props.author}</p>
          <p id="bookDesc">{Props.desc}</p>
        </div>
      </Link>
    </>
  )
}