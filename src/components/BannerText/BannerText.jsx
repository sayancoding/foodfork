import React from 'react'
import './BannerText.css'
import SearchForm from '../SearchForm/searchForm'

const BannerText = (props)=>(
    <div className="BannerText">
        {/* <div className="Head">
            <a href="https://github.com/sayancoding">Build By @backward_space</a>
        </div> */}
        <h1 className="TextHead">FOOD PARK</h1>
        <p>Get food Recipes</p>
        <SearchForm getData={props.getData} />
    </div>
)

export default BannerText;