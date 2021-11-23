import React from 'react'
import * as Icon from "react-icons/ai";
import * as Icons from "react-icons/fi";
import * as ICONS from "react-icons/md";
import styled from 'styled-components';

const BlockContainer=styled.div`
width:15%;
font-size:15px;
`
const FooterContainer=styled.div`
display:flex;
background-color:Teal;
color:white;
width:100vw;
height:20vh;
align-items:center;
justify-content:space-around;

position:absolute;
opacity:0.5;
`
const SpanContainer=styled.span`
margin:0px 0px 0px 2%;
`
const FooterComponent = () => {
    return (
        <>
        <FooterContainer>
            <BlockContainer>
                <h3>About us</h3>
                <p>
                    HealthHub application is available to all the people who wants to connect to the Doctors through online.
                
                </p>
            </BlockContainer>
            <BlockContainer>
                <h3>Contact</h3>
                <div>
                < Icon.AiOutlineMail />
                <SpanContainer>healthhub@gmail.com</SpanContainer></div>
                <div>
                <Icons.FiPhone />
                <SpanContainer>+91 8091234567</SpanContainer>
                </div>
                <div>
                <ICONS.MdLocationOn />
                <SpanContainer>available online</SpanContainer>
                </div>
            </BlockContainer>
            </FooterContainer>
        </>
    )
}

export default FooterComponent
