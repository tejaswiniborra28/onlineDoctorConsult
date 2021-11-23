import React,{useState} from 'react'
import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
import SpecialistsComponent from '../components/SpecialistsComponent'
import styled from 'styled-components';
import DoctorsComponent from '../components/DoctorsComponent';

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

`
const Main = () => {

    const [visibleDoc,setvisibleDoc]=useState('all');

    const updateVisibleDoc=(val)=>{
        
        setvisibleDoc(val);
        console.log(visibleDoc);
    }
    return (
        <Container>
            <HContainer>
            <HeaderComponent /></HContainer>
            <SContainer>
            <SpecialistsComponent  updateVisibleDoc={updateVisibleDoc} />
            <DoctorsComponent  visibleDoc={visibleDoc} /></SContainer>
            <FContainer>
            <FooterComponent /></FContainer>
        </Container>
    )
}

export default Main
