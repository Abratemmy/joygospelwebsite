import React from 'react';
import {Switch, Route } from 'react-router-dom';
import About from '../../pages/aboutpage/about';
import Home from '../../pages/homepage/home';

const Router = ()=>(
    <Switch>
        <Route exact path = '/joywebproject' component ={Home} />
        <Route exact path = '/about' component={About} />
        {/* <Route exact path='/contact_us' component = {Contact} /> */}
    </Switch>
)
export default Router