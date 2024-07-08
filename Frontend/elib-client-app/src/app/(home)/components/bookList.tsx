
import React from "react";
import BookCard from "./BookCard";
import { Book } from "@/types";

const BookList = async () => {

    const response = await fetch(`${process.env.BASE_BAKEND__URL}/books` ,{ cache: 'no-store' })
    if(!response.ok)
      {
        return new Error('an error occuered while fetching the books')
      }
      const books =await response.json()
      console.log('books:',books);
    return (
        <div className="grid grid-cols-3 gap-8 md:grid-3 max-w-7xl mx-auto mb-10">
            {
                books.map((book:Book) => (
                    <BookCard key={book._id} book={book}/>
                ))
            }

        </div>
    )
}

export default BookList