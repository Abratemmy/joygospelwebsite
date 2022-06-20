import React, { Component } from 'react';
import "./instagram.css"

export class Instagram extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loading:true,
             instagram: null
        }
    }
    async componentDidMount(){
        const url="https://graph.instagram.com/me/media?fields=id,username,timestamp,url,caption,media_url,permalink&access_token=IGQVJVRzAwcldCVHJLd25RUlFpM3dSWFlGdFNwcjZAHVFZAvUFlobW5QNHRzVGJjQTJqTnlGV1NYQVpKQkFsV3VBcURyZAm1tVnczNzNWQ0lvaEZAlNXBMY0ZAuaFV3STdTSGNGcHVDSzVlZAlZA3ZAERaRTJ2LQZDZD"
        const response=await fetch(url)
        const result = await response.json();
        this.setState({instagram: result.data[0], loading: false })
        console.log(result.data[0])
    }
  
    render() {
        return (
            <div>
                {this.state.loading || !this.state.instagram ?(
                    <div>Instagram loading ....</div>
                 ) : (
                 <div>
                     {/* <div>{this.state.instagram.id}</div> */}
                    <div className="instagram-container"><a href={this.state.instagram.permalink}>
                        <img src={this.state.instagram.media_url} alt="get image" className="instagram-image" /></a>
                    </div>
                     {/* <div>{this.state.instagram.username}</div>
                     <div>{this.state.instagram.timestamp}</div>   */}
                 </div>
                 )}
            </div>
        )
    }
}

export default Instagram
