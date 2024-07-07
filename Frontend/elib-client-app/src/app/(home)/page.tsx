import React from "react"
import Image from 'next/image';
import Banner from "./components/Banner";
import BookList from "./components/bookList";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_BAKEND__URL}/books` ,{ cache: 'no-store' })
  if(!response.ok)
    {
      return new Error('an error occuered while fetching the books')
    }
    const books =await response.json()
    console.log('books:',books);
    
  return (
    <>
    <Banner />
    <BookList books={books}/>
    </>
  )
}
