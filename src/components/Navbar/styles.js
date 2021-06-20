import styled from 'styled-components'
// import { NavLink } from 'react-router-dom'

// NavBar
export const NavbarContainer = styled.div`
    display: flex; 
    width: 100%; 
    justify-content: center;
    align-items: center;
    height: 65px;
    background-color: white;
    font-family: Roboto, sans-serif;
`

export const NavInner = styled.div`
    display: flex;
    width: 100%;
    justify-content: left; 
    align-items: center; 
`

// export const NavbarLink = styled(NavLink)`
//     padding: 0px 1vw;
//     color: black;
//     text-decoration: none;
//     font: normal normal normal 24px/1.4em helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
// `

export const NavbarImage = styled.img`
    height: 2rem;
    padding: 0px 30px 0px 30px;
`
