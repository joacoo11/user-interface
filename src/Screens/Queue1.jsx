
import React from 'react'
import styled from 'styled-components'
import ActiveBookings from '../Components/ActiveBookings'
import ActiveQueue from '../Components/ActiveQueue'
import HomeDashboard from '../Components/HomeDashboard'
import Notifications from '../Components/Notifications'


function Home() {

  const ActiveQueueLay = styled.div`
    display: flex;
  `
  return (
    <div>

    <ActiveQueueLay>
      <HomeDashboard />
      <ActiveQueue  />
      <ActiveBookings />
    </ActiveQueueLay>
    <Notifications />
    </div>
  )
}

export default Home
