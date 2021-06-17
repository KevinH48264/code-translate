import React, { useState } from 'react'
import NavBar from '../../mobileComponents/Navbar'
import TranslateBox from '../../mobileComponents/TranslateBox'
import Feedback from '../../mobileComponents/Feedback'
import FeedbackReceived from '../../mobileComponents/Feedback/ThankYou'
import OpenFeedback from '../../mobileComponents/Feedback/OpenFeedback'
import TranslateButton from '../../mobileComponents/TranslateButton'
import { Font } from '../styles'

const Mobile = ({ tFrom, setTFrom, tTo, setTTo, inputCode, setInputCode, outputCode, setOutputCode }) => {
    const [showFeedback, setShowFeedback] = useState(false)
    const [feedbackReceived, setFeedbackReceived] = useState(false)

    return (
        <Font style={{fontFamily: 'sans-serif', fontWeight: 'bold', display: 'flex', flexDirection: 'column'}}>
            <NavBar/>
            <TranslateBox tFrom={tFrom} setTFrom={setTFrom} tTo={tTo} setTTo={setTTo} inputCode={inputCode} setInputCode={setInputCode} outputCode={outputCode} setOutputCode={setOutputCode}/>
            <TranslateButton  tFrom={tFrom} setTFrom={setTFrom} tTo={tTo} setTTo={setTTo} inputCode={inputCode} setInputCode={setInputCode} outputCode={outputCode} setOutputCode={setOutputCode}/>
            <OpenFeedback setShowFeedback={setShowFeedback}/>
            
            <Feedback onClose={() => setShowFeedback(false)} show={showFeedback} setFeedbackReceived={setFeedbackReceived}/>
            <FeedbackReceived show={feedbackReceived}/>
        </Font>       
    )
}

export default Mobile