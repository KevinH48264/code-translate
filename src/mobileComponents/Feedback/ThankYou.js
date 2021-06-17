import React from 'react'
import { TYFeedbackContainer, TYFeedbackInner, TYFeedbackHeader } from './styles'
  
const FeedbackReceived = props => {

    return (
        <TYFeedbackContainer className='modal' selected={props.show} onClick={props.onClose}>
            <TYFeedbackInner  className='modal-content' selected={props.show} onClick={e => e.stopPropagation()}>
                <TYFeedbackHeader>
                    <p style={{ margin: '10px'}}>Thanks! We’ve received your feedback.</p>
                </TYFeedbackHeader>
            </TYFeedbackInner>
        </TYFeedbackContainer>
    )
}

export default FeedbackReceived