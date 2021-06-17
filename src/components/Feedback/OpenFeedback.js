import React from 'react'
import { Event } from '../../libs/tracking'
import { OpenFeedbackText, OpenFeedbackButtonContainer, OpenFeedbackButton } from './styles'

const OpenFeedback = ({ setShowFeedback }) => (
    <OpenFeedbackButtonContainer>
        <OpenFeedbackButton>
            <OpenFeedbackText onClick={() => {
                setShowFeedback(true); 
                Event('Desktop', 'Open Feedback Button', 'Feedback')
                }}>Send feedback</OpenFeedbackText>
        </OpenFeedbackButton>
    </OpenFeedbackButtonContainer>
)

export default OpenFeedback