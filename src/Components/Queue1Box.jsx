import React from "react";
import styled from "styled-components";
import graypeop from '../Assets/graypeop.svg'
import grayswitch from '../Assets/grayswitch.svg'
import grayclock from '../Assets/grayclock.svg'



function Queue1Box (){
    const MainDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;
    max-width: 882px;
    height: 60px;
    border: 1px solid #DADCDD;
    border-radius: 10px;

    `
    const BookingNumber = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #B5B8BB;

    
    `
    const Cardiff = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #000000;
    `
    const ImgDiv = styled.div`
    display: flex;
    margin-left: 20%;
    `
       const ImgDiv2 = styled.div`
       display: flex;
       `
    const FourSpan = styled.span`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: #000000;
        margin-left: 7px;

    `

    const ActiveSpan = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #4FD587;
`
    
    return(
        <MainDiv>
            <BookingNumber>#234114</BookingNumber>
            <Cardiff>Cardiff Dough & Co</Cardiff>
            <ImgDiv>
                <img src={graypeop} alt="" />
                <FourSpan>4</FourSpan>
            </ImgDiv>
            <ImgDiv2>
                <img src={grayswitch} alt="" />
                <FourSpan>12</FourSpan>
            </ImgDiv2>
            <ImgDiv2>
                <img src={grayclock} alt="" />
                <FourSpan>-00:12:00</FourSpan>
            </ImgDiv2>
            <ActiveSpan>Active</ActiveSpan>
            <FourSpan>23.03.22</FourSpan>
            <FourSpan>12:22</FourSpan>


        </MainDiv>
    )
}

export default Queue1Box