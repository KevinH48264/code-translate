import React from 'react'
import {
    TranslateBoxImage, TranslateBoxInner, TranslateBoxContainer, TranslateBoxBar, TranslateBoxOptionBox, TranslateBoxSub, TranslateBoxDivider, TranslateBoxOption
} from './styles'

const TranslateBox = () => (
    <TranslateBoxContainer>
        <TranslateBoxInner>
            <TranslateBoxBar style={{ height: '65px', borderBottom: 'solid grey' }}>
                <TranslateBoxOptionBox>
                    <TranslateBoxOption style={{ borderRadius: '15px 0px 0px 0px' }}>JAVA</TranslateBoxOption>
                    <TranslateBoxOption>PYTHON</TranslateBoxOption>
                </TranslateBoxOptionBox>
                <TranslateBoxImage src={`${process.env.PUBLIC_URL}/translate.png`} alt="Translate Image" />
                <TranslateBoxOptionBox>
                    <TranslateBoxOption>JAVA</TranslateBoxOption>
                    <TranslateBoxOption>PYTHON</TranslateBoxOption>
                </TranslateBoxOptionBox>
            </TranslateBoxBar>
            <TranslateBoxBar>
                <TranslateBoxSub>
                    <p>print("Hello World")</p>
                </TranslateBoxSub>
                <TranslateBoxDivider />
                <TranslateBoxSub>
                    <p>System.out.println("Hello World");</p>
                </TranslateBoxSub>
            </TranslateBoxBar>
        </TranslateBoxInner>
    </TranslateBoxContainer>
)

export default TranslateBox