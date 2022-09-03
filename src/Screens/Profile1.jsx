import React from 'react'
import styled from 'styled-components'
import HomeDashboard from '../Components/HomeDashboard'
import ProfileSettings from '../Components/ProfileSettings'
import ProfileContactInputs from '../Components/ProfileContactInputs'
import Savebtns from '../Components/Savebtns'



function Home() {
  const Layout = styled.div`
    display: flex; 
  `

  return (
    <div>
    <Layout>
      <HomeDashboard />
      <ProfileSettings />
    </Layout>
      <ProfileContactInputs />
      <Savebtns />
    </div>
  )
}

export default Home
