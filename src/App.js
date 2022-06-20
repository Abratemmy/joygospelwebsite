import React, { Component } from "react";
import "./App.css";
import Footer from "./components/newfooter/Footer";
import Navbar from "./components/newNavbar/Navbar";
import Router from "./components/router";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import WOW from 'wowjs';
// import Topblog from "./pages/newblog/topblog";
// import Youtube from "./pages/newblog/youtube";


export class App extends Component{
    componentDidMount(){
        new WOW.WOW().init();
    }
   render(){
        return(
            <div>
                <Navbar />
                <Router />
                <Footer /> 
                {/* <Youtube />
                <Topblog /> */}
            </div>
        )
   }
    
}

export default App;
