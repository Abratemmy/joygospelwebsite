import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player";
import axios from "axios";
import { NavLink } from 'react-router-dom';

function Topblog() {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() =>{
  //     const fetchMusic = async () =>{
  //         setLoading(true);
  //         const res = await axios.get(`https://wp.joyagunbiade.com/wp-json/wp/v2/podcasts?per_page=3`);
  //         setMusic(res.data);
  //         setLoading(false);
  //     }
  //     fetchMusic()
  // }, []);

  if (loading) {
    return <div className="loading" style={{ margin: "30px" }}></div>
  } else {
    return (
      <div className='container'>
        <div className='topblog'>
          <div className='row'>
            <div className='col-lg-1 col-md-1 col-sm-12'></div>
            <div className='col-lg-10 col-md-10 col-sm-12'>
              <div className='row'>
                <div className='col-lg-8 col-md-8 col-sm-4'>
                  <div className='youtube-player'>
                    <ReactPlayer
                      url="https://youtube.com/embed/MpvAw_VbD_4"
                      className="react-player"
                      // playing
                      muted={true}
                      loop={true}
                      controls={true}
                    />
                    <div className="youtube-playlist">For more videos, Check our Youtube playlists <a href="https://youtube.com/playlist?list=PLm1J2EyF0MNTCxp7Ko3kVZnCp4wZMUtEA" target="_blank" rel="noopener noreferrer" className="wow pulse" data-wow-iteration="infinite" data-wow-delay=".2s">
                      here
                    </a>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-12'>
                  <div className='topblog-podcast-title'>Listen to our Podcasts on</div>
                  {/* {music.map((music, i)=>{
                  return(
                    <div key={i}>
                      <audio controls className='audio'>
                          <source src="https://open.spotify.com/episode/0AgWpVbY6PirO1kegawy1O?si=n_0hq3PsSCGHNlEu34MI5A" type="audio/ogg" />
                      </audio>
                    </div>
                  )
                })} */}

                  {/* <div className='topblog-podcast-title'>Check more:</div> */}
                  <div className='topblog-podcast'>
                    <div className='wow slideInUp' data-wow-duration="2s" data-wow-delay=".1s">
                      <NavLink to='/podcasts' className="navlinks-btn">Podcast</NavLink>
                    </div>

                    <div className="" style={{ marginLeft: "10px" }}>
                      <a href='https://open.spotify.com/show/5o1MOtBi5EqZcmczN7RRt9' className="navlinks-btn schedule-btn topblog-btn">Spotify</a>
                    </div>

                  </div>


                </div>
              </div>

            </div>
            <div className='col-lg-1 col-md-1 col-sm-12'></div>
          </div>
        </div>
      </div>
    )

  }
}

export default Topblog