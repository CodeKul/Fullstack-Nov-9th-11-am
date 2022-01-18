import React, { createContext, useState } from 'react'


export const BookContext = createContext()

export default function BookProvider(props) {

    const [books, setBooks] = useState(

        [
            {
                bookName: "XYZ",
                bookAuthor: "Nicholas Sparks",
                bookPrice: 299
            },

            {
                bookName: "Python",
                bookAuthor: "Guido van Rossum",
                bookPrice: 399
            },

            {
                bookName: "Harry Potter",
                bookAuthor: "J.K.Rowling",
                bookPrice: 599
            },

            {
                bookName: "Java",
                bookAuthor: "James Gosling",
                bookPrice: 499
            },

            {
                bookName: "C",
                bookAuthor: "Dennis Ritchie",
                bookPrice: 299
            },
        ]
    )
    return (
        <div>
            <BookContext.Provider value={[books, setBooks]}>
                {props.children}
            </BookContext.Provider>
        </div>
    )
}
