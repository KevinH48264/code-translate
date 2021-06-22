import styled from 'styled-components'

// TranslateBox
export const TranslateButtonContainer = styled.div`
    display: flex; 
    width: 100%; 
    height: 100px;
    margin-top: 60px;
    justify-content: center;
    align-items: flex-start;
    background-color: transparent;
`

// Actually the translate box
export const TranslateButtonInner = styled.form`
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: flex-end; 
    align-items: center; 
    flex-direction: row;
    background-color: white;
    border-radius: 15px;
    margin-right: 12px;
`

export const TranslateButtonObject = styled.div`
    display: flex;
    width: 150px;
    height: 100%;
    justify-content: center; 
    align-items: center; 
    background-color: #1A73E8;
    color: white;
    text-transform: uppercase;
    border-radius: 15px;
    font-size: 18px;
    cursor: pointer;
    font-weight: 500;
    :hover {
        opacity: 90%;
        box-shadow: 0 0 2px 2px rgba(0,0,0,0.22);
    }
`