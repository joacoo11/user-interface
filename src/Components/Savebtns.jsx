import React from "react";
import styled from "styled-components";
import save from '../Assets/savebtn.svg'
import cancel from '../Assets/cancelbtn.svg'


function Savebtns () {
    const MainDiv = styled.div`
        display: flex;
        gap: 1%;
        margin-left: 320px;
        margin-top: 1%;
    `
    const CancelBtn = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 25px 40px;
        gap: 15px;
        width: 25px;
        height: 0px;
        border: 1px solid #FFC700;
        border-radius: 52px;

    `
    const SaveBtn = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 25px 40px;
        gap: 15px;
        width: 25px;
        height: 0px;
        background: #FFC700;
        border-radius: 52px;

    `

    const Icon = styled.img`
        width: 10px;
        height: 10px;
     `

     const CancelSpan = styled.span`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 140%;
        color: #242328;

     `
    return(
        <MainDiv>
            <CancelBtn>
                <Icon src={cancel} alt="" />
                <CancelSpan>Cancel</CancelSpan>
            </CancelBtn>
            <SaveBtn>
                <Icon src={save} alt="" />
                <CancelSpan>Save</CancelSpan>
            </SaveBtn>
        </MainDiv>
    )
}

export default Savebtns