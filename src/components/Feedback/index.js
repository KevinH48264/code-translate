import React, { useState, useEffect } from 'react'
import { FeedbackSubmitButton, FeedbackText, FeedbackContainer, FeedbackInner, FeedbackHeader, FeedbackBody, FeedbackFooter } from './styles'
import './transition.css'
import { Event } from '../../libs/tracking'
  
const Feedback = props => {
    const [text, setText] = useState('')

    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    const sentFeedback = () => {
        props.onClose() // close the Modal

        // GA record
        Event('Desktop', 'Send Feedback Button', 'Feedback')

        // send the feedback through the feedback route
        fetch('/feedback', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ feedback: text })
        }).then(res => res.json()).then(res => {
            console.log(res)
        }).catch((err) => {
            console.log('Error:', err)
        })

        // This timing is to time the thank you for feedback dropdown
        setTimeout(() => {
            props.setFeedbackReceived(true)
            setText('') // reset feedback text
        }, 500)
        setTimeout(() => {
            props.setFeedbackReceived(false)
        }, 2000)
    }
 
    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])

    return (
        <FeedbackContainer className='modal' selected={props.show} onClick={props.onClose}>
            <FeedbackInner  className='modal-content' selected={props.show} onClick={e => e.stopPropagation()}>
                <FeedbackHeader>
                    <p style={{ paddingLeft: '5%'}}>Send feedback</p>
                    <p style={{ paddingRight: '5%', cursor: 'pointer' }} onClick={props.onClose}>X</p>
                </FeedbackHeader>
                <FeedbackBody>
                    <FeedbackText placeholder="Have feedback? We'd love to hear it!" onChange={(e) => setText(e.target.value)} value={text}/>
                </FeedbackBody>
                <FeedbackFooter>
                    <FeedbackSubmitButton onClick={() => {props.onClose(); Event('Desktop', 'Cancel Feedback Button', 'Feedback')}}>Cancel</FeedbackSubmitButton>
                    <FeedbackSubmitButton onClick={sentFeedback}>Send</FeedbackSubmitButton>
                </FeedbackFooter>
            </FeedbackInner>
        </FeedbackContainer>
    )
}

export default Feedback