import React from 'react';
import "./blog.css";
import Pagesheader from "../../components/pagesheader/pagesheader"
import Blogpost from './blogpost';
import Sidebar from './sidebar';
import Topblog from './topblog';

function Blog() {
    return (
        <div className='blogpage'>
            <Pagesheader title="My Chronicles" />

            <Topblog />

            <div className=''>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9 col-md-12 col-sm-12'>
                            <Blogpost />
                        </div>

                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog