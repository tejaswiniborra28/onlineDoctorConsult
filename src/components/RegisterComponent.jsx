import React, { useState } from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import * as Ai from "react-icons/ai";
import { register } from "../redux/user/userAction"
import { connect } from "react-redux";
import { errors } from '../helpers/Errors';
import { isEmpty, isUndefined } from "lodash";
import { mailExists } from "../redux/user/userAction"

const Container = styled.div`
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

const Wrapper = styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:40%;
        height:40%;

        `
const Title = styled.div`
        font-size:25px;
        margin:10px;

        `
const Form = styled.form`
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        `

const Input = styled.input`
        flex:1;
        min-width:40%;
        max-width:40%;
        margin:10px 20px 0px 0px;
        padding:10px;
        `

const Button = styled.button`
        width:20%;
        height:20%;
        margin:10px;
        color:white;
        padding: 10px;
        border:none;
        background-color:teal;
        border-radius:10px;
        cursor:pointer;
        `


const RegisterComponent = props => {
    const [user, setUser] = useState({
    });
    const [pass,setPass]=useState("");
    const [error, setError] = useState({

    })

    const history = useHistory();



    const submitUser = (e) => {
        e.preventDefault();
 
        const  id = Math.floor((Math.random() * 10000));
        setError({});
        console.log(props.mail)
       const result=()=>{
        props.register(id,user);
        history.push("/login");
        }
       const output=!isEmpty(props.mail)?setError({ "email": errors.email }):isUndefined(user.password)? 
        setError({ "password": errors.password }):
        pass !== user.password?
      setError({ "passMatch": errors.passMatch }):result();
      console.log(output
        );
    }
    const changeHandler = (e) => {
    //      if(e.target.name!=="pass")  {
    //          if(e.target.name==="email"){
    //              console.log("inside");
    //            props.mailExists(e.target.value);
    //          }
    //     setUser({ ...user, [e.target.name]: e.target.value });
       
    // }
    // else{
    //     setPass(e.target.value);
    // }
        
    }


    const handleBlur=(e)=>{
        if(e.target.name!=="pass")  {
            if(e.target.name==="email"){
                console.log("inside");
              props.mailExists(e.target.value);
            }
       setUser({ ...user, [e.target.name]: e.target.value });
      
   }
   else{
       setPass(e.target.value);
   }

    }
    return (
        <Container>
            <Wrapper>
                <Title> Register Here</Title>
                <Form onSubmit={submitUser}>
                    <Input placeholder="username" name="userName" id="userName" onChange={changeHandler} maxLength={4} required />
                    <Input type="email" placeholder="email" name="email" id="email" onChange={changeHandler} onBlur={handleBlur} required />
                    <Input type="password" placeholder="password" name="password" id="password" onChange={changeHandler} onBlur={handleBlur} required />
                    <Input type="password" placeholder="confirm password" name="pass" id="pass" onChange={changeHandler} onBlur={handleBlur} required />
                    <Button>Register</Button>
                    {!isUndefined(error.passMatch)?<div style={{color:"red"}}>{error.passMatch}</div>:null}
                    {!isUndefined(error.password)?<div style={{color:"red"}}>{error.password}</div>:null}
                    {!isUndefined(error.email)?<div style={{color:"red"}}>{error.email}</div>:null}
                </Form>
                <Button onClick={() => history.push("/start")}> <Ai.AiOutlineRollback /></Button>
            </Wrapper>
        </Container>
    )
}


const  mapStateToProps = state => {
    return {
        mail: state.regUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (id,val) => dispatch(register(id,val)),
        mailExists: (val)=> dispatch(mailExists(val))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)
