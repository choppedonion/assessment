import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
function Filter({posts, setSelectedCategories}) {
  const [categories, setCategories] = useState([]);
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



  function updateSelectedCategories(e) {
    setSelectedCategories(e)
  }

  return (
    <div className='select'>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        placeholder="Please Choose One or Multiple Categories"
        isMulti
        options={categories.map(item => ({ value: item, label: item }))}

        onChange={(et) => updateSelectedCategories(et.map((e) => e.value))}

      />
    </div>
  )
}

export default Filter