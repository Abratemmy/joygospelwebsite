import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FiAlignRight, FiXCircle } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import logo from "../../images/logo.png";
function Navbar() {

    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >= 130) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)


    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    // this is for dropdown click

    const [dropdownclick, setdropdownclick] = useState(false);
    const handleDropClick = () => setdropdownclick(!dropdownclick);
    console.log("dropdown", dropdownclick)

    return (
        <nav className={navbar ? "newnavbar active" : "newnavbar"}>
            <div className="container">
                <div className="Navigation">
                    <div >
                        <NavLink to="/" className="newnav-logo">
                            <img src={logo} alt="Joy GospelLogo" />
                        </NavLink>
                    </div>

                    <ul className={click ? "newnav-menu active" : "newnav-menu"}>
                        {/* <li className="newnav-item">
                            <NavLink to="/about" exact activeClassName="active" className="newnav-links" onClick={handleClick}>About</NavLink>
                        </li> */}

                        <li className="newnav-item">
                            <NavLink to="/blogs" exact activeClassName="active" className="newnav-links" onClick={handleClick}>Read|Listen|Watch</NavLink>
                        </li>

                        <li className="newnav-item">
                            <NavLink to="/speaking_request" exact activeClassName="active" className="newnav-links" onClick={handleClick}>Speaking</NavLink>
                        </li>
                        <li className="newnav-item">
                            <NavLink to="/prayer_request" exact activeClassName="active" className="newnav-links" onClick={handleClick}>Request Prayer</NavLink>
                        </li>
                        <li className="newnav-item">
                            <NavLink to="/contact" exact activeClassName="active" className="newnav-links" onClick={handleClick}>Contact</NavLink>
                        </li>

                        <span className="dropdownlist">
                            <li className="newnav-item ">
                                <a href="#" exact className="newnav-links" onClick={handleDropClick}>More  <span><BiPlus /></span></a>
                            </li>

                            <ul className={dropdownclick ? "height newdropdown" : "newdropdown"}>
                                <li><a href="https://gwop.joyagunbiade.com" active activeClassName="active" className="newdropdwon-navlink" onClick={handleClick}>GWOP</a></li>
                                <li><a href="https://ges.joyagunbiade.com" active activeClassName="active" className="newdropdwon-navlink" onClick={handleClick}>Employment Consulting</a></li>
                                <li><a href="/https://eveneve.joyagunbiade.com/" active activeClassName="active" className="newdropdwon-navlink" onClick={handleClick}>Cleaning Services</a></li>
                                {/* <li><a href="https://www.amazon.com/dp/B0CZ31FZK4/ref=sr_1_1?dib=eyJ2IjoiMSJ9.l6Gc1DfF9H82Reo-hBvC5g.ZZm8-gEoxU1Tb7TqimFwf_TEqbUe7kC5ru6DYM5kyHQ&dib_tag=se&keywords=I+Love+Jesus%21+Jesus+Loves+Me+by+joy+agunbiade&qid=1711443379&s=books&sr=1-1" target='_blank' active activeClassName="active" className="newdropdwon-navlink" onClick={handleClick}>Shop</a></li> */}
                                {/* <li><NavLink to="/prayer_request" active activeClassName="active" className="newdropdwon-navlink" onClick={handleClick}>Request Prayer</NavLink></li> */}
                                {/* <li><NavLink to="/contact" active activeClassName="active" className="newdropdwon-navlink" onClick={handleClick}>Contact</NavLink></li> */}
                            </ul>

                        </span>

                        {/* for mobile design */}
                        {dropdownclick && <div className="newnav-dropdown forMobile" onClick={handleDropClick}>
                            <li className="newnav-item">
                                <a href="/https://gwop.joyagunbiade.com" exact activeClassName="active" className="newnav-links" onClick={handleClick}>GWOP</a>
                            </li>
                            <li className="newnav-item">
                                <a href="/https://ges.joyagunbiade.com" exact activeClassName="active" className="newnav-links" onClick={handleClick}>Employment Consulting</a>
                            </li>
                            <li className="newnav-item">
                                <a href="/https://eveneve.joyagunbiade.com/" exact activeClassName="active" className="newnav-links" onClick={handleClick}>Cleaning services</a>
                            </li>


                        </div>

                        }
                    </ul>

                    <div className="newnav-icon" onClick={handleClick}>
                        {click === true ? <div>
                            <span className="" onClick={handleClick} > <FiXCircle className="newnav-cancel" />   </span>
                        </div> : <div>
                            <span className="" onClick={handleClick} > <FiAlignRight />   </span>
                        </div>
                        }
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
