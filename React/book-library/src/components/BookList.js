import React, { useContext } from 'react'
import Book from './Book'
import { BookContext } from './BookContext'

export default function BookList() {
    const [books, setBooks] = useContext(BookContext)
    console.log(books)
    return (
        <div>

            <h1>List Of Books...</h1>
            {books && books.map((book)=>{
                return(
                    <Book bookname={book.bookName} bookprice={book.bookPrice} bookauthor={book.bookAuthor}/>
                )

            })}
        </div>
    )
}
