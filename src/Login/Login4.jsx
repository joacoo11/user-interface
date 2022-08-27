import React from 'react';
import styled from 'styled-components';
import Qzee from '../Assets/QZee-icon.png'
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
        margin-left: 650px;
        margin-top: -480px;
     `

     const SignIn = styled.h2`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 33px;
        line-height: 120%;
        color: #FFFFFF;
        margin-bottom: 10px;
        margin-left: 180px;
     `
     const InputDiv = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 200px;
     ` 

     const Label = styled.label`
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 140%;
        color: #B5B8BB;
        align-self: flex-start;
        margin-bottom: 6px;
     `
     const Input = styled.input`
        box-sizing: border-box;
        padding: 16px 16px 16px;
        width: 320px;
        height: 50px;
        border: 1px solid #DADCDD;
        border-radius: 10px;
        margin-bottom: 6px;
        background: #242328;
        color: #FFFFFF;

     `
     const ForgotPassword = styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 849px;
     `
     const SignInBtn = styled.button`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 25px 40px;
        gap: 15px;
        width: 320px;
        height: 50px;
        background: #FFC700;
        border: 1px solid #FFC700;
        border-radius: 52px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 140%;
        display: flex;
        align-items: center;
        color: #242328;
        cursor: pointer;
        margin-top: 10px;
     `
     const ForgotSpan = styled.span`
        cursor: pointer;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 125%;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFC700;
        margin-left: 100px;
        margin-top: 10px;
        margin-bottom: 10px;
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
            <SignIn>Create New Password</SignIn>
            <InputDiv>
                <Label>Password</Label>
                <Input type="password" placeholder='Your Password' />
            </InputDiv>
            <InputDiv>
                <Label>Confirm Password</Label>
                <Input type="password" placeholder='Your Password' />
            </InputDiv>
        </LoginFormDiv>
        <ForgotPassword>
        <StyledLink to='/Login5'><SignInBtn>Save new password</SignInBtn></StyledLink>
        </ForgotPassword>
    </Login>
  )
}


export default Login
