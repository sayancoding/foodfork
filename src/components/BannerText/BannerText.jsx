import React from 'react'
import SearchForm from '../SearchForm/searchForm'

const BannerText = (props)=>(
    <div>
        <h1>Food Park</h1>
        <p>Get food Recipes</p>
        <SearchForm getData={props.getData} />
    </div>
)

export default BannerText;