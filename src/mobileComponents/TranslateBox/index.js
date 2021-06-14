import React, { useState } from 'react'
import {
    TranslateBoxImage, TranslateBoxInner, TranslateBoxContainer, TranslateBoxBar, TranslateBoxOptionBox, TranslateBoxFrom, TranslateBoxTo, TranslateBoxDivider, TranslateBoxOption, TranslateBoxUnderline, TranslateBoxLineHolder
} from './styles'
import ReactGA from 'react-ga';

const TranslateBox = () => {
    const [tFrom, setTFrom] = useState('python')
    const [tTo, setTTo] = useState('java')
    const [inputCode, setInputCode] = useState('')
    const [outputCode, setOutputCode] = useState('Only Python to Java is currently supported. Please check back later this month for Java to Python. Thanks for visiting!')
    
    ReactGA.event({
        category: 'User',
        action: 'Hit the Translate Button'
    })

    const handleSubmit = (e) => {
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
        <TranslateBoxContainer>
            <TranslateBoxInner id="translateForm" onSubmit={handleSubmit}>
                <TranslateBoxBar style={{ height: '65px', borderBottom: 'solid grey' }}>
                    <TranslateBoxOptionBox>
                        <TranslateBoxOption type="button" selected={tFrom === "java"} id="java" onClick={e => setTFrom(e.target.id)} style={{ borderRadius: '15px 0px 0px 0px' }}>
                            <TranslateBoxLineHolder />
                            Java
                            <TranslateBoxUnderline type="button" selected={tFrom === "java"} />
                        </TranslateBoxOption>
                        <TranslateBoxOption type="button" selected={tFrom === "python"} id="python" onClick={e => setTFrom(e.target.id)} onClick={e => setTFrom(e.target.id)} active={tFrom === "python"}>
                            <TranslateBoxLineHolder />
                            Python
                            <TranslateBoxUnderline selected={tFrom === "python"} />
                        </TranslateBoxOption>
                    </TranslateBoxOptionBox>
                    <TranslateBoxImage type="image" src={`${process.env.PUBLIC_URL}/translate.png`} alt="Translate Image Submit" /> {/* temporary submit box around image */}
                    <TranslateBoxOptionBox>
                        <TranslateBoxOption type="button" selected={tTo === "java"} id="java" onClick={e => setTTo(e.target.id)}>
                            <TranslateBoxLineHolder />
                            Java
                            <TranslateBoxUnderline selected={tTo === "java"} />
                        </TranslateBoxOption>
                        <TranslateBoxOption type="button" selected={tTo === "python"} id="python" onClick={e => setTTo(e.target.id)}>
                            <TranslateBoxLineHolder />
                            Python
                            <TranslateBoxUnderline selected={tTo === "python"} />
                        </TranslateBoxOption>
                    </TranslateBoxOptionBox>
                </TranslateBoxBar>
                <TranslateBoxBar style={{ justifyContent: 'flex-start' }}>  {/* This is for the translate area */}
                    <TranslateBoxFrom onChange={(e) => setInputCode(e.target.value)} style={{alignItems: 'flex-start'}} placeholder="Enter code" />
                    <TranslateBoxDivider />
                    <TranslateBoxTo>
                        <p style={{ margin: '0px' }}>{outputCode}</p>
                    </TranslateBoxTo>
                </TranslateBoxBar>
            </TranslateBoxInner>
        </TranslateBoxContainer>
    )
}

export default TranslateBox