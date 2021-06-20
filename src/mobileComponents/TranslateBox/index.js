import React, { useState } from 'react'
import {
    TranslateBoxImage, TranslateBoxInner, TranslateBoxContainer, TranslateBoxBar, TranslateBoxOptionBox, TranslateBoxFrom, TranslateBoxTo, TranslateBoxDivider, TranslateBoxOption, TranslateBoxUnderline, TranslateBoxLineHolder
} from './styles'
import { Event } from '../../libs/tracking'
import Editor from "react-simple-code-editor";

const TranslateBox = ({ tFrom, setTFrom, tTo, setTTo, inputCode, setInputCode, outputCode, setOutputCode }) => {
    Event('Mobile', 'Translate Button', 'Translate')

    const switchLanguages = () => {
        Event('Desktop', 'Switch Languages Button', 'Switch')
        const tempTo = tTo
        const tempFrom = tFrom
        setTTo(tempFrom)
        setTFrom(tempTo)
    }

    return (
        <TranslateBoxContainer>
            <TranslateBoxInner id="translateForm">
                <TranslateBoxBar style={{ borderTop: 'solid silver', borderBottom: 'solid silver' }}>
                    <TranslateBoxOptionBox style={{ alignItems: 'flex-start' }}>
                        <TranslateBoxOption type="button" selected={tFrom === "java"} id="java" onClick={e => setTFrom(e.target.id)} style={{ borderRadius: '15px 0px 0px 0px' }}>
                            Java
                        </TranslateBoxOption>
                        <TranslateBoxOption type="button" style={{ marginTop: '10px' }} selected={tFrom === "python"} id="python" onClick={e => setTFrom(e.target.id)} onClick={e => setTFrom(e.target.id)} active={tFrom === "python"}>
                            Python
                        </TranslateBoxOption>
                    </TranslateBoxOptionBox>
                    <TranslateBoxImage type="image" onClick={ switchLanguages } src={`${process.env.PUBLIC_URL}/translate.png`} alt="Translate Image Submit" /> {/* temporary submit box around image */}
                    <TranslateBoxOptionBox style={{ alignItems: 'flex-end' }}>
                        <TranslateBoxOption type="button" selected={tTo === "java"} id="java" onClick={e => setTTo(e.target.id)}>
                            Java
                        </TranslateBoxOption>
                        <TranslateBoxOption type="button" style={{ marginTop: '10px' }} selected={tTo === "python"} id="python" onClick={e => setTTo(e.target.id)}>
                            Python
                        </TranslateBoxOption>
                    </TranslateBoxOptionBox>
                </TranslateBoxBar>
                <TranslateBoxBar style={{ paddingBottom: '0px', flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <TranslateBoxFrom onChange={(e) => setInputCode(e.target.value)} style={{alignItems: 'flex-start'}} placeholder="Enter code" />
                    <TranslateBoxTo style={{ backgroundColor: 'rgba(232, 232, 232, 0.5)' }}>
                        <Editor
                            className="container__editor"
                            placeholder="Only Python to Java is currently supported. Please check back later this month for Java to Python. Thanks for visiting!"
                            value={outputCode}
                            onValueChange={(outputCode) => setOutputCode(outputCode)}
                            highlight={(outputCode) => outputCode}
                            readOnly= "true"
                            tabSize={4}
                            style={{
                                // alignItems: 'flex-start',
                                color: 'black',
                                width: '90%',
                                height: '80%',
                                margin: '15px 5px 15px 5px'
                            }}
                        />
                        {/* <p style={{ width: '90%', height: '80%', margin: '15px 5px 15px 5px' }}>{outputCode}</p> */}
                    </TranslateBoxTo>
                </TranslateBoxBar>
            </TranslateBoxInner>
        </TranslateBoxContainer>
    )
}

export default TranslateBox