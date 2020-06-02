import React from 'react'
import './Spinner.css'

const Spinner = (props)=>(
    <div>
        <h4>Loading..</h4>
        <div className="lds-circle"><div></div></div>
    </div>

)

export default Spinner;