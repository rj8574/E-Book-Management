import React, { Suspense } from "react"
import Image from 'next/image';
import Banner from "./components/Banner";
import BookList from "./components/bookList";
import Loading from "@/components/Loading";


export default async function Home() {
 
    
  return (
    <>
    <Banner />
    <Suspense fallback={<Loading/>}>
       <BookList/>
    </Suspense>
    
    </>
  )
}
