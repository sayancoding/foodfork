import React from 'react'
import {Link} from 'react-router-dom'

import './Listing.css'

const Listing = (props) => (
  <div className="Wrapper">
    <img className="Image" src={props.img_url} alt="food" />
    <div className="Text">
      <p>{props.title}</p>
      <div className="ready">
        Ready in Minutes {props.readyInMinutes}
      </div>
      <Link to={{pathname: `ingredient/${props.id}`}}>
      <p className="details">Ingredients </p>
      </Link>
    </div>
  </div>
);

export default Listing; 