import React from 'react'
import styled from 'styled-components';
const Container=styled.div`

flex:1;
margin:5px;
min-width:280px;
height:150px;
display:flex;
justify-content:start;
align-items:start;
border:1px solid black;

border-radius:20px;
`
const Image=styled.img`
width:25%;
border-radius:20px;
`

const Info=styled.div``
const SpecialistComponent = ({item,updateVisibleDoc}) => {

    return (
        <Container onClick={()=>{updateVisibleDoc(item.speciality)}}>
                <Image src={item.img} alt="" />
                 <Info>
                 <h3>{item.speciality}</h3>
             
                 <span>{item.Desc}</span>
                 </Info>
        </Container>
    )
}

export default SpecialistComponent
