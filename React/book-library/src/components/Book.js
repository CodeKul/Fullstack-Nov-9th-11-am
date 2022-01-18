import React from 'react'

import "./Book.css"

export default function Book({ bookname, bookauthor, bookprice, id }) {
    return (
        <div>
            <li>
                <span> Book Name : {bookname}</span>
                <span>   Book Author : {bookauthor} </span>
                <span>  Book Price : {bookprice} </span>

            </li>
        </div>
    )
}
