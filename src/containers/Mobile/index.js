import React, { useState } from 'react'
import NavBar from '../../mobileComponents/Navbar'
import TranslateBox from '../../mobileComponents/TranslateBox'
import Feedback from '../../mobileComponents/Feedback'
import FeedbackReceived from '../../mobileComponents/Feedback/ThankYou'
import OpenFeedback from '../../mobileComponents/Feedback/OpenFeedback'
import { Font } from '../styles'

const Translate = () => {
    const [showFeedback, setShowFeedback] = useState(false)
    const [feedbackReceived, setFeedbackReceived] = useState(false)

    return (
        <Font style={{fontFamily: 'sans-serif', fontWeight: 'bold', display: 'flex', flexDirection: 'column'}}>
            <NavBar/>
            <TranslateBox />
            <OpenFeedback setShowFeedback={setShowFeedback}/>
            <Feedback onClose={() => setShowFeedback(false)} show={showFeedback} setFeedbackReceived={setFeedbackReceived}/>
            <FeedbackReceived show={feedbackReceived}/>
        </Font>       
    )
}

export default Translate