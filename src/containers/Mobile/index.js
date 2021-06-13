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
        <Font style={{fontFamily: 'sans-serif', fontWeight: 'bold'}}>
            <NavBar style={{justifyContent: 'center'}}/>
            <p style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', padding: '50px', textAlign: 'center', fontSize: '20px' }}>
                <p>Code Translate is currently unavailable on mobile.</p> 
                <p>Please visit the desktop site or check back later this month. (June 2021)</p>
            </p>
            {/* <TranslateBox />
            <OpenFeedback setShowFeedback={setShowFeedback}/>
            <Feedback onClose={() => setShowFeedback(false)} show={showFeedback} setFeedbackReceived={setFeedbackReceived}/>
            <FeedbackReceived show={feedbackReceived}/> */}
            {/* <About /> */}
        </Font>       
    )
}

export default Translate