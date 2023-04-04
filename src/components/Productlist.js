import { Route, Routes, Link } from "react-router-dom";
import { Productcontext } from "./ProductContext";
import {useContext, useEffect, useState } from "react";



export default function Productlist(){
    const products = useContext(Productcontext);
    console.log(products)
    return ( 
      <div>
      <div>
       <h1 className="heading">Product List</h1>
      </div>
      <div className='cardsection'>
      <Productcontext.Provider value={products}>
      {
        products.map(product => (
          <div className='productcard'>
              <Link className="linkdiv" to={`${product.id}`}>
              <img className="imagediv" src={`https://picsum.photos/200?random=${product.id}`} />
                <br></br>
                <h3>ID : {product.id}</h3>
                <h3>User ID : {product.userId}</h3>
                <h4>Title : {product.title}</h4>
                <br></br>
                <p>Body : {(product.body).substring(0,50)} <span>...Read More</span></p>
            </Link>
      
            
          </div>
       
        ))
      }
    </Productcontext.Provider>
      </div>
      </div>
    )
}