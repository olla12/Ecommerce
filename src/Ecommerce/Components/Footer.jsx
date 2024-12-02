import React from "react";
import {Link} from "react-router-dom"

function Footer(){
    return(
        <>
       <footer className="text-light bg-black">
          <div className=" container-fluid navbar navbar-expand-lg justify-content-around align-items-lg-center">
            <h1 >Online shoping </h1>
            
            <nav className=" d-flex  " >
               <ul className="navbar-nav">
                 <li className="nav-item">
                    <a className="nav-link"><i class="fa-brands fa-facebook"></i></a></li>
                 <li className="nav-item">
                    <a className="nav-link"><i class="fa-brands fa-whatsapp"></i></a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link"><i class="fa-brands fa-instagram"></i></a>
                 </li>
                 <li className="nav-item">
                    <a className="nav-link"><i class="fa-brands fa-linkedin"></i></a>
                 </li>
               </ul>
               </nav>
               <span><i className="fa-solid fa-phone"></i>01158645818&nbsp;&nbsp;</span>
               <span><i className="fa-solid fa-envelope"></i>olaramadan36@gmail.com</span>
    
              
          </div>
      </footer>

        </>
    )
}export default Footer