import React, { useState, useEffect, Fragment } from "react";
import axios from 'axios';
import "./event.css";
// import joyvideo from "../../images/joyvideo.mp4";
import { FaMicrophone } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Event() {
    const [event, setEvent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true);
            const res = await axios.get('https://wp.joyagunbiade.com/wp-json/wp/v2/events');
            setEvent(res.data);
            setLoading(false);
        }
        fetchEvents()
    }, []);

    const currentDate = new Date();

    // this code below is to search past event by year
    const [search, setSearch] = useState("")
    const filteredEventYear = event.filter(searchEvent => {
        return (
            searchEvent.acf.startdate.toLowerCase().includes(search.toLowerCase())
        )
    })

    return (
        <div className="eventpage">
            <div className="video-container">
                <div className="video-overlay">
                </div>

                {/* <video autoPlay muted loop  controls>
                    <source src={joyvideo}  type="video/mp4"/>
                </video> */}
                <div className="container">
                    <div className="video-text">
                        <div className="video-title">Want to schedule Joy for an Event?</div>
                        <div className="bg-button">
                            <NavLink to='/jaweb/speaking_request' className="bg-navlinkbtn">
                                <span className="bgIconspan"><FaMicrophone className="bgbtn-icon" /></span>
                                <span>Speaking-request</span>
                            </NavLink>
                        </div>

                        <div className="second-eventbtn">
                            <Link to='upcoming' className="bg-navlinkbtn bgnavlinkyellow" style={{ cursor: "pointer" }}>
                                <span className="bgIconspan"><BiNotepad className="bgbtn-icon" /></span>
                                <span>Upcoming Event</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="upcoming-event" id="upcoming" >
                    <div className="event-header">Upcoming event</div>
                    <span></span>
                    <div className="event-display">
                        {event.map((event, i) => (
                            <Fragment>

                                {new Date(event.acf.startdate) >= currentDate ? (
                                    <div className="" key={i}>
                                        <a href={event.acf.url} className="event-link" >
                                            <div className="event-title">
                                                <p dangerouslySetInnerHTML={{ __html: event.title.rendered }} />
                                            </div>
                                        </a>
                                        <div className="event-date">
                                            {event.acf.startdate}
                                        </div>
                                        <div className="event-location">
                                            {event.acf.location}
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <div className="event-schedule">
                <div className="container">
                    <div className="event-schedule-container">
                        <div className="event-schedule-text">Schedule Joy for your event!</div>

                        <div className="bg-button" style={{ margin: "0px!important" }}>
                            <NavLink to='/jaweb/speaking_request' className="bg-navlinkbtn">
                                <span className="bgIconspan"><FaMicrophone className="bgbtn-icon" /></span>
                                <span>Speaking-request</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="upcoming-event" id="upcoming">
                    <div className="event-header">Past event</div>
                    <span></span>

                    <div className="searchbyyear">
                        <div className="searchbyyear-title">Search past event by year</div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <input type="number" placeholder="search" onChange={e => setSearch(e.target.value)} />
                            </div>
                        </div>

                    </div>

                    <div className="event-display">
                        {filteredEventYear.map((event, i) => (
                            <Fragment>
                                {new Date(event.acf.startdate) <= currentDate ? (
                                    <div className="" key={i}>
                                        <a href={event.acf.url} className="event-link" >
                                            <div className="event-title">
                                                <p dangerouslySetInnerHTML={{ __html: event.title.rendered }} />
                                            </div>
                                        </a>
                                        <div className="event-date">
                                            {event.acf.startdate}
                                        </div>
                                        <div className="event-location">
                                            {event.acf.location}
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Event



