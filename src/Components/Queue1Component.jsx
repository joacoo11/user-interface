import React from "react";
import styled from "styled-components";
import loki from '../Assets/loki.svg'
import save from '../Assets/savebtn.svg'
import venues from '../Assets/venues.svg'






function ProfileContactInputs (){
const InputDiv2 = styled.div`
    margin-left:250px;
    margin-top: -140px;
`
const SearchBar = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
    gap: 8px;
    width: 300px;
    height: 68px;
    border: 1px solid #DADCDD;
    border-radius: 10px;
`
const ExploreSpan = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #B5B8BB; 
`
const InputSearch = styled.input`
    width: 250px;
    margin-left: 5px;
    border: none;    
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    color: #7D7D83;

    &:focus{
        outline-color: white;
    }
`
const SearchDiv = styled.div`
    display: flex;
    gap: 2%;
    margin-left: 2%;
`

const SearchIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-top: 2px;
`
const ContactH1 = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    color: #242328;
    margin-left: 2%;

`
const PasswordDiv = styled.div`
    margin-top: 2%;
`

    return(
            <PasswordDiv>
                <SearchDiv>
                <SearchBar>
                    <ExploreSpan>Status</ExploreSpan>
                    <SearchDiv>
                        <SearchIcon src={save} alt="Search" />
                        <InputSearch type="password" placeholder='Processed'/>
                    </SearchDiv>
                </SearchBar>     
                <SearchBar>
                    <ExploreSpan>Confirm password</ExploreSpan>
                    <SearchDiv>
                        <SearchIcon src={venues} alt="Search" />
                        <InputSearch type="password" placeholder='All'/>
                    </SearchDiv>
                </SearchBar>            
            </SearchDiv>
            </PasswordDiv>
    )    
}
export default ProfileContactInputs