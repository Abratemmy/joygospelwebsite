import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FiAlignRight,FiXCircle} from "react-icons/fi";
import './Navbar.css'


function Navbar() {
    const[click, setClick] = useState(false)
    const handleClick = () =>setClick(!click);

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
    return (
        <nav className={navbar ? "navbar active":"navbar"}>
            <div className="nav-container">
                <NavLink exact to='/joywebproject' className="nav-logo">
                    JoyAgunbiade
                    
                </NavLink>

                <div className="nav-palava">
                    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/joywebproject/jaweb"exact activeClassName="active" className="nav-links" onClick={handleClick}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/jaweb/about"activeClassName="active" className="nav-links" onClick={handleClick}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/jaweb/blogs" activeClassName="active" className="nav-links" onClick={handleClick}>Read|Listen|Watch</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop"activeClassName="active" className="nav-links" onClick={handleClick}>Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/jaweb/contact"activeClassName="active" className="nav-links" onClick={handleClick}>Contact</NavLink>
                        </li>
                        <li className="nav-item nav-item-dropdown">
                          <a href="" className="nav-item-icon" style={{textDecoration:"none"}}>More Page</a>
                            <div className="sub-item">
                                <ul>
                                <li><NavLink to="/jaweb/about" exact activeClassName="active" className="sub-item-navlinks">About</NavLink> </li>
                                <li><NavLink to="/jaweb/podcast" exact activeClassName="active" className="sub-item-navlinks">Podcast</NavLink> </li>
                                <li><NavLink to="/jaweb/events" exact activeClassName="active" className="sub-item-navlinks">Our Events</NavLink> </li>
                                <li><NavLink to="/jaweb/speaking_request" exact activeClassName="active" className="sub-item-navlinks">Speaking</NavLink> </li>
                                <li><NavLink to="/jaweb/testimony" exact activeClassName="active" className="sub-item-navlinks">Testimony</NavLink> </li>
                                <li><NavLink to="/jaweb/contact" exact activeClassName="active" className="sub-item-navlinks">contact</NavLink> </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    

                    <div className="nav-icon" onClick={handleClick}>
                         {click === true ? <div> 
                           <span className=""  onClick={handleClick} > <FiXCircle />   </span>
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
