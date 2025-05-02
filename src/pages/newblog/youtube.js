import React, { Component } from 'react';

const API = 'AII';
const playlistID = 'P';
const result=2;


// var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&playlistid=${playlistID}&part=snippet,id&order=date&maxResults=${result}`

// var finalURL= `https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyCtWVsvznMdqWFyjAdAwVj0cP9wPs4WgWI&id=PLm1J2EyF0MNTCxp7Ko3kVZnCp4wZMUtEA&part=id,snippet&fields=items(id,snippet(title,channelId,channelTitle,thumbnails))`

var finalURL = `https://youtube.googleapis.com/youtube/v3/playlists?part=id%2Csnippet%2Cstatus&id=PLm1J2EyF0MNTCxp7Ko3kVZnCp4wZMUtEA&key=AIzaSyCtWVsvznMdqWFyjAdAwVj0cP9wPs4WgWI`

// var finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=VIDEO_TITLE_HERE&type=playlist&key=AIzaSyCtWVsvznMdqWFyjAdAwVj0cP9wPs4WgWI`
export class Youtube extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        youtube :[]
      };
    }

    componentDidMount(){
        return fetch(finalURL)
        .then((response) =>response.json())
        .then((responseJson) =>{
            // this.setState({
            //     youtube: responseJson,
            // });
            const youtube = responseJson.items;
            this.setState({youtube});
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }

  render() {
      console.log(this.state.youtube)
    return(
      <div>
        {this.state.youtube.map((data, i)=>{
          return(
            <div>
              {data.snippet.title}
              <h1>{data.snippet.thumbnails.standard.url}</h1>
              <iframe key={i} width={data.snippet.thumbnails.standard.width} height={data.snippet.thumbnails.standard.height} src={data.snippet.thumbnails.standard.url} frameBorder="0" allowFullScreen></iframe>
            </div>
          )
        })}
          {/* {this.state.youtube.map((data, i)=>{
            var frame = <iframe key={i} width="560" height="315" src={data} frameBorder="0" allowFullScreen></iframe>
             return(
               <div>{frame}
               <h1>Hello</h1>
               </div>
               
             ) 

             
          })} */}
        {/* {this.frame} */}
      </div>
    )
  }
}

export default Youtube
