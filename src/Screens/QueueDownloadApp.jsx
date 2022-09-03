
import React from 'react'
import styled from 'styled-components'
import HomeDashboard from '../Components/HomeDashboard'
import Qzee from '../Assets/QZee-icon2.png'
import appstore from '../Assets/appstorebig.png'
import playtore from '../Assets/playstorebig.png'



function Home() {
  const Queue2Lay = styled.div`
  display: flex;
`
  const Queue2Body = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 70vw;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 4%;
  `
  const LockIcon = styled.img`
  width: 300px;
  height: 382px;
  `

  const AccesSpan = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 140%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #242328;
  width: 500px;
  margin-top: 3%;
  `
const DownloadButton = styled.img`
  max-width: 136.49px;
  max-height: 70px;
  margin-top: 5%;

`
const DownloadDiv = styled.div`
  display: flex;
  gap: 8px;
`
  return (
    <Queue2Lay>
      <HomeDashboard />
      <Queue2Body>
        <LockIcon src={Qzee} alt="" />
        <AccesSpan>To access queue features download the app</AccesSpan>
        <DownloadDiv>
          <DownloadButton src={appstore} alt="" />
          <DownloadButton src={playtore} alt="" />
        </DownloadDiv>
      </Queue2Body>
    </Queue2Lay>
  )
}

export default Home
