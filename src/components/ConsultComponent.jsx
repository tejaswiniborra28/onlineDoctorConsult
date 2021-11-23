import React from 'react'

import styled from 'styled-components';
import {  useHistory} from 'react-router-dom';
import Popup from 'reactjs-popup';
const Image=styled.img`
width:100px;
height:100px;
`
const Container1=styled.div`
width:100% !important;
max-heigth:600px;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const ConsultComponent = () => {
    const history=useHistory();

    const fixHandler=()=>{
             history.push("/success");
    }

    return (
        <Container1>
           <Image src="https://www.nicepng.com/png/detail/7-74994_free-png-doctor-png-images-transparent-doctor-images.png" alt=""/>
           <h3>kunlid</h3>
           <label>Phone Number</label>
           <input type="number" />
           <input type="datetime-local"/>
           <Popup trigger={<button >Fix appointment</button>} 
     position="right center">
      <div>please confirm</div>
      <button onClick={fixHandler}>Proceed</button>
      <button >Back</button>
    </Popup>
    
           </Container1>
    
    )
}

export default ConsultComponent
