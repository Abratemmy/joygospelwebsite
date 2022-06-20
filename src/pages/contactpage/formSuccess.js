import React from 'react'
import { NavLink } from 'react-router-dom'

function FormSuccess(){
    return (
        <div className="form-success">
            <div className="formsucess-container">
                <div className="container">
                    <div className="form-text">Your request has been submitted successfully</div>

                    <div className="bg-button" style={{textAlign:"center"}}>
                        <NavLink to='/' className="bg-navlinkbtn" >
                            <span>Go To Home</span>
                        </NavLink>
                    </div>
            
                </div>
            </div>
            
            
        </div> 
    )
}

export default FormSuccess
