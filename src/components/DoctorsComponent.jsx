import React from 'react'
import  {doctors} from '../data/specialists'
import styled from 'styled-components';
import DoctorComponent from './DoctorComponent';

const Container=styled.div`
display:flex;
width:30vw;
height:50vh;
flex-direction:column;
align-items:start;
justify-content:space-between;
margin:20px;
overflow:auto;
`

const DoctorsComponent = ({visibleDoc}) => {
    return (
        <Container>
            {
             ( visibleDoc==="all") ? doctors.map((item)=>
                <DoctorComponent item={item} key={item.id} />)
                :
                doctors.map((item)=>
                (visibleDoc===item.speciality)&&
                <DoctorComponent item={item} key={item.id} />)
                
            }
        </Container>
    )
}

export default DoctorsComponent
