import React from "react";
import styled from "styled-components";
import Logo from '../Assets/Frame 422.png'
import lilCalendar from '../Assets/lilCalendar.png'
import lilPeople from '../Assets/lilPeople.png'



function ActiveBookings () {
    const ActiveBookingsLay = styled.div`
        max-width: 50%;
        width: 100%;
        margin-top: 2%;
    `

    const ActiveQueueH1 = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    color: #171718;
`

    const ActiveBookingBox = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 30px;
    gap: 10px;    
    max-width: 342px;
    max-height:37px;
    height: 100%;
    background: #F1F4F8;
    border-radius: 20px;
    margin-top: 10px;  
    ` 
    const LogoImg = styled.img`
    max-width: 45px;
    max-height: 45px;
`
    const CardiffDough = styled.h2`  
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 120%;
    display: flex;
    align-items: center;
    color: #242328;
    `
    const ActiveBookingRightDiv = styled.div`
        margin-top:-7%;
    `
    const RightDivMiddle= styled.div`
    margin-top:-7%;
`
    const RightDivMiddle2= styled.div`
    margin-top:-7%;
    margin-left: 30px;
    `
    const CategoryAddress = styled.span`
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    color: #7d7d83;
`;

    const RightDivBottom = styled.div`
        display: flex;
    ` 
    const GroupAndtime = styled.div`
        margin-top: 6px;
    `
    const TimeSpan = styled.span`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 150%;
        align-items: center;
        color: #242328;
        margin-left: 6px;
    
    `

    return(
        <ActiveBookingsLay>
            <ActiveQueueH1>Active Bookings</ActiveQueueH1>
            <ActiveBookingBox>
                <LogoImg src={Logo}/>
                <ActiveBookingRightDiv>
                    <CardiffDough>Cardiff Dough & Co</CardiffDough>   
                    <RightDivBottom>
                    <RightDivMiddle>
                        <CategoryAddress>Booked time</CategoryAddress>
                        <GroupAndtime>
                            <img src={lilCalendar} alt="" />
                            <TimeSpan>Sep 23, 12:46</TimeSpan>
                        </GroupAndtime>
                    </RightDivMiddle>
                    <RightDivMiddle2>
                        <CategoryAddress>Group size</CategoryAddress>
                        <GroupAndtime>
                            <img src={lilPeople} alt="" />
                            <TimeSpan>4</TimeSpan>
                        </GroupAndtime>
                    </RightDivMiddle2>
                    </RightDivBottom>
                </ActiveBookingRightDiv>
            </ActiveBookingBox>
            <ActiveBookingBox>
                <LogoImg src={Logo}/>
                <ActiveBookingRightDiv>
                    <CardiffDough>Cardiff Dough & Co</CardiffDough>   
                    <RightDivBottom>
                    <RightDivMiddle>
                        <CategoryAddress>Booked time</CategoryAddress>
                        <GroupAndtime>
                            <img src={lilCalendar} alt="" />
                            <TimeSpan>Sep 23, 12:46</TimeSpan>
                        </GroupAndtime>
                    </RightDivMiddle>
                    <RightDivMiddle2>
                        <CategoryAddress>Group size</CategoryAddress>
                        <GroupAndtime>
                            <img src={lilPeople} alt="" />
                            <TimeSpan>4</TimeSpan>
                        </GroupAndtime>
                    </RightDivMiddle2>
                    </RightDivBottom>
                </ActiveBookingRightDiv>
            </ActiveBookingBox>
            <ActiveBookingBox>
                <LogoImg src={Logo}/>
                <ActiveBookingRightDiv>
                    <CardiffDough>Cardiff Dough & Co</CardiffDough>   
                    <RightDivBottom>
                    <RightDivMiddle>
                        <CategoryAddress>Booked time</CategoryAddress>
                        <GroupAndtime>
                            <img src={lilCalendar} alt="" />
                            <TimeSpan>Sep 23, 12:46</TimeSpan>
                        </GroupAndtime>
                    </RightDivMiddle>
                    <RightDivMiddle2>
                        <CategoryAddress>Group size</CategoryAddress>
                        <GroupAndtime>
                            <img src={lilPeople} alt="" />
                            <TimeSpan>4</TimeSpan>
                        </GroupAndtime>
                    </RightDivMiddle2>
                    </RightDivBottom>
                </ActiveBookingRightDiv>
            </ActiveBookingBox>
        </ActiveBookingsLay>
    )

}

export default ActiveBookings