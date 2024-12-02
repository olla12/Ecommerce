import React,{useContext} from "react";
import {DataContext} from "../Context/Context"
import {Link} from "react-router-dom"
import "./Products.css"


function Products(){
    const {products,addToCart}=useContext(DataContext)
    console.log(products)
    return(
        <div>
            <h2>Our Products</h2>
            <div className="products d-flex flex-wrap justify-content-center">
            {products.map((item,index)=>(
                <div className="card m-2"style={{width:"19rem",height:"410px"}} key={index}>
                    <Link to={`${`/products/`+item.id}`}>
                    <img src={`/image/${item.image}`}
                    className="card-img " style={{width:"18rem",height:"250px"}}/>

                    </Link>
                    <div className="card-body">

                        <h2>{item.name}</h2>
                        <span>{item.price} Eg</span>

                    </div>
                    <button className="btn btn-success m-2" style={{width:"18rem"}} onClick={()=>addToCart(item)}>Add To Cart

                    </button>
                </div>
            ))}
         </div>

            
        </div>
    )
}
export default Products