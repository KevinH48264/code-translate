import React, { useState, useEffect } from 'react'
import { SubmitButton, FeedbackText, FeedbackContainer, FeedbackInner, FeedbackHeader, FeedbackBody, FeedbackFooter } from './styles'
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
        props.onClose()

        // GA record
        Event('Mobile', 'Send Feedback Button', 'Feedback')

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

        setTimeout(() => {
            props.setFeedbackReceived(true)
            setText('')
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
                    <SubmitButton style={{  }} onClick={() => {props.onClose(); Event('Mobile', 'Cancel Feedback Button', 'Feedback')}}>X</SubmitButton>
                    <p style={{ fontWeight: 'normal', width: '60%' }}>Send feedback</p>
                    <SubmitButton style={{ fontWeight: 'bold' }} onClick={sentFeedback}>></SubmitButton>
                </FeedbackHeader>
                <FeedbackBody>
                    <FeedbackText placeholder="Have feedback? We'd love to hear it!" onChange={(e) => setText(e.target.value)} value={text}/>
                </FeedbackBody>
            </FeedbackInner>
        </FeedbackContainer>
    )
}

export default Feedback