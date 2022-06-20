import React, {useState, useEffect} from 'react';
import { BiSearch} from "react-icons/bi";
import "./searchbar.css";
import axios from 'axios';
import {NavLink} from "react-router-dom";

function Searchbar({placeholder}) {
    const [searchblogs, setSearchBlogs] = useState([]);
 
    useEffect(() =>{
        const fetchSearchBlogs = async () =>{
            const res = await axios.get('/blogs');
            setSearchBlogs(res.data);
        }
        fetchSearchBlogs()
    }, []);

    // this is fornthe filter data
    const[filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("")
    const handleFilter = (event) =>{
        const searchWord= event.target.value
        setWordEntered(searchWord);
        const newFilter = searchblogs.filter((value) =>{
            return value.title.rendered.toLowerCase().includes(searchWord.toLowerCase());
            
        })

        if (searchWord === ""){
            setFilteredData([]);
        }
        else{
            setFilteredData(newFilter)
        }
    }

    const clearInput= () =>{
        setFilteredData([]);
        setWordEntered("")
    }
    return (
        <div className="search">
           <div className="searchInputs">
               <input type="text" placeholder={placeholder} value={wordEntered} className="Prompts" onChange={handleFilter}/>
               <div className="searchIcon">
                   {filteredData.length === 0 ? <BiSearch />: <div id="clearBtn" onClick={clearInput}>X</div>}
                </div>
           </div>

           {/* the below code is to display the filtered data when search */}
            

           {filteredData.length !== 0 && (
               <div className="dataResult">
               {filteredData.slice().map((value, i)=>{
                   return<div key={i}>
                            <NavLink to={`/blogs/${value.id}`} className="dataItem" target="_blank"><p>{value.title.rendered}</p></NavLink>
                            
                       </div>
               })} 
                </div>
            )} 
        </div>
    )
}

export default Searchbar
