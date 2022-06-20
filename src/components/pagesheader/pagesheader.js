import React, { Component } from 'react';
import "./pagesheader.css";

export class Pagesheader extends Component {
    render(title, children) {
        return (
            <div className="pagesheaderpage">
                <div className="container">
                    <div className="otherpagestitle wow slideInLeft"data-wow-duration="2s">
                        {this.props.title}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pagesheader
