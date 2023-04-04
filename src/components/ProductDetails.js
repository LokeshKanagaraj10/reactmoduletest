import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Productcontext } from "./ProductContext";

export default function ProductDetails(){
    const { id } = useParams();
    // const [item , setItem] = useState(null);
    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //     .then(response => response.json())
    //     .then(data => setItem(data))
    // }, [id])

    const productValue = useContext(Productcontext)
    console.log(productValue)
    const item = productValue.find((product) => product.id == (id));


    if(!item){
        return<div><h1>Loading...!!!</h1></div>
    }
   

    return(
        <div>
        <h1 className="heading">Product Details for Item ID : {id}</h1>
        <div>
            <div className="productcard2">
            <img className="imagediv2" src={`https://picsum.photos/200?random=${item.id}`}></img>
              <h3>ID : {item.id}</h3>
              <h3>User ID : {item.userId}</h3>
              <h3>Title : {item.title}</h3>
              <br></br>
              <p><b>Body</b> : {item.body}</p>
            </div>
        </div>

        </div>
    );
}