import React,{useState} from 'react'
import styled from 'styled-components';
import * as Ai from "react-icons/ai";
import {  useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import { mailExists } from "../redux/user/userAction"
import { isUndefined,isEmpty } from 'lodash';
import { errors } from '../helpers/Errors';

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
const Title=styled.div`
font-size:25px;
margin:10px;

`
const Form=styled.form`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
`

const Input=styled.input`
width:40%;
height:10%;
margin:10px
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

const Login = props => {
    const [lUser,setLuser]=useState({});
    const [error,setError]=useState({});
    const history=useHistory();
const changeHandler=(e)=>{
    // setLuser({ ...lUser, [e.target.name]: e.target.value });
}

const submitForm=(e)=>{
    e.preventDefault();
    setError({})

  
   isEmpty(props.mail)?setError({ "loginError1": errors.loginError1 }): (props.mail[0][1].password!==lUser.password)?
   setError({ "loginError2": errors.loginError2 }):
   history.push("/home");
}
    const handleBlur=(e)=>{
  console.log(e.target.name);
        
      
        setLuser({ ...lUser, [e.target.name]: e.target.value });
        if(e.target.name==="email"){
            props.mailExists(e.target.value)
        }

    }
    return (
        <Container>
        <Wrapper>
        <Title> Login Here</Title>
        <Form onSubmit={submitForm}>
        <Input type="email" placeholder="email address" id="email" name="email" onChange={changeHandler} onBlur={handleBlur} required/>
        <Input type="password" placeholder="password" id="password" name="password" onChange={changeHandler} onBlur={handleBlur} required/>
        <Button>Login</Button> 
        <Button onClick={()=> history.push("/start")}> <Ai.AiOutlineRollback /></Button>
        {!isUndefined(error.loginError1)?<div style={{color:"red"}}>{error.loginError1}</div>:null}
        {!isUndefined(error.loginError2)?<div style={{color:"red"}}>{error.loginError2}</div>:null}
            
        </Form>
      
        </Wrapper>
    </Container>
    )
}

const mapStateToProps = state=> {
    return {
            mail: state.regUser
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mailExists: (val)=> dispatch(mailExists(val))

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
