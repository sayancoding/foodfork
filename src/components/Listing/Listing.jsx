import React from 'react'
import './Listing.css'

const Listing = (props)=>(
    <div className="">
       <img src={props.img_url} alt=""/>
       <p>{props.children}</p>
   </div>
)

export default Listing; 