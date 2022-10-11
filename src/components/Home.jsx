import React from 'react'
import Header from "./Header";
import Products from "./Products";

function Home({posts}) {

/** 
 * The Home Component allows us to keep a clean code
 * By organizing the components we need In our home page.
 * In our Case, we will need the header showing the title "POSTS"
 * And Our List of Products (More Details About It in Producrs components)
 */

  return (
    <>
        <Header title = {"POSTS"}/>
        <Products posts = {posts}/>  
    </>
  )
}

export default Home