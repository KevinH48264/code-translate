import React from 'react'
import {
  NavInner, NavbarContainer, NavbarImage
} from './styles'

const NavBar = () => (
    <NavbarContainer>
        <NavInner>
          <NavbarImage src={`${process.env.PUBLIC_URL}/translate.png`} alt="Translate Image" />
          <p style={{ fontSize: '36px ', fontWeight: 'bold', fontFamily: 'sans-serif', color: '#70757A' }}>Code Translate</p>
        </NavInner>
    </NavbarContainer>
)

export default NavBar