import React from 'react';
import "./successModal.css";

function SuccessModal({closeModal}) {
    return (
        <div className="container">
            <div className="modalBackground">
                <div className="modalContainer">
                    <div className="modaltypeform">
                        <iframe src="https://esv5kum5e38.typeform.com/to/GDsBnXNd">
                         </iframe>
                    </div>
                    {/* <div data-tf-widget="GDsBnXNd" data-tf-iframe-props="title=Registration Form" style={{width:"100%", height:"400px", overflowY:"hidden!important"}}></div> */}
                    <div className="closeBtn">
                        <button className="" onClick={()=>closeModal(false)}> X </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessModal
