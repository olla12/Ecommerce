import React ,{Component} from "react";
import "./Header.css"
class Header extends Component{

    state={};
    render(){
        return(
        <>
        <header className="bg-success">
      <div className="  p-2 d-flex justify-content-between container-fluid navbar navbar-expand-lg ">
        <h1 className="text-light">Colors Beauty</h1>
        <a href="#menu" className="navbar-toggler" data-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
        </a>
        
        <nav className=" d-flex justify-content-between " id="menu">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a  href="#home" className="nav-link text-light"><b>home</b></a>
            </li>
            <li className="nav-item">
                <a  className="nav-link text-light"><b>about</b></a>
            </li>
            <li className="nav-item">
                <a href="#products"className="nav-link text-light"><b>products</b></a>
            </li>
            <li className="nav-item">
                <a href="#login"className="nav-link text-light"><b>login</b></a>
            </li>
        </ul>
        </nav>
      </div>
    </header>
        </>

        )
    }
}
    export default Header
