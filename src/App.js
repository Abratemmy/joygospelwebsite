import React, {Component} from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Router from "./components/router";


class App extends Component{
   
    render(){
        return(
            <div>
               <Navbar />
                <Router />
                <Footer />
            </div>
        )
    }
    
}

export default App;
