import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom";
import axios from 'axios';

import '../styles/index.css';

import Home from "./Home";
import Description from './Description';
import PageNotFound from './PageNotFound';


function App() {

/**
 * The App component
 * Using React Hooks, I retrieved The data from The mock Api
 */

  const [data, setData] = useState([]);
  useEffect(() => {
    getBooks();
  }, [])

  const getBooks = async () => {
    axios.get('http://localhost:3000/api/posts')
    .then((res) => {
      console.log("Data collected successfully ", res.data.posts)
      setData(res.data.posts)
    })
    .catch(err => console.log(err));
  }



/**
 * The Following code enables the navigation between pages
 * And routing easily the data flow .
 * In our Case, We Have the Home page where the Data will be Displayed
 * And a description page to show details of each data element
 * And a Error page when Users try to access to invalid URL
 */
  return <div className='App'>{
    <>
    <Routes>
      <Route path="/" element = {<Home posts = {data}/>} />
      <Route path="/description/:id" element={<Description/>} />
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
    }
  </div>;
}
export default App;
