import React from 'react'
import NavBar from '../../components/Navbar'
import TranslateBox from '../../components/TranslateBox'
import { Font } from '../styles'

const Translate = () => (
    <Font style={{fontFamily: 'sans-serif', fontWeight: 'bold'}}>
        <NavBar />
        <TranslateBox />
        {/* <Feedback /> */}
        {/* <About /> */}
    </Font>       
)

export default Translate