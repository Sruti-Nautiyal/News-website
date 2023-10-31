import React , { useState } from 'react'
import Hero from '../components/Hero'
import FetchData from '../components/FetchData'
import SearchResults from '../components/SearchResults'
const Home = () => {
  return (
    <div>
      <Hero/>
      <SearchResults/>
      <FetchData cat=""/>
    </div>
  )
}

export default Home
