import React from 'react'
import styled from 'styled-components';
import { Link} from 'react-router-dom';

const Container=styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
), url("https://cdn.pixabay.com/photo/2020/05/25/03/37/doctor-5216835__340.png") center;
background-size: cover;
display:flex;
align-items:center;
justify-content:center;
`;

const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:40%;
height:40%;

`

const Button=styled.button`
width:10%;
height:10%;
margin:10px;
color:white;
border:none;
background-color:teal;
border-radius:10px;
cursor:pointer;
`

const Title=styled.div`
font-size:25px;

`
const LinkContainer=styled(Link)`
text-decoration:none;
color:white;
cursor:pointer
`


const Welcome=()=> {

    return (
        <Container>
            <Wrapper>
            <Title> Welcome to HealthHub</Title>
            <Button name="login"><LinkContainer to="/login">Login </LinkContainer></Button>
            <Button name="register"><LinkContainer to="/register">Register </LinkContainer></Button>
            </Wrapper>
        </Container>
    )
}

export default Welcome;