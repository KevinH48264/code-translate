import React, { useState } from 'react'
import { Event } from '../../libs/tracking'
import {
    TranslateButtonContainer, TranslateButtonInner, TranslateButtonObject
} from './styles'

const TranslateButton = ({ tFrom, setTFrom, tTo, setTTo, inputCode, setInputCode, outputCode, setOutputCode }) => {
    const handleSubmit = (e) => {
        Event('Desktop', 'Translate Button', 'Translate')

        console.log("...Translating...")
        console.log(tFrom)
        console.log(tTo)
        console.log(inputCode)

        e.preventDefault() // prevents refresh of the page
        fetch('/translate', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ tTo, tFrom, inputCode })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if (res.outputCode) {
                setOutputCode(res.outputCode)
            } else {
                setOutputCode(res.message)
            }
        }).catch((err) => {
            console.log('Error:', err)
        })
    }

    return (
        <TranslateButtonInner>
            <TranslateButtonObject onClick={handleSubmit}>Translate</TranslateButtonObject>
        </TranslateButtonInner>
    )
}

export default TranslateButton