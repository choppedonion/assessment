import React from 'react'
import Header from "./Header";
import Products from "./Products";

function Home({posts}) {
  return (
    <>
        <Header title = {"POSTS"}/>
        <Products posts = {posts}/>  
    </>
  )
}

export default Home