import React, { useEffect, useState } from 'react';
import '../styles/Filter.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

function Filter({posts, setSelectedCategories}) {

  // This array containes all categories selected without duplication
  const [categories, setCategories] = useState([]);

  /**
  * This Hook effect set the array from our data with categories selected
  * and use reduce && include functions to avoid duplication
  */
  useEffect(() => {
    setCategories(
      posts.reduce(
        (unsorted, data) =>
        unsorted.includes(data.categories) ? unsorted : unsorted.concat(data.categories),
        []
      ).reduce(
        (sorted, data) =>
        sorted.includes(data.name) ? sorted : sorted.concat(data.name),
        []
      )
    )
  }, [posts])


  /**
  * This Function update the value of the selected categories
  */
  function updateSelectedCategories(e) {
    setSelectedCategories(e)
  }

  return (
    <section className='select'>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        placeholder="Please Choose One or Multiple Categories"
        isMulti
        options={categories.map(item => ({ value: item, label: item }))}

        onChange={(et) => updateSelectedCategories(et.map((e) => e.value))}
      />
    </section>
  )
}

export default Filter