import React, {useState} from 'react';
import {BiSearch} from "react-icons/bi";

function Searchbar() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <div className="blog-sidebar-content">
                <div className="blog-sidebar-title">
                    Search
                </div>
                <div className="input-group blog-input-group">
                    <input type="text" className="form-control blog-input" placeholder="Search for..." 
                        onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }} 
                    />
                    <span className="input-group-btn blog-input-group">
                        <button className="btn btn-search" type="button"><BiSearch className="search-icon" /></button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
