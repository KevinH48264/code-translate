import React from 'react'
import {
  NavInner, NavbarContainer, NavbarImage
} from './styles'

const NavBar = () => (
    <NavbarContainer>
        <NavInner>
          <NavbarImage src={`${process.env.PUBLIC_URL}/translate.png`} alt="Translate Image" />
          <p style={{ fontSize: '24px ', fontWeight: 'bold', fontFamily: 'sans-serif', color: '#5f6368' }}>Code Translate</p>
        </NavInner>
    </NavbarContainer>
)

export default NavBar