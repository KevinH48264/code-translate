import React from 'react'
import { OpenFeedbackButtonContainer, OpenFeedbackButton } from './styles'

const OpenFeedback = ({ setShowFeedback }) => (
    <OpenFeedbackButtonContainer>
        <OpenFeedbackButton onClick={() => setShowFeedback(true)}>Send feedback</OpenFeedbackButton>
    </OpenFeedbackButtonContainer>
)

export default OpenFeedback