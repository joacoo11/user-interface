import React from 'react'
import styled from 'styled-components'
import QZee from '../Assets/QZee.png'
import darlene from '../Assets/darlene.png'
import icon1 from '../Assets/icon1.png'
import icon2 from '../Assets/icon2.png'
import icon3 from '../Assets/icon3.png'
import icon4 from '../Assets/icon4.png'
import Dash1 from '../Assets/Dash1.png'
import Dash2 from '../Assets/Dash2.png'
import Dash3 from '../Assets/Dash3.png'
import Dash4 from '../Assets/Dash4.png'
import appstor from '../Assets/app-stor.png'
import playstor from '../Assets/play-stor.png'


function HomeDashboard() {
    const HomeDashboard = styled.div`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px;
        gap: 20px;
        width: 204px;
        height: 481px;
        background: #FFFFFF;
        border: 1px solid #DADCDD;
        border-radius: 20px;
        margin-left: 100px;
        margin-top: 40px; 
`
    const QzeeLogo = styled.img`
        margin-top: 20px; 
        width: 90px;
        height: 30px;   
    `
    const Darlene = styled.img`
        margin-top: 8px; 
        width: 80px;
        height: 80px;
    `
    const DarName = styled.span`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: bolder;
        font-size: 14px;
        line-height: 120%;
        display: flex;
        align-items: center;
        text-align: center;
        color: #242328;
    `
    const Icons = styled.div`
        display: flex;
        gap:15px;
    `
    const Icon = styled.img`
        width: 15px;
        height:15px;
        cursor: pointer;
    `
    const DashItem = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 15px;
        gap: 15px;
        width: 164px;
        height: 7px;
        background: #FFFFFF;
        color: #242328;

        &:hover{
            border-left: 4px solid #FFC700;
            color: #FFC700;
            cursor: pointer;

        }

        `
    const DashTitle = styled.span`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
        display: flex;
        align-items: center;
    `
    const DownloadDiv = styled.div`
        display: flex;
        width: 164px;
        gap: 8px;
    `
    const DownloadBtns = styled.img`
        width:80px;
        height:25px;
        cursor: pointer;
    `
    return (
    <HomeDashboard>
        <QzeeLogo src={QZee} alt="QZee" />
        <Darlene src={darlene} alt="darlene" />
        <DarName>Darlene Robertson</DarName>
        <Icons>
            <Icon src={icon1} alt="icon" />
            <Icon src={icon2} alt="icon" />
            <Icon src={icon3} alt="icon" />
            <Icon src={icon4} alt="icon" />
        </Icons>
        <div>
            <DashItem>
                <img src={Dash1} alt="dash" />
                <DashTitle>Dashboard</DashTitle>
            </DashItem>
            <DashItem>
                <img src={Dash2} alt="dash" />
                <DashTitle>Explore</DashTitle>
            </DashItem>
            <DashItem>
                <img src={Dash3} alt="dash" />
                <DashTitle>Queue</DashTitle>
            </DashItem>
            <DashItem>
                <img src={Dash4} alt="dash" />
                <DashTitle>Booking</DashTitle>
            </DashItem>
        </div>
        <DownloadDiv>
            <DownloadBtns src={appstor} alt="" />
            <DownloadBtns src={playstor} alt="" />
        </DownloadDiv>
    </HomeDashboard>
  )
}

export default HomeDashboard
