import React, { useState } from 'react'
import NavBar from '../../components/Navbar'
import TranslateBox from '../../components/TranslateBox'
import Feedback from '../../components/Feedback'
import FeedbackReceived from '../../components/Feedback/ThankYou'
import OpenFeedback from '../../components/Feedback/OpenFeedback'
import { Font } from '../styles'
import Mobile from '../Mobile';
import { BrowserView, MobileView } from 'react-device-detect'

const Translate = () => {
    // feedback variables
    const [showFeedback, setShowFeedback] = useState(false)
    const [feedbackReceived, setFeedbackReceived] = useState(false)

    // translation variables
    const [tFrom, setTFrom] = useState('python')
    const [tTo, setTTo] = useState('java')
    const [inputCode, setInputCode] = useState('')
    const [outputCode, setOutputCode] = useState('')

    return (
        <Font style={{ fontWeight: 'bold', color: 'black' }}>
            <BrowserView>
                <NavBar />
                <TranslateBox tFrom={tFrom} setTFrom={setTFrom} tTo={tTo} setTTo={setTTo} inputCode={inputCode} setInputCode={setInputCode} outputCode={outputCode} setOutputCode={setOutputCode}/>
                <OpenFeedback setShowFeedback={setShowFeedback}/>

                <Feedback onClose={() => setShowFeedback(false)} show={showFeedback} setFeedbackReceived={setFeedbackReceived}/>
                <FeedbackReceived show={feedbackReceived}/>
            </BrowserView>
            <MobileView>
                <Mobile tFrom={tFrom} setTFrom={setTFrom} tTo={tTo} setTTo={setTTo} inputCode={inputCode} setInputCode={setInputCode} outputCode={outputCode} setOutputCode={setOutputCode}/>
            </MobileView>
        </Font>       
    )
}

export default Translate