import React from 'react'
import { OpenFeedbackButtonContainer, OpenFeedbackButton } from './styles'
import { Event } from '../../libs/tracking'

const OpenFeedback = ({ setShowFeedback }) => (
    <OpenFeedbackButtonContainer>
        <OpenFeedbackButton onClick={() => {
            setShowFeedback(true); 
            Event('Mobile', 'Send Feedback Button', 'Feedback')
            }}>Send feedback</OpenFeedbackButton>
    </OpenFeedbackButtonContainer>
)

export default OpenFeedback