import React, { useState } from 'react'
import styled from 'styled-components';
import * as BarIcon from "react-icons/fa";
import { IconContext } from 'react-icons';
import * as HomeIcon from "react-icons/ai";
import * as AccountIcon from "react-icons/md";
import * as CrossIcon from "react-icons/im";
import { Link,useHistory } from 'react-router-dom';

const BarContainer = styled.div`

display:flex;
justify-content:space-between;
background-color:Teal;
height:5vh;
opacity:0.5;
font-size:20px;

`
const UlContainer = styled.ul`
width:100%;
list-style:none;


`
const LiContainer = styled.li`
margin:10px;
cursor:pointer;


`

const NavContainer = styled.div`
background-color: Teal;
color:white;
width:15vw;
height:100vh;
display:flex;
align-items:start;
z-index:1;
justify-content:center;
top:0px;
position:fixed;

`

const SpanContainer = styled.span`
margin:0px 0px 0px 5%;
`

const LinkContainer = styled(Link)`
text-decoration:none;
color:white;
:hover{
    background-color:blue;
}
cursor:pointer
`
const HeaderComponent = () => {
    const [sidebar, setSideBar] = useState(false);
    const history=useHistory();
    const updateSideBar = () => setSideBar(!sidebar);
    const logout=()=>history.push("/start");
    return (
        <>
            <IconContext.Provider value={{ color: "white" }}>
                <BarContainer>
                    <BarIcon.FaBars onClick={updateSideBar} />
                    <span style={{ color: "white" }}>HealthHub.</span>
                 <HomeIcon.AiOutlineLogout onClick={logout}/>
                </BarContainer>
                {sidebar && <NavContainer>
                    <UlContainer onClick={updateSideBar}>
                        <LiContainer><CrossIcon.ImCross /></LiContainer>
                        <LiContainer>
                            <HomeIcon.AiOutlineHome />
                            <SpanContainer> <LinkContainer to="/home"> Home </LinkContainer></SpanContainer>
                        </LiContainer>
                        <LiContainer>
                            <AccountIcon.MdAccountCircle />
                            <SpanContainer>  <LinkContainer to=""> Account </LinkContainer> </SpanContainer>

                        </LiContainer>
                        <LiContainer>
                            <BarIcon.FaStethoscope />
                            <SpanContainer> <LinkContainer to=""> Consultation  </LinkContainer></SpanContainer>
                        </LiContainer>
                        <LiContainer>
                            <AccountIcon.MdOutlineManageAccounts />
                            <SpanContainer> <LinkContainer> Manage Doctor Details </LinkContainer></SpanContainer>
                        </LiContainer>
                        <LiContainer>
                            <HomeIcon.AiOutlineLogout />
                            <SpanContainer>  <LinkContainer to="/start"> Logout </LinkContainer> </SpanContainer>
                        </LiContainer>
                    </UlContainer>
                </NavContainer>}
            </IconContext.Provider>
        </>
    )
}

export default HeaderComponent
