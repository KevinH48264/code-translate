import React, { useState } from 'react'
import { Event } from '../../libs/tracking'
import {
    TranslateBoxImage, TranslateBoxInner, TranslateBoxContainer, TranslateBoxBar, TranslateBoxOptionBox, TranslateBoxFrom, TranslateBoxTo, TranslateBoxDivider, TranslateBoxOption, TranslateBoxUnderline, TranslateBoxLineHolder
} from './styles'

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