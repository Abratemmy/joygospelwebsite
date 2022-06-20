import React,  {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

function Event() {
    const [event, setEvent] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const fetchEvents = async () =>{
            setLoading(true);
            const res = await axios.get(`/events`);
            setEvent(res.data);
            setLoading(false);
        }
        fetchEvents()
    }, []);



    
	const currentDate = new Date();



    // this code below is to search past event by year
    const [search, setSearch] = useState("")

    const filteredEventYear = event.filter(searchEvent =>{
        return (
            searchEvent.acf.startdate.toLowerCase().includes(search.toLowerCase())
        )
    })
 
    return (
        <div className="eventpage">

            <div className="container">    
                <div className="upcoming-event" id="upcoming" >
                    <div className="event-header">Upcoming event</div>
                    <span></span>

                    {/* this is actually getting the response from the api. Its get all the startdate */}
                    {event.map((party, i) =>{
                        return(
                            <div className="" key={i}>
                                <p>{party.acf.startdate}</p>
                            </div>
                        )
                    })}

                    {/* here I want it to get startdate if only the startdate is >= current date. so this is not getting response*/}
                    {/* this method below was actually giving me response when i was using local api */}
                    {event.map((even, i) =>{                        
                        <Fragment>
                            {new Date(even.acf.startdate) >= currentDate ? (
                                <div className="" key={i}>
                                    {even.title.rendered}
                                </div>
                            ) : ("")}
                        </Fragment>
                    
                    })}
                  
                </div>               
            </div>

            
            <div className="container">
                <div className="upcoming-event" id="upcoming">
                    <div className="event-header">Past event</div>
                    

                    {/* <div className="searchbyyear">
                        <div className="searchbyyear-title">Search past event by year</div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <input type="number" placeholder="search ..."  onChange={e =>setSearch(e.target.value)}/>
                            </div>
                        </div>
                        
                    </div> */}

                    {/* <div className="event-display">
                            {filteredEventYear.map((event, i) => (
                            <Fragment>
                                {new Date(event.acf.startdate) <= currentDate ? (
                                    <div className="" key={i}>
                                        <a href={event.acf.url} className="event-link" >
                                            <div className="event-title">
                                                {event.title.rendered}
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
                        
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Event
