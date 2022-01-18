import React, { useContext } from 'react'
import { BookContext } from './BookContext'

export default function Navbar() {
    const [books, setBooks] = useContext(BookContext)
    console.log(books)
    return (
        <div>
            <nav style={{ height: "40px",
             backgroundColor: "black",
             color: "white", textAlign: "center" }}>
                Total no. of Books - {books.length}
            </nav>
        </div>
    )
}
