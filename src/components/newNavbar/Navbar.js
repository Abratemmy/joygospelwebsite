import React,{useState} from 'react';
import {NavLink}from "react-router-dom";
import "./Navbar.css";
import {FiAlignRight,FiXCircle} from "react-icons/fi";

function Navbar() {

    const [navbar, setNavbar] = useState(false); 
    const changeBackground= ()=>{
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >=130){
            setNavbar(true);
        }else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)


    const[click, setClick] = useState(false)
    const handleClick = () =>setClick(!click);

    // this is for dropdown click

    const[dropdownclick, setdropdownclick] = useState(false);
    const handleDropClick=()=>setdropdownclick(!dropdownclick)

    return (
        <nav className={navbar ? "newnavbar active":"newnavbar"}>
            <div className="container">
                <div className="Navigation">
                    <div >
                        <NavLink to="/" className="newnav-logo">
                            <img src="https://res.cloudinary.com/hayteetech/image/upload/v1641830186/Joyagunbiade.com/logo_j1zn9q.png" alt="Joy AgunbiadeLogo" /> 
                        </NavLink>
                    </div>

                    <ul className={click ? "newnav-menu active" : "newnav-menu"}>
                        <li className="newnav-item">
                            <NavLink to="/about" exact activeClassName="active" className="newnav-links" onClick={handleClick}>About</NavLink>
                        </li>

                        <li className="newnav-item">
                            <NavLink to="/blogs" exact activeClassName="active" className="newnav-links" onClick={handleClick}>Read|Listen|Watch</NavLink>
                        </li>
                        
                        <li className="newnav-item">
                            <NavLink to="/speaking_request" exact activeClassName="active" className="newnav-links" onClick={handleClick}>Speaking</NavLink>
                        </li>

                        <span className="dropdownlist">
                            <li className="newnav-item ">
                                <a href="#" exact  className="newnav-links" onClick={handleDropClick}>More </a>
                            </li>
                            
                            <ul className={dropdownclick ? "height newdropdown" :"newdropdown"}>
                                <li><a href="https://gwop.joyagunbiade.com" active activeClassName="active" className="newdropdwon-navlink" onClick={handleClick}>GWOP</a></li>
                                <li><a href="https://ges.joyagunbiade.com" active activeClassName="active" className="newdropdwon-navlink" onClick={handleClick}>Therapy Consulting</a></li>
                                <li><a href="https://shop.joyagunbiade.com" active activeClassName="active" className="newdropdwon-navlink" onClick={handleClick}>Shop</a></li>
                                <li><NavLink to="/prayer_request" active activeClassName="active" className="newdropdwon-navlink" onClick={handleClick}>Request Prayer</NavLink></li>
                                <li><NavLink to="/contact" active activeClassName="active" className="newdropdwon-navlink" onClick={handleClick}>Contact</NavLink></li>
                            </ul>

                        </span>                        
                    </ul>

                    <div className="newnav-icon" onClick={handleClick}>
                         {click === true ? <div> 
                           <span className=""  onClick={handleClick} > <FiXCircle className="newnav-cancel"/>   </span>
                            </div> : <div> 
                                <span className=""  onClick={handleClick} > <FiAlignRight />   </span>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
