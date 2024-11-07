import React from "react";

export default function BookCard(Props){
  return (
    <>
      <div className="books">
        <img src={Props.src} alt={Props.alt}/>
        <div className="stuffs">
          <h2 id="bookTitle">{Props.title}</h2>
          <p id="bookAuthor">{Props.author}</p>
          <p id="bookDesc">{Props.desc}</p>
        </div>
      </div>
    </>
  )
}