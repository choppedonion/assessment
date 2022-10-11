import '../styles/Products.css';
import { useState } from "react";
import Filter from "./Filter"
import ProductCard from "./ProductCard"

function Products(props) {
    const posts = props.posts;
    const [selectedCategories, setSelectedCategories] = useState([]);

    const [nbOfElement, setnbOfElement] = useState(4);
    
    const loadMore = () =>{
        setnbOfElement(nbOfElement + 4);
    }
    console.log(selectedCategories)

    function filterPosts(){
        var slice = posts.filter(function (el)
                    {
                        const artCategories = el.categories.map((e) => e.name)
                        const found = artCategories.some((cat) => selectedCategories.includes(cat))
                        return found === true
                    }
        )
        return slice;
    }

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
                selectedCategories.length === 0 ? show(posts.slice(0, nbOfElement)) : show(filterPosts().slice(0, nbOfElement))
            }
        </div>
        <button className='btn btn-primary' onClick={() => loadMore()}>
            Load More
        </button>
    </section>
  )
}

export default Products;