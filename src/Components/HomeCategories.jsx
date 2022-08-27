import React from "react";
import styled from "styled-components";
import beauty1 from "../Assets/beauty1.png";
import beauty2 from "../Assets/beauty2.png";
import beauty3 from "../Assets/beauty3.png";
import health1 from "../Assets/health1.png";
import health2 from "../Assets/health2.png";
import health3 from "../Assets/health3.png";
import food1 from "../Assets/food1.png";
import food2 from "../Assets/food2.png";
import food3 from "../Assets/food3.png";
import faraway from "../Assets/faraway.png";
import currency from "../Assets/currency.png";
import { Link } from 'react-router-dom'

function HomeCategories() {
  const CategoryHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 16px;
    width: 732px;
    height: 38px;
    margin-top: 20px;
    margin-bottom: 10px; 
  `;
  const HomeCategoriesDiv = styled.div`
    height: 540px;
    width: 772px;
    overflow-y: scroll;
  `
  const HomeCategories = styled.div`
    margin-left: 350px;
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
  const CategoryImg = styled.img`
    width: 230px;
    height: 160px;
    margin-bottom: 0px;
  `;

  const CategoryTitle = styled.h3`
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 100%;
    color: #242328;
  `;

  const CategoryAddress = styled.span`
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    color: #7d7d83;
  `;
  const CategoryBody = styled.div`
    display: flex;
    gap: 20px;
  `
  const LocationAndMoneyDiv = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 7px;
  `
  const LocationAndMoney = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 120%;
    color: #242328;
  `
  const LocationAndMoneyImg = styled.img`
    width: 15px;
    height: 15px;
  `
  const StyledLink = styled(Link)`
    text-decoration: none;
  `

  return (
    <HomeCategories>
      <HomeCategoriesDiv>
      <CategoryHeader>
        <CategoryH2>Beauty</CategoryH2>
        <StyledLink to='/Beauty'><CategorySpan>Show all</CategorySpan></StyledLink>
      </CategoryHeader>
      <CategoryBody>
      <div>
        <CategoryImg src={beauty1} alt="beauty" />
        <CategoryTitle>Martin Berasategui</CategoryTitle>
        <CategoryAddress>3517 W. Gray St. Utica, Pennsylvania</CategoryAddress>
        <LocationAndMoneyDiv>
          <LocationAndMoneyImg src={faraway} alt="far" />
          <LocationAndMoney>12 km</LocationAndMoney>
          <LocationAndMoneyImg src={currency} alt="far" />
          <LocationAndMoney>$$$</LocationAndMoney>
        </LocationAndMoneyDiv>
      </div>
      <div>
        <CategoryImg src={beauty2} alt="beauty" />
        <CategoryTitle>Martin Berasategui</CategoryTitle>
        <CategoryAddress>3517 W. Gray St. Utica, Pennsylvania</CategoryAddress>
        <LocationAndMoneyDiv>
          <LocationAndMoneyImg src={faraway} alt="far" />
          <LocationAndMoney>12 km</LocationAndMoney>
          <LocationAndMoneyImg src={currency} alt="far" />
          <LocationAndMoney>$$$</LocationAndMoney>
        </LocationAndMoneyDiv>
      </div>
      <div>
        <CategoryImg src={beauty3} alt="beauty" />
        <CategoryTitle>Martin Berasategui</CategoryTitle>
        <CategoryAddress>3517 W. Gray St. Utica, Pennsylvania</CategoryAddress>
        <LocationAndMoneyDiv>
          <LocationAndMoneyImg src={faraway} alt="far" />
          <LocationAndMoney>12 km</LocationAndMoney>
          <LocationAndMoneyImg src={currency} alt="far" />
          <LocationAndMoney>$$$</LocationAndMoney>
        </LocationAndMoneyDiv>
      </div>
      </CategoryBody>
      <CategoryHeader>
        <CategoryH2>Food & Drink</CategoryH2>
        <CategorySpan>Show all</CategorySpan>
      </CategoryHeader>
      <CategoryBody>
      <div>
        <CategoryImg src={food1} alt="beauty" />
        <CategoryTitle>Martin Berasategui</CategoryTitle>
        <CategoryAddress>3517 W. Gray St. Utica, Pennsylvania</CategoryAddress>
        <LocationAndMoneyDiv>
          <LocationAndMoneyImg src={faraway} alt="far" />
          <LocationAndMoney>12 km</LocationAndMoney>
          <LocationAndMoneyImg src={currency} alt="far" />
          <LocationAndMoney>$$$</LocationAndMoney>
        </LocationAndMoneyDiv>
      </div>
      <div>
        <CategoryImg src={food2} alt="beauty" />
        <CategoryTitle>Martin Berasategui</CategoryTitle>
        <CategoryAddress>3517 W. Gray St. Utica, Pennsylvania</CategoryAddress>
        <LocationAndMoneyDiv>
          <LocationAndMoneyImg src={faraway} alt="far" />
          <LocationAndMoney>12 km</LocationAndMoney>
          <LocationAndMoneyImg src={currency} alt="far" />
          <LocationAndMoney>$$$</LocationAndMoney>
        </LocationAndMoneyDiv>
      </div>
      <div>
        <CategoryImg src={food3} alt="beauty" />
        <CategoryTitle>Martin Berasategui</CategoryTitle>
        <CategoryAddress>3517 W. Gray St. Utica, Pennsylvania</CategoryAddress>
        <LocationAndMoneyDiv>
          <LocationAndMoneyImg src={faraway} alt="far" />
          <LocationAndMoney>12 km</LocationAndMoney>
          <LocationAndMoneyImg src={currency} alt="far" />
          <LocationAndMoney>$$$</LocationAndMoney>
        </LocationAndMoneyDiv>
      </div>
      </CategoryBody>
      <CategoryHeader>
        <CategoryH2>Healthcare</CategoryH2>
        <CategorySpan>Show all</CategorySpan>
      </CategoryHeader>
      <CategoryBody>
      <div>
        <CategoryImg src={beauty1} alt="beauty" />
        <CategoryTitle>Martin Berasategui</CategoryTitle>
        <CategoryAddress>3517 W. Gray St. Utica, Pennsylvania</CategoryAddress>
        <LocationAndMoneyDiv>
          <LocationAndMoneyImg src={faraway} alt="far" />
          <LocationAndMoney>12 km</LocationAndMoney>
          <LocationAndMoneyImg src={currency} alt="far" />
          <LocationAndMoney>$$$</LocationAndMoney>
        </LocationAndMoneyDiv>
      </div>
      <div>
        <CategoryImg src={beauty2} alt="beauty" />
        <CategoryTitle>Martin Berasategui</CategoryTitle>
        <CategoryAddress>3517 W. Gray St. Utica, Pennsylvania</CategoryAddress>
        <LocationAndMoneyDiv>
          <LocationAndMoneyImg src={faraway} alt="far" />
          <LocationAndMoney>12 km</LocationAndMoney>
          <LocationAndMoneyImg src={currency} alt="far" />
          <LocationAndMoney>$$$</LocationAndMoney>
        </LocationAndMoneyDiv>
      </div>
      <div>
        <CategoryImg src={beauty3} alt="beauty" />
        <CategoryTitle>Martin Berasategui</CategoryTitle>
        <CategoryAddress>3517 W. Gray St. Utica, Pennsylvania</CategoryAddress>
        <LocationAndMoneyDiv>
          <LocationAndMoneyImg src={faraway} alt="far" />
          <LocationAndMoney>12 km</LocationAndMoney>
          <LocationAndMoneyImg src={currency} alt="far" />
          <LocationAndMoney>$$$</LocationAndMoney>
        </LocationAndMoneyDiv>
      </div>
      </CategoryBody>
      </HomeCategoriesDiv>
    </HomeCategories>
  );
}

export default HomeCategories;
