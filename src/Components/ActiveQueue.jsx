import React from "react";
import styled from "styled-components";
import Logo from '../Assets/Frame 422.png'
import fstbtn from '../Assets/1stbtn.png'
import sndbtn from '../Assets/2ndbtn.png'
import trdBtn from '../Assets/3rdBtn.png'
import litteArrows from '../Assets/littleArrows.png'
import location from '../Assets/location.png'
import lilwatch from '../Assets/lilwatch.png'




function ActiveQueue () {
    const ActiveQueueBigBox = styled.div`
        margin-left: 5%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 30px;
        max-width: 400px;
        width: 100%;
        max-height: 244px;
        height: 100%;
        background: #FFF9BF;
        border-radius: 20px;
    `
    const ActiveQueueLay = styled.div`
        max-width: 36%;
        width: 100%;
    `
    const ActiveQueueH1 = styled.h1`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 130%;
        color: #171718;
        margin-left: 5%;
    `
    const CardiffDough = styled.h2`  
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 120%;
        display: flex;
        align-items: center;
        color: #242328;
`

    const CategoryAddress = styled.span`
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 100%;
        color: #7d7d83;
    `;

    const ActiveQueueLeft = styled.div`
        max-width:190px;
        width: 100%;
        display: flex;
        flex-direction: column;
    `
    const LogoImg = styled.img`
        max-width: 70px;
        max-height: 70px;
    `
    const ThreeBtnsDiv = styled.div`
        margin-top: 5%;
        gap: 10px;
    `
    const Btns = styled.img`
        max-height: 46px;
        max-width: 46px;
        margin-left: 2%;
        cursor: pointer;

    `
    const ActiveQueueRight = styled.div`
        display: flex;
        flex-direction: column;
    `
    const ActiveQueueRightDivs = styled.div`
        display: flex;
        gap:5%;
        margin-bottom:9%;
        margin-top: -5%;
        
    `
    const RightDivLittleBoxes = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        gap: 10px;
        max-width: 96px;
        background: #FFE68E;
        border-radius: 20px;
    `


    return(
        <ActiveQueueLay> 
            <ActiveQueueH1>Active Queue</ActiveQueueH1>
            <ActiveQueueBigBox>
                <ActiveQueueLeft>
                    <LogoImg src={Logo} alt="" />
                    <CardiffDough>Cardiff Dough & Co</CardiffDough>
                    <CategoryAddress>3517 W.Gray St. Utica, Pennstylvania 57867</CategoryAddress>
                    <ThreeBtnsDiv>
                        <Btns src={fstbtn} alt="" />
                        <Btns src={sndbtn} alt="" />
                        <Btns src={trdBtn} alt="" />
                    </ThreeBtnsDiv>
                </ActiveQueueLeft>
                <ActiveQueueRight>
                    <ActiveQueueRightDivs>
                    <RightDivLittleBoxes>
                            <span>Next position</span>
                            <span>00:04:21</span>
                        </RightDivLittleBoxes>
                        <RightDivLittleBoxes>
                            <img src={litteArrows} alt="" />
                            <span>Next position</span>
                            <span>00:04:21</span>
                        </RightDivLittleBoxes>
                    </ActiveQueueRightDivs>
                    <ActiveQueueRightDivs>
                    <RightDivLittleBoxes>
                            <img src={location} alt="" />
                            <span>Should arrive at:</span>
                            <span>00:04:21</span>
                        </RightDivLittleBoxes>
                        <RightDivLittleBoxes>
                            <img src={lilwatch} alt="" />
                            <span>Estimated total wait</span>
                            <span>00:04:21</span>
                        </RightDivLittleBoxes>
                    </ActiveQueueRightDivs>
                </ActiveQueueRight>
            </ActiveQueueBigBox>
        </ActiveQueueLay>
    );
}

export default ActiveQueue