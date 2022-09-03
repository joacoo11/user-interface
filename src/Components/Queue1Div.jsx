import React from "react";
import styled from "styled-components";
import Queue1Box from "./Queue1Box";

function Queue1Div(){
    const MainDiv = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: -400px;
        margin-left: 320px;
        gap: 10px;
    `
    return(
        <MainDiv>
            <Queue1Box />
            <Queue1Box />
            <Queue1Box />
            <Queue1Box />
            <Queue1Box />
            <Queue1Box />
            <Queue1Box />
        </MainDiv>
    )
}

export default Queue1Div