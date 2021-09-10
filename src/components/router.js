import React from 'react';
import {Switch, Route } from 'react-router-dom';
import About from '../pages/aboutpage/about';
import Blog from '../pages/blogpage/blog';
import Blogitem from '../pages/blogpage/blogitem';
import Contact from '../pages/contactpage/contact';
import Home from '../pages/homepage/home';
import Speaking from '../pages/speaking/speaking';


const Router = ()=>(
    <Switch>
        <Route exact path ='/jaweb/' component ={Home} />
        <Route exact path ='/jaweb/about' component={About} />
        <Route exact path='/jaweb/contact' component={Contact} />
        <Route exact path='/jaweb/blogs' component={Blog} />
        <Route exact path ='/jaweb/blogs/:id' component={Blogitem} />
        <Route exact path='/jaweb/speaking_request' component={Speaking} />
       
    </Switch>
)
export default Router