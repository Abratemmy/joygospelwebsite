import React from 'react';
import {Switch, Route } from 'react-router-dom';
import About from '../pages/aboutpage/about';
import Blog from '../pages/newblog/blog';
import Blogitem from '../pages/newblog/blogitem/blogitem';
import Contact from '../pages/contactpage/contact';
import FormSuccess from '../pages/contactpage/formSuccess';
import Newevent from '../pages/eventpage/newevent';
import Home from '../pages/homepage/home';
import Prayerrequest from '../pages/prayerrequest/prayerrequest';
import Speaking from '../pages/speaking/speaking';
import Successtories from '../pages/successStories/stories';
import Podcast from "../pages/podcast/podcast";


const Router = ()=>(
    <Switch>
        <Route exact path ='/' component ={Home} />
        <Route exact path ='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        {/* <Route exact path='/jaweb/blogs' component={Blogpost} /> */}
        <Route exact path ='/blogs/:id' component={Blogitem} />
        <Route exact path='/speaking_request' component={Speaking} />
        <Route exact path='/blogs' component={Blog} />
        <Route exact path="/events" component={Newevent} />
        <Route exact path="/formsucess" component={FormSuccess} />
        <Route exact path="/success_stories" component={Successtories} />
        <Route exact path="/prayer_request" component={Prayerrequest} />
        <Route exact path="/podcasts" component={Podcast} />
    
        {/* <Route exact path='/jaweb/event/:slug' component={} */}
       
    </Switch>
)
export default Router