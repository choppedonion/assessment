import '../styles/Products.css';
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Filter from "./Filter"
import ProductCard from "./ProductCard"

function Products(props) {
    const posts = props.posts;
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [nbOfElement, setnbOfElement] = useState(5); 
    const loadMore = () =>{
        setnbOfElement(nbOfElement + 5);
    }
    
    
    const [filteredPosts, setFilteredPosts] = useState([]);
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

    const [load, setLoad] = useState("");
    const [hidenElement, sethidenElement] = useState(false);
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
                <footer class="blockquote-footer pt-4 mt-4 border-top">
                    No More Element To Display
                </footer>
            )
            }
        </div>
    </section>
  )
}

export default Products;