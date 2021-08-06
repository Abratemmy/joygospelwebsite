import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Router from './components/router/router';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
      {/* <div className="text-center" style={{color:'red'}}>Hello joy</div>
      <div className="row">
        <div className="col-lg-6">hello</div>
        <div className="col-lg-6">hii</div>
      </div> */}
    </div>
  );
}

export default App;
