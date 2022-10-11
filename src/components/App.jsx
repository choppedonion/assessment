import '../styles/index.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Description from './Description';
import PageNotFound from './PageNotFound';


function App() {

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
