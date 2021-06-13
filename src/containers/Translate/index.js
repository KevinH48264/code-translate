import React, { useState } from 'react'
import NavBar from '../../components/Navbar'
import TranslateBox from '../../components/TranslateBox'
import Feedback from '../../components/Feedback'
import FeedbackReceived from '../../components/Feedback/ThankYou'
import OpenFeedback from '../../components/Feedback/OpenFeedback'
import { Font } from '../styles'

const Translate = () => {
    const [showFeedback, setShowFeedback] = useState(false)
    const [feedbackReceived, setFeedbackReceived] = useState(false)

    return (
        <Font style={{fontFamily: 'sans-serif', fontWeight: 'bold'}}>
            <NavBar />
            <TranslateBox />
            <OpenFeedback setShowFeedback={setShowFeedback}/>
            <Feedback onClose={() => setShowFeedback(false)} show={showFeedback} setFeedbackReceived={setFeedbackReceived}/>
            <FeedbackReceived show={feedbackReceived}/>
            {/* <About /> */}
        </Font>       
    )
}

export default Translate