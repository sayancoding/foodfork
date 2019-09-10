import React from 'react'
import './BannerText.css'
import SearchForm from '../SearchForm/searchForm'

const BannerText = (props)=>(
    <div className="BannerText">
        <h1 >FOOD PARK</h1>
        <p>Get food Recipes</p>
        <SearchForm getData={props.getData} />
    </div>
)

export default BannerText;