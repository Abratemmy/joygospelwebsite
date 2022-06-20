import React, { Component } from 'react';
import data from '../../pages/speaking/country';

export class Countryform extends Component {
    constructor(props) {
        super(props);
        this.state = {
          country: "Canada",
        };    
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(e) {
        console.log("country Selected!!");
        this.setState({ country: e.target.value });
      }
    render() {
        return (
            <div>
                <div className="speaking-form">
                    <label>Country <span>*</span></label>
                    <select type="text"  name={this.props.name} placeholder="country" value={this.state.country} onChange={this.handleChange} className="inputfield">
                        {data.map(item =>{
                            return(
                                <option value={item.value} key={item.id}>{item.country}</option>
                            )
                        })}

                    </select>
                </div>
            </div>
        )
    }
}

export default Countryform
