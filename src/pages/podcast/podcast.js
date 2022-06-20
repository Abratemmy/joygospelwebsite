import React, { Component } from 'react';
import Pagesheader from '../../components/pagesheader/pagesheader';
import "./podcast.css";
import moment from 'moment';

export class Podcast extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             loading: false,
        }
    }
    componentDidMount(){
        this.setState({
            loading: true,
        })
        return fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/podcasts`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({
                data: responseJson,
                loading: false,
            });
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  render() {
    return (
      <div>
          <Pagesheader title="Podcast" />
          <div className='podcast-container'>
                <div className='container'>
                    <div className=''>
                        <div className='row'>
                            <div className='col-lg-7 col-md-6 col-sm-12'></div>
                            <div className='col-lg-5 col-md-6 col-sm-12'>
                                <div className='podcast-bg'>
                                    <h1>About the Podcast</h1>
                                    <p>This is an insight from the word of God. We discuss everything Faith, 
                                        HR, Relationship, Purpose etc and how the word of God benefits you in today’s world.
                                    </p>

                                    <p>To maximize your potential and become a better version of yourself, start with the first episode and you won’t regret it!</p>
                                    <div className='spotify'>
                                        <a href="https://open.spotify.com/show/5o1MOtBi5EqZcmczN7RRt9" target="_blank"  rel="noopener noreferrer" className="">
                                            <img src="https://res.cloudinary.com/hayteetech/image/upload/v1655399886/Joyagunbiade.com/spotifylogo1_fhf2tn.png" alt="spotify"  />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
          </div>

            <div className='podcast'>
                <div className='container'>
                    <h1 className=''>
                        Our Podcasts
                    </h1>

                    <div className='podcast-main'>
                        <div className='row'>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className='row masonry-grid'>
                                    {this.state.data.map((podcast, i)=>{
                                        return(
                                            <React.Fragment>
                                                <div className='col-lg-3 col-md-4 col-sm-6 masonry-column'>
                                                    <div className="podcast-content" key={i}>
                                                        <div className='card ' >
                                                            <h6>{podcast.title.rendered}</h6>
                                                            <p>{moment(podcast.date).format("MMMM")} {moment(podcast.date).format("D")}, {moment(podcast.date).format("YYYY")}</p>
                                                            <div className='podcast-text'>{podcast.acf.aboutmusic}</div>
                                                            <audio controls className='audio'>
                                                                <source src={podcast.acf.Music} type="audio/ogg" />
                                                            </audio>
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Podcast