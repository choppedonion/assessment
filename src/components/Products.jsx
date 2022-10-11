import '../styles/Products.css';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Filter from "./Filter"
import ProductCard from "./ProductCard"

/**
 * Products Component show a our list of product or post
 * The posts/Products can be shown without filtring the categories
 * We can also select one or multiple Category to filter them by this criteria
 * That's why we need to upload our Data fetched using react props
 */

function Products({posts}) {

    // The array of Categories selected by the user
    const [selectedCategories, setSelectedCategories] = useState([]);

    // The array used to filter Posts by the categories selected
    const [filteredPosts, setFilteredPosts] = useState([]);

    /**
     * The element used to know the number of posts we will show
     * It will be updated each time when we Click on load more Button
     * We start by showing 5 elements
     */
    const [nbOfElement, setnbOfElement] = useState(5); 

    // This element allow us to indicate in the Load More Button the number of posts not shown yet
    const [load, setLoad] = useState("");

    // This element allows to hide The load More button when all elements are displayed 
    const [hidenElement, sethidenElement] = useState(false);
  
    



    /**
     * This Hook effect filter the data fetched from the Api
     * And Keep just the data with the corresponding categories selected by the user
    */
    useEffect( () =>{
        setFilteredPosts(   
            posts.filter(function (el)
            {
                const artCategories = el.categories.map((e) => e.name)
                const found = artCategories.some((cat) => selectedCategories.includes(cat))
                return found === true
            })
        )
    },[posts,selectedCategories])



    /**
     * This Hook effect check if all elements are displayed
     * if not : we will count the number of elements remaining
     * and show that number next to Load More button
     * 
     * If all elements are displayed we hide the Load More Button 
    */
    useEffect( () =>{
        if(filteredPosts.length > 0)
        {
            if(filteredPosts.length > nbOfElement)
            {
                sethidenElement(true);
                setLoad("Load More ==> " + (filteredPosts.length - nbOfElement).toString()+" elements");
            }
            else
            {
                sethidenElement(false);
            }
        }
        else
        {
            if(posts.length > nbOfElement)
            {
                sethidenElement(true);
                setLoad("Load More ==> " + (posts.length - nbOfElement).toString()+ " elements")
            }
            else
            {
                sethidenElement(false);
            }
        }
    }, [filteredPosts, nbOfElement, posts.length])


    /**
     * This Function allows to add 5 elements From our Data
    */
    const loadMore = () =>{
        setnbOfElement(nbOfElement + 5);
    }


    /**
     * This Function allows to display content of Data passed in the params
    */
    function show(slice){
        return (
            slice.map((e, index) =>
                <ProductCard key={index}
                    post = {e}
                    index = {index}
                />
            )
        )
    }



  return (
    <section>
        <Filter posts = {posts} setSelectedCategories={setSelectedCategories}/>
        <div className='post_list'>
        {
            selectedCategories.length === 0 ? show(posts.slice(0, nbOfElement)) : show(filteredPosts.slice(0, nbOfElement))
        }
        </div>
        <div className='Load_More'>
            {hidenElement === true ? (
                <Button variant="outline-dark" onClick={() => loadMore()}>
                {load}
                </Button>
            ) : (
                <footer className="blockquote-footer pt-4 mt-4 border-top">
                    No More Element To Display
                </footer>
            )
            }
        </div>
    </section>
  )
}

export default Products;