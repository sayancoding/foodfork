import React from 'react'
import './searchForm.css';

const searchForm = (props)=>(
   <div>
        <div className="">
           <form action="" onSubmit={props.getData}>
                <input className="SearchInput" type="text" name="food" placeholder="food type.."/>
                <input className="Submit" type="submit"  value="Get"/>
           </form>
       </div>
   </div>
)

export default searchForm;