import React from 'react'
import {  useHistory} from 'react-router-dom';
import styled from 'styled-components';



const Container=styled.div`

flex:1;
margin:5px;
min-width:280px;
height:250px;
display:flex;
justify-content:space-between;
align-items:start;
border:1px solid black;
border-radius:20px;

`

const Image=styled.img`
width:30%;
border-radius:20px;
`
const Button=styled.button`
width:10vw;
height:5vh;
margin:10px;
color:white;
padding: 10px;
border:none;
background-color:teal;
border-radius:10px;
cursor:pointer;
`

const Info=styled.div`

display:flex;

flex-direction:column;
`
const DoctorComponent = ({item}) => {
    

const history=useHistory();
   const consultHandler =()=>{
       history.push("/consult")

    }
    return (<>
        <Container>
                <Image src={item.img} alt=""/>
                 <Info>
                 <h3>{item.name}</h3>
                 <span>{item.speciality}</span>
                
                 <label>Hospital:<span>{item.hospital}</span></label>
                 <label>Exp:<span>{item.experience}</span></label>
                 
                 <Button onClick={consultHandler}>consult now</Button>
                
                 </Info>
        </Container>
        </>
    )
}

export default DoctorComponent;
