import React from "react";
import styled from "styled-components";
import Search from '../Assets/Search.png'
import loki from '../Assets/loki.svg'
import mail from '../Assets/mail.svg'
import phonie from '../Assets/phonie.svg'




function ProfileContactInputs (){
    const Contacts = styled.div `
        margin-left:560px;
        margin-top: -300px;
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
const SearchDiv2 = styled.div`
    display: flex;
    gap: 2%;
    margin-left: 2%;
    margin-top: 2%;
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
        <Contacts>
            <ContactH1>Contacts</ContactH1>
            <SearchDiv>
                <SearchBar>
                    <ExploreSpan>Phone</ExploreSpan>
                    <SearchDiv>
                        <SearchIcon src={phonie} alt="Search" />
                        <InputSearch type="text" placeholder='234 23232 24 23'/>
                    </SearchDiv>
                </SearchBar>                
            </SearchDiv>
            <SearchDiv2>
                <SearchBar>
                    <ExploreSpan>Email</ExploreSpan>
                    <SearchDiv>
                        <SearchIcon src={mail} alt="Search" />
                        <InputSearch type="text" placeholder='robertson@gmail.com'/>
                    </SearchDiv>
                </SearchBar>                
            </SearchDiv2>
            <PasswordDiv>
                <ContactH1>Password</ContactH1>
                <SearchDiv>
                <SearchBar>
                    <ExploreSpan>Password</ExploreSpan>
                    <SearchDiv>
                        <SearchIcon src={loki} alt="Search" />
                        <InputSearch type="password" placeholder=''/>
                    </SearchDiv>
                </SearchBar>     
                <SearchBar>
                    <ExploreSpan>Confirm password</ExploreSpan>
                    <SearchDiv>
                        <SearchIcon src={loki} alt="Search" />
                        <InputSearch type="password" placeholder=''/>
                    </SearchDiv>
                </SearchBar>            
            </SearchDiv>
            </PasswordDiv>
        </Contacts>
    )    
}
export default ProfileContactInputs