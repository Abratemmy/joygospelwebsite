import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

export class Blogitem extends Component {
    
        state = {
             blogs:{},
             isLoaded:false
        }
    

    componentDidMount(){
        return fetch(`http://localhost/jaweb/wp-json/wp/v2/blogs/${this.props.match.params.id}`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({
                blogs: responseJson,
                isLoaded:true
            
            });
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        const {blogs, isLoaded} =this.state;
        if(isLoaded){
            return (
                <Fragment>
                    <Link to="/jaweb">Go back</Link>
                    hello from blog
                    <h2>{blogs.title.rendered}</h2>
                    <p>{blogs.content.rendered}</p>
                                
                               
                </Fragment>
            )
        }return<h3>Loading ...........</h3>
        
    }
}

export default Blogitem
