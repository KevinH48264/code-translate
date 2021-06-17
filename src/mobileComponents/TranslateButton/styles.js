import styled from 'styled-components'

// TranslateBox
export const TranslateButtonContainer = styled.div`
    display: flex; 
    width: 100%; 
    height: 50px;
    margin-top: 15px;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
`

// Actually the translate box
export const TranslateButtonInner = styled.form`
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: center; 
    align-items: center; 
    flex-direction: row;
    background-color: white;
    border-radius: 15px;
`

export const TranslateButtonObject = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: center; 
    align-items: center; 
    background-color: #1A73E8;
    color: white;
    text-transform: uppercase;
    border-radius: 5px;
    font-size: 24px;
    cursor: pointer;
`