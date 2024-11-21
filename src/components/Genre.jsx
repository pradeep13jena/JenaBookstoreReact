import React, { useState } from 'react'
import BookCard from './Books.jsx'
import { useParams } from 'react-router-dom'

export default function Genre() {
  const params = useParams()
  console.log(params)

  return (
    <h1>Hello, Genre</h1>
  )
}
