import React from 'react'
import specialists from '../data/specialists'
import styled from 'styled-components';
import SpecialistComponent from './SpecialistComponent';


const Container=styled.div`
display:flex;
width:30vw;
height:50vh;
flex-direction:row;
align-items:center;
justify-content:center;
flex-wrap:wrap;
margin:20px;
overflow:auto;
`
const SpecialistsComponent = ({updateVisibleDoc}) => {


    return (
        <Container>
            { 
                specialists.map((item)=>
                <SpecialistComponent item={item} key={item.id} updateVisibleDoc={updateVisibleDoc} />
              
                )
            }
        </Container>
    )
}

export default SpecialistsComponent
