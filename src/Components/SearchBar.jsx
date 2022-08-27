import React from 'react'
import styled from 'styled-components'
import Search from '../Assets/Search.png'
import settings from '../Assets/settings.png'


function SearchBar() {

    const HeaderDiv = styled.div`
        margin-left: 340px;
        margin-top: -480px;
        display: flex;
        gap: 15px;
    `

    const SearchBar = styled.div`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        gap: 8px;
        width: 750px;
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
        width: 700px;
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
    `
    const SearchIcon = styled.img`
        width: 15px;
        height: 15px;
        margin-top: 2px;
    `
    const SetImg = styled.img`
        width: 60px;
        height: 60px;
        cursor: pointer;
    `
  return (
    <HeaderDiv>
    <SearchBar>
      <ExploreSpan>Explore our businesses</ExploreSpan>
      <SearchDiv>
        <SearchIcon src={Search} alt="Search" />
        <InputSearch type="search" placeholder='Search'/>
      </SearchDiv>
    </SearchBar>
    <SetImg src={settings} alt="settings" />
    </HeaderDiv>
  )
}


export default SearchBar
