import React from 'react'
import './Listing.css'

const Listing = (props)=>(
    <div className="Wrapper">
       <img src={props.img_url} alt=""/>
       <p>{props.title}</p>
       <p>{props.publisher}</p>
       <p>{props.linked}</p>
   </div>
)

export default Listing; 