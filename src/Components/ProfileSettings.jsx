import React from "react";
import styled from "styled-components";
import Profileset from '../Assets/Profileset.svg'
import Search from '../Assets/Search.png'
import inputpeop from '../Assets/inputpeop.svg'
import dob from '../Assets/dob.svg'




function ProfileSettings (){
    const MainDiv = styled.div`
        margin-left: 1.5%;
    `
    const InputDiv = styled.div`
        display: flex;
    `
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
        width: 350px;
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
        width: 300px;
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

    const ProfileSetH1 = styled.h1`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        color: #242328;
        margin-left: 2.5%;
        
    `
    return(
        <MainDiv>
            <ProfileSetH1>Profile Settings</ProfileSetH1>
            <InputDiv>
                <img src={Profileset} alt="" />
                <SearchDiv>
                <SearchBar>
                    <ExploreSpan>First name</ExploreSpan>
                    <SearchDiv>
                        <SearchIcon src={inputpeop} alt="Search" />
                        <InputSearch type="text" placeholder='Darlene'/>
                    </SearchDiv>
                </SearchBar>
                <SearchBar>
                    <ExploreSpan>Last name</ExploreSpan>
                    <SearchDiv>
                        <SearchIcon src={inputpeop} alt="Search" />
                        <InputSearch type="text" placeholder='Robertson'/>
                    </SearchDiv>
                </SearchBar>
                </SearchDiv>
            </InputDiv>
            <InputDiv2>
            <SearchBar>
                    <ExploreSpan>DOB</ExploreSpan>
                    <SearchDiv>
                        <SearchIcon src={dob} alt="Search" />
                        <InputSearch type="text" placeholder='12/02/1980'/>
                    </SearchDiv>
                </SearchBar>
            </InputDiv2>
        </MainDiv>
    )
}

export default ProfileSettings