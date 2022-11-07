import React from 'react'
import './App.css';
import './Footer.css';
import styled from 'styled-components';


const StyledDiv = styled.div`
height: 20px;
width: 20px;
`

const Footer = () => {
  return (
    <> 
    <div className="top-container">

            <div className= "footer">
             <li>| Team Tron+JFLO |</li>
             <li>| 2022 |</li>
             <li>| About Us |</li>
            <StyledDiv><img src={require('../images/TM.jpeg')} alt="" /></StyledDiv> 
            </div>
    </div>
    </>
  )
}

export default Footer