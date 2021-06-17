import React from 'react'
import { Event } from '../../libs/tracking'
import { OpenFeedbackButtonContainer, OpenFeedbackButton } from './styles'

const OpenFeedback = ({ setShowFeedback }) => (
    <OpenFeedbackButtonContainer>
        <OpenFeedbackButton onClick={() => {
            setShowFeedback(true); 
            Event('Desktop', 'Open Feedback Button', 'Feedback')
            }}>Send feedback</OpenFeedbackButton>
    </OpenFeedbackButtonContainer>
)

export default OpenFeedback