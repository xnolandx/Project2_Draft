import React from 'react'
//import "./Header.css"
import styled from 'styled-components'

const StyleHeader = styled.div`
background-color: red;
    color: white;
    text-align: center;
    justify-content: center;
    display: grid;
    font-size: 35px;
    text-transform: uppercase;
    border: 5px;
    border-color: black;
    font-family: BentonSans,'Courier New', Courier, monospace;
    font-weight: bold;
    border-radius: ;
`
function Header() {
    return(
        <div className="top-container">
            
            <div className="header">
        <StyleHeader>
           Marvel
        </StyleHeader>
        
             </div>
        </div>
    )
}

export default Header;