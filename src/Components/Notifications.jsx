import React from "react";
import styled from "styled-components";
import lilBell from "../Assets/lilBell.png"

function Notifications () {

    const NotificationsDiv = styled.div`
        margin-left: 23%;
        margin-top: -10%;
    `
    const NotificationsH1 = styled.h1`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
        display: flex;
        align-items: center;
        color: #171718;
    `
        const CategoryHeader = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 16px;
        max-width: 872px;
        height: 38px;
        margin-top: 20px;
        margin-bottom: 10px; 
    `;
        const CategoryH2 = styled.h2`
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 120%;
        display: flex;
        align-items: center;
        color: #242328;
        `;

        const CategorySpan = styled.span`
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #ffc700;
        margin-top: 5px;
        cursor: pointer;
        `;
        const NotificationBoxes = styled.div`
        `
        const NotificationBoxesDiv = styled.div`
            display: flex;
            gap: 1%;
        `
        const NotificationBox = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        gap: 8px;
        max-width: 150.5px;
        max-height: 79px;
        background: #F1F4F8;
        border-radius: 20px;

        `

        const NotificationBoxTop = styled.div`
            display: flex;
            gap: 20px;
        `
        const LilBell = styled.img`
        max-width: 17px;
        max-height: 17px;
        `

        const FiftyFour = styled.span`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 12px;
        color: #7D7D83;
        margin-left: 24%;

        `
        const NotificationMessage = styled.span`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 150%;
        color: #242328;

        `



    return(
        <NotificationsDiv>
            <CategoryHeader>
                  <NotificationsH1>Notifications (20)</NotificationsH1>
                  <CategorySpan>Show all</CategorySpan>
            </CategoryHeader>
            <NotificationBoxesDiv>
            <NotificationBoxes>
                <NotificationBox>
                    <NotificationBoxTop>
                        <LilBell src={lilBell} alt="" />
                        <NotificationMessage>Your queue position has been changed from 12 to 11</NotificationMessage>
                    </NotificationBoxTop>
                        <FiftyFour>54 min ago</FiftyFour>
                </NotificationBox>
            </NotificationBoxes>
            <NotificationBoxes>
                <NotificationBox>
                    <NotificationBoxTop>
                        <LilBell src={lilBell} alt="" />
                        <NotificationMessage>Your queue position has been changed from 12 to 11</NotificationMessage>
                    </NotificationBoxTop>
                        <FiftyFour>54 min ago</FiftyFour>
                </NotificationBox>
            </NotificationBoxes>
            <NotificationBoxes>
                <NotificationBox>
                    <NotificationBoxTop>
                        <LilBell src={lilBell} alt="" />
                        <NotificationMessage>Your queue position has been changed from 12 to 11</NotificationMessage>
                    </NotificationBoxTop>
                        <FiftyFour>54 min ago</FiftyFour>
                </NotificationBox>
            </NotificationBoxes>
            <NotificationBoxes>
                <NotificationBox>
                    <NotificationBoxTop>
                        <LilBell src={lilBell} alt="" />
                        <NotificationMessage>Your queue position has been changed from 12 to 11</NotificationMessage>
                    </NotificationBoxTop>
                        <FiftyFour>54 min ago</FiftyFour>
                </NotificationBox>
            </NotificationBoxes>
            </NotificationBoxesDiv>
        </NotificationsDiv>
    )
}

export default Notifications