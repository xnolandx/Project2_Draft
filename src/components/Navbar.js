import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styled from "styled-components"

const StyledNavBar = styled.ul`
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    background-color: white;
    `

export default function Navbar() {
    const path = window.location.pathname
    return (
        <div className="top-container">
            <nav className="navbar">
                <Link to="/" className="site-title">
                 <li></li>
                </Link>

                <StyledNavBar>
                    <CustomLink to='/'>Profile</CustomLink>
                    <CustomLink to='/'>Events</CustomLink>
                    <CustomLink to='/mostwanted'>Most Wanted</CustomLink>
                    <CustomLink to='/'>Teams</CustomLink>
                    <CustomLink to='/about'>About Us</CustomLink>
            
                </StyledNavBar>

             </nav>
     </div>
    )
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive =useMatch({ path: resolvedPath.pathname, end: true})
    return (
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
            {children}
        </Link>
    </li>
    )
}