import React from 'react'
import styled from 'styled-components'
import HomeCategories from '../Components/HomeCategories'
import HomeDashboard from '../Components/HomeDashboard'
import SearchBar from '../Components/SearchBar'

function Home() {
  return (
    <div>
      <HomeDashboard />
      <SearchBar />
      <HomeCategories />
    </div>
  )
}

export default Home
