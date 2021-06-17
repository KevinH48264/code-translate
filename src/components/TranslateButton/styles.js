import styled from 'styled-components'

// TranslateBox
export const TranslateButtonContainer = styled.div`
    display: flex; 
    width: 100%; 
    height: 100px;
    margin-top: 25px;
    justify-content: center;
    align-items: flex-start;
    background-color: white;
`

// Actually the translate box
export const TranslateButtonInner = styled.form`
    display: flex;
    width: 80%;
    height: 85px;
    justify-content: flex-end; 
    align-items: center; 
    flex-direction: row;
    background-color: white;
    border-radius: 15px;
`

export const TranslateButtonObject = styled.div`
    display: flex;
    width: 25%;
    height: 100%;
    justify-content: center; 
    align-items: center; 
    background-color: #1A73E8;
    color: white;
    text-transform: uppercase;
    border-radius: 90px;
    font-size: 28px;
    cursor: pointer;
`