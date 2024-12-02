import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/Context";
function DetailsProduct(){
    const {id}=useParams()
    const{products,addToCart}=useContext(DataContext)
    const DetailsProduct=products.find((product)=>product.id==id)
    console.log(DetailsProduct)
    return(
        <div>
            <h2 className="p-2">Product Dtails</h2>
            <div className="p-2 m-2">
            <img src={"/image/"+DetailsProduct.image}style={{width:"18rem"}}/>
            <h1>Title:{DetailsProduct.name}</h1>
            <span>Price:{DetailsProduct.price}</span>
            <button className="btn btn-success m-2" onClick={()=>addToCart(DetailsProduct)}>Add To Cart</button>
            </div>
        </div>
    )
}export default DetailsProduct