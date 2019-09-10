import React from 'react'

import './Listing.css'

const Listing = (props)=>(

            <div className="Wrapper">
                <img className="Image" src={props.img_url} alt="food"/>
                <div className="Text">
                    <h3>{props.title}</h3>
                    <p>'{props.publisher}'</p>
                    <a href={props.linked}>Read More</a>
                </div>
            </div>
)

export default Listing; 