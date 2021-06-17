import React from 'react'
import ReactGA from 'react-ga'
import { OpenFeedbackButtonContainer, OpenFeedbackButton } from './styles'

const OpenFeedback = ({ setShowFeedback }) => (
    <OpenFeedbackButtonContainer>
        <OpenFeedbackButton onClick={() => {
            setShowFeedback(true); 
            ReactGA.event({
                category: 'User',
                action: 'Clicked the Feedback Button'
            })
            }}>Send feedback</OpenFeedbackButton>
    </OpenFeedbackButtonContainer>
)

export default OpenFeedback