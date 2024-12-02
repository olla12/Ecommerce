import React from "react";
import {Link} from "react-router-dom"
import "./Nav.css"

function Navbar(){
    return(
        <header>
          <h1 className="text-light"> online Shopping </h1>  
          <ul>
            <li>
               <Link to={"/"}>Home</Link>
            </li>
            <li>
               <Link to={"/products"}>Products</Link>
            </li>
            <li>
               <Link to={"/cart"}>Cart</Link>
            </li>
            <li>
               <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </header>
    )
}
export default Navbar;