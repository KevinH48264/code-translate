import React from 'react'
import {
  NavInner, NavbarContainer, NavbarImage
} from './styles'

const NavBar = () => (
    <NavbarContainer>
        <NavInner>
        <NavbarImage src={`${process.env.PUBLIC_URL}/translate.png`} alt="Translate Image" />
        <p style={{ fontSize: '30px ', fontWeight: '500', color: '#70757A' }}>Code Translate</p>
        </NavInner>
    </NavbarContainer>
)

export default NavBar