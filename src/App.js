import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Productlist from './components/Productlist';
import ProductDetails from './components/ProductDetails';
import Header from './Header';
import { Productcontext } from './components/ProductContext';
import {useEffect, useState } from "react";


function App() {

  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(data => setproducts(data));
   }, [])

   console.log(products)
  
  return (
    <div>
      <Header/>
      <Productcontext.Provider value={products}>
        <Routes>
          <Route path="/" element={<Productlist/>}/>
          <Route path="/:id" element={<ProductDetails/>}/>
        </Routes>
      </Productcontext.Provider>
    </div>
  )
}


export default App;
