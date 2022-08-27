import React from 'react';
import styled from 'styled-components';
import Qzee from '../Assets/QZee-icon.png'
import email from '../Assets/email.png'
import Logo from '../Assets/Logo.png'
import { Link } from 'react-router-dom';



function Login() {
    
    const Login = styled.div`
        height: 100vh;
        width: 100vw;
        background: #242328;
    `
    const LoginLeftDiv = styled.div`
        max-width: 800px;
        max-height: 800px;
    `
     const QzeeLogo = styled.img`
        height: 650px;
        width: 650px;
     `
     const QzeeTitle = styled.img`
        position: absolute;
        width: 504px;
        height: 143px;
        left: 129px;
        top: 241px;
     `
     const LoginFormDiv = styled.div`
        display :flex;
        flex-direction: column;
        margin-left: 800px;
        margin-top: -440px;
        width: 560px;
     `

     const SignIn = styled.h2`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size:32px;
        line-height: 120%;
        color: #FFFFFF;
        margin-bottom: 0px;
     `
    const Text = styled.p`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size:14px;
        line-height: 120%;
        color: #B5B8BB;
        width: 430px;
        height: 54px;
    `
    const Img = styled.img`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 20px;
        gap: 10px;
        width: 74px;
        height: 74px;
        border: 1px solid #FFC700;
        border-radius: 10px;
        margin-left: 150px;
    `


      const StyledLink = styled(Link)`
         text-decoration: none; 
      `

  return (
    <Login>
        <LoginLeftDiv>
            <QzeeLogo src={Qzee} alt="" />
            <QzeeTitle src={Logo} alt="" />
        </LoginLeftDiv>
        <LoginFormDiv>
            <StyledLink to='/Login4'><Img src={email} alt="email" /></StyledLink>
            <SignIn>Check your email, please!</SignIn>
            <Text>We sent you an email with restore password instructions
                Open your mail and check spam if didn't receive the mail.
            </Text>
        </LoginFormDiv>
    </Login>
  )
}


export default Login
