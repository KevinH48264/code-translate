import React, { useState } from 'react'
import {
    TranslateBoxImage, TranslateBoxInner, TranslateBoxContainer, TranslateBoxBar, TranslateBoxOptionBox, TranslateBoxFrom, TranslateBoxTo, TranslateBoxDivider, TranslateBoxOption, TranslateBoxUnderline, TranslateBoxLineHolder
} from './styles'
import { Event } from '../../libs/tracking'

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
                            {/* <TranslateBoxLineHolder /> */}
                            Java
                            {/* <TranslateBoxUnderline type="button" selected={tFrom === "java"} /> */}
                        </TranslateBoxOption>
                        <TranslateBoxOption type="button" style={{ marginTop: '10px' }} selected={tFrom === "python"} id="python" onClick={e => setTFrom(e.target.id)} onClick={e => setTFrom(e.target.id)} active={tFrom === "python"}>
                            {/* <TranslateBoxLineHolder /> */}
                            Python
                            {/* <TranslateBoxUnderline selected={tFrom === "python"} /> */}
                        </TranslateBoxOption>
                    </TranslateBoxOptionBox>
                    <TranslateBoxImage type="image" onClick={ switchLanguages } src={`${process.env.PUBLIC_URL}/translate.png`} alt="Translate Image Submit" /> {/* temporary submit box around image */}
                    <TranslateBoxOptionBox style={{ alignItems: 'flex-end' }}>
                        <TranslateBoxOption type="button" selected={tTo === "java"} id="java" onClick={e => setTTo(e.target.id)}>
                            {/* <TranslateBoxLineHolder /> */}
                            Java
                            {/* <TranslateBoxUnderline selected={tTo === "java"} /> */}
                        </TranslateBoxOption>
                        <TranslateBoxOption type="button" style={{ marginTop: '10px' }} selected={tTo === "python"} id="python" onClick={e => setTTo(e.target.id)}>
                            {/* <TranslateBoxLineHolder /> */}
                            Python
                            {/* <TranslateBoxUnderline selected={tTo === "python"} /> */}
                        </TranslateBoxOption>
                    </TranslateBoxOptionBox>
                </TranslateBoxBar>
                <TranslateBoxBar style={{ paddingBottom: '0px', flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <TranslateBoxFrom onChange={(e) => setInputCode(e.target.value)} style={{alignItems: 'flex-start'}} placeholder="Enter code" />
                    <TranslateBoxTo>
                        <p style={{ width: '90%', height: '80%', margin: '15px 5px 15px 5px' }}>{outputCode}</p>
                    </TranslateBoxTo>
                </TranslateBoxBar>
            </TranslateBoxInner>
        </TranslateBoxContainer>
    )
}

export default TranslateBox