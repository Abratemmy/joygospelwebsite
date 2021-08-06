import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FiAlignRight,FiXCircle} from "react-icons/fi";
import './Navbar.css'


function Navbar() {
    const[click, setClick] = useState(false)
    const handleClick = () =>setClick(!click)

    // const[plusicon, setPlusIcon] = useState(false);
    // const handleToggle = ()=>setPlusIcon(!plusicon)
    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to='/joywebproject' className="nav-logo">
                    JoyAgunbiade
                    
                </NavLink>

                <div className="nav-palava">
                    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/joywebproject"exact activeClassName="active" className="nav-links" onClick={handleClick}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about"activeClassName="active" className="nav-links" onClick={handleClick}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" activeClassName="active" className="nav-links" onClick={handleClick}>Read|Listen|Watch</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/shop"activeClassName="active" className="nav-links" onClick={handleClick}>Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact"activeClassName="active" className="nav-links" onClick={handleClick}>Contact</NavLink>
                        </li>
                        <li className="nav-item nav-item-dropdown">
                          <a href="#" className="nav-item-icon">+</a>
                            <div className="sub-item">
                                <ul>
                                <li><NavLink to="/about" exact activeClassName="active" className="sub-item-navlinks">About</NavLink> </li>
                                <li><NavLink to="/event" exact activeClassName="active" className="sub-item-navlinks">Book an event</NavLink> </li>
                                <li><NavLink to="/testimony" exact activeClassName="active" className="sub-item-navlinks">Testimony</NavLink> </li>
                                <li><NavLink to="contact" exact activeClassName="active" className="sub-item-navlinks">contact</NavLink> </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul>
                    
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
