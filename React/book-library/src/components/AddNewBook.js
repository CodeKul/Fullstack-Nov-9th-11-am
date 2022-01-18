import React, { useContext, useState } from 'react'
import { BookContext } from './BookContext'

export default function AddNewBook() {

    const [books, setBooks] = useContext(BookContext)
    const [bookName, setBookName] = useState("")
    const [bookAuthor, setBookAuthor] = useState("")
    const [bookPrice, setBookPrice] = useState("")
const addBook = ()=>{
    setBooks((prev) => [...prev, {bookName: bookName, bookAuthor: bookAuthor, bookPrice:bookPrice}])
}

    return (
        <div>
            <input 
            placeholder='Book Title'
            type="text"
            value={bookName}
            onChange={(e)=>{setBookName(e.target.value)}}
            />

            <input 
            placeholder='Book Author'
            type="text"
            value={bookAuthor}
            onChange={(e)=>{setBookAuthor(e.target.value)}}
              />


            <input
            placeholder='Book Price'
            type="text"
            value={bookPrice}
            onChange={(e)=>{setBookPrice(e.target.value)}} />


            <button onClick={addBook}>Add Book</button>
        </div>
    )
}
