
import React from 'react'
import styled from 'styled-components'
import HomeDashboard from '../Components/HomeDashboard'
import Queue1Div from '../Components/Queue1Div'
import Bookings1Component from '../Components/Bookings1Component'




function Home() {
  const MainDiv = styled.div`
    display: flex;
  `

  return (
    <div>
    <MainDiv>
      <HomeDashboard />
      <Bookings1Component />
    </MainDiv>
    <Queue1Div />
    </div>
  )
}

export default Home
