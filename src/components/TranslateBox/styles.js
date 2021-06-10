import styled from 'styled-components'

// TranslateBox
export const TranslateBoxContainer = styled.div`
    display: flex; 
    width: 100%; 
    height: 100px;
    justify-content: center;
    align-items: flex-start;
    background-color: lightgrey;
    /* Add background gradient */
    border: solid #9A9292;
`

// Actually the translate box
export const TranslateBoxInner = styled.form`
    display: flex;
    width: 80%;
    height: 400px;
    justify-content: flex-start; 
    align-items: center; 
    border: solid grey;
    margin-top: 75px;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
`

export const TranslateBoxBar = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between; 
    align-items: center; 
`

export const TranslateBoxFrom = styled.textarea`
    display: flex;
    width: 80%;
    height: 90%;
    justify-content: flex-start; 
    align-items: flex-start; 
    margin: 20px;
    font-size: 24px; 
    font-weight: normal;
    color: grey;
    border: none;
    font-family: sans-serif;
    resize: none;
    :focus {
        outline: none;
    }
`

export const TranslateBoxTo = styled.div`
    display: flex;
    width: 80%;
    height: 90%;
    justify-content: flex-start; 
    align-items: flex-start; 
    margin: 20px;
    font-size: 24px; 
    font-weight: normal;
    color: grey;
    padding: 0px;
    border: none;
`

export const TranslateBoxDivider = styled.div`
    width: 0px;
    height: 100%;
    border: solid grey;
`

export const TranslateBoxOptionBox = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start; 
    align-items: center; 
    text-transform: uppercase;
    /* border: 1px solid black; */
`

export const TranslateBoxImage = styled.input`
    height: 30px;
    padding: 0px 10px 0px 10px;
`

export const TranslateBoxOption = styled.button`
    display: flex;
    width: 125px;
    height: 100%;
    justify-content: space-between; 
    align-items: center; 
    border: none;
    font-size: 20px; 
    font-weight: bold;
    background-color: white;
    cursor: pointer;
    color: ${props => (props.selected ? '#1A73E8' : 'black')};
    flex-direction: column;
`

export const TranslateBoxUnderline = styled.span`
    width: 115px;
    height: 5px;
    background-color: ${props => (props.selected ? '#1A73E8' : '')};
`

export const TranslateBoxLineHolder = styled.span`
    width: 115px;
    height: 5px;
    background-color: ''
`
