import React, { useState } from 'react'

import { Event } from '../../libs/tracking'
import {
    TranslateBoxImage, TranslateBoxInner, TranslateBoxContainer, TranslateBoxBar, TranslateBoxOptionBox, TranslateBoxFrom, TranslateBoxTo, TranslateBoxDivider, TranslateBoxOption, TranslateBoxUnderline, TranslateBoxLineHolder
} from './styles'

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css"; //Example style, you can use another
import './styles.css'

const TranslateBox = ({ tFrom, setTFrom, tTo, setTTo, inputCode, setInputCode, outputCode, setOutputCode }) => {
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
                <TranslateBoxBar style={{ height: '65px', borderBottom: 'solid silver' }}>
                    <TranslateBoxOptionBox>
                        <TranslateBoxOption type="button" selected={tFrom === "java"} id="java" onClick={e => setTFrom(e.target.id)} style={{ borderRadius: '15px 0px 0px 0px' }}>
                            <TranslateBoxLineHolder />
                            Java
                            <TranslateBoxUnderline type="button" selected={tFrom === "java"} />
                        </TranslateBoxOption>
                        <TranslateBoxOption type="button" selected={tFrom === "python"} id="python" onClick={e => setTFrom(e.target.id)} active={tFrom === "python"}>
                            <TranslateBoxLineHolder />
                            Python
                            <TranslateBoxUnderline selected={tFrom === "python"} />
                        </TranslateBoxOption>
                    </TranslateBoxOptionBox>
                    <TranslateBoxImage type="image" onClick={switchLanguages} src={`${process.env.PUBLIC_URL}/translate.png`} alt="Translate Image Submit"/> 
                    <TranslateBoxOptionBox>
                        <TranslateBoxOption type="button" style={{ marginLeft: '10px' }} selected={tTo === "java"} id="java" onClick={e => setTTo(e.target.id)}>
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
                    {/* <TranslateBoxFrom onChange={(e) => setInputCode(e.target.value)} style={{alignItems: 'flex-start'}} placeholder="Enter code" /> */}
                    <TranslateBoxFrom>
                        <Editor
                            className="container__editor"
                            placeholder="Type some code…"
                            value={inputCode}
                            onValueChange={(inputCode) => setInputCode(inputCode)}
                            // highlight={(inputCode) => highlight(inputCode, languages.js)}
                            highlight={(inputCode) => inputCode}
                            //padding={10}
                            tabSize={4}
                            style={{
                                alignItems: 'flex-start',
                                width: '100%',
                                height: '100%',
                            }} 
                            // style={{
                            // fontFamily: '"Fira code", "Fira Mono", monospace',
                            // fontSize: 12,
                            // }}
                        />
                    </TranslateBoxFrom>
                    
                    <TranslateBoxDivider />
                    <TranslateBoxTo>
                        {/* <p style={{ margin: '0px' }}>{outputCode}</p> */}

                        <Editor
                            className="container__editor"
                            placeholder="Only Python to Java is currently supported. Please check back later this month for Java to Python. Thanks for visiting!"
                            value={outputCode}
                            onValueChange={(outputCode) => setOutputCode(outputCode)}
                            highlight={(outputCode) => outputCode}
                            readOnly= "true"
                            //padding={10}
                            tabSize={4}
                            style={{
                                alignItems: 'flex-start',
                                width: '100%',
                                height: '100%',
                            }}
                            // style={{
                            // fontFamily: '"Fira code", "Fira Mono", monospace',
                            // fontSize: 12,
                            // }}
                        />
                    </TranslateBoxTo>
                </TranslateBoxBar>
            </TranslateBoxInner>
        </TranslateBoxContainer>
    )
}

export default TranslateBox