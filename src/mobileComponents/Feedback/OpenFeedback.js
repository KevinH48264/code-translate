import React from 'react'
import { OpenFeedbackText, OpenFeedbackButtonContainer, OpenFeedbackButton } from './styles'
import { Event } from '../../libs/tracking'

const OpenFeedback = ({ setShowFeedback }) => (
    <OpenFeedbackButtonContainer>
        <OpenFeedbackButton>
            <OpenFeedbackText onClick={() => {
                setShowFeedback(true); 
                Event('Mobile', 'Send Feedback Button', 'Feedback')
                }}>Send feedback</OpenFeedbackText>
        </OpenFeedbackButton>
    </OpenFeedbackButtonContainer>
)

export default OpenFeedback