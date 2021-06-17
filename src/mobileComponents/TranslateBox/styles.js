import styled from 'styled-components'

// TranslateBox
export const TranslateBoxContainer = styled.div`
    display: flex; 
    width: 100%; 
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

// Actually the translate box
export const TranslateBoxInner = styled.form`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    /* height: 400px; */
    /* justify-content: flex-start; 
    align-items: center; 
    border: solid grey;
    margin-top: 75px;
    background-color: white;
    border-radius: 15px; */
`

export const TranslateBoxBar = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between; 
    align-items: center; 
    padding: 15px 0px 15px 0px;
`

export const TranslateBoxFrom = styled.textarea`
    display: flex;
    width: 90%;
    height: 250px;
    justify-content: flex-start; 
    align-items: flex-start; 
    margin: 5px;
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
    width: 100%;
    height: 275px;
    justify-content: center; 
    align-items: flex-start; 
    font-size: 24px; 
    font-weight: normal;
    color: white;
    border: none;
    background-color: #1A73E8;
`

export const TranslateBoxDivider = styled.div`
    width: 0px;
    height: 100%;
    border: solid grey;
`

export const TranslateBoxOptionBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start; 
    align-items: center; 
    flex-direction: column;
    /* border: 1px solid black; */
`

export const TranslateBoxImage = styled.img`
    height: 40px;
    padding: 0px 10px 0px 10px;
`

export const TranslateBoxOption = styled.button`
    display: flex;
    width: 125px;
    justify-content: space-between; 
    align-items: center; 
    border: none;
    font-size: 20px; 
    font-weight: bold;
    background-color: white;
    cursor: pointer;
    color: ${props => (props.selected ? '#1A73E8' : 'grey')};
    flex-direction: column;
    text-transform: uppercase;
    /* margin-top: 5px;
    margin-bottom: 5px; */
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
