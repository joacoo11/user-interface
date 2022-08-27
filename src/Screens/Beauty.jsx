import React from 'react'
import styled from 'styled-components'
import BeautyLayout from '../Components/BeautyLayout'
import HomeDashboard from '../Components/HomeDashboard'
import SearchBar from '../Components/SearchBar'

function Home() {
  return (
    <div>
      <HomeDashboard />
      <SearchBar />
      <BeautyLayout />
    </div>
  )
}

export default Home
