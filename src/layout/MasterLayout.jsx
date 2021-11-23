import React from 'react'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import styled from 'styled-components';

const Container=styled.div`
display :flex;
flex-direction:column;
width:100%;
height:100%;
position:relative;
flex-wrap:wrap;
`

const SContainer=styled.div`
display:flex;
align-items:center;
justify-content:center;
position:relative;
height:100%;
width:100vw;
`

const FContainer=styled.div`
position:relative;
`

const HContainer=styled.div`
position:relative;
`

const MasterLayout = (props) => {
    return (
    
        <Container>
        <HContainer>
            <HeaderComponent /></HContainer>
            <SContainer>
        {props.children} </SContainer>
        <FContainer>
            <FooterComponent /></FContainer>
        </Container>
            
    
    )
}

export default MasterLayout
