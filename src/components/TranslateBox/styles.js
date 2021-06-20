import styled from 'styled-components'

// TranslateBox
export const TranslateBoxContainer = styled.div`
    display: flex; 
    width: 100%; 
    height: 80px;
    justify-content: center;
    align-items: flex-start;
    background-color: rgba(248, 248, 248, 0.87);
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    font-family: Roboto, sans-serif;
`

// Actually the translate box
export const TranslateBoxInner = styled.form`
    display: flex;
    width: 100%;
    height: 400px;
    justify-content: flex-start; 
    align-items: center; 
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.22);
    margin: 50px 50px 0 50px;
`

export const TranslateBoxBar = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between; 
    align-items: center; 
`

export const TranslateBoxFrom = styled.div`
    display: flex;
    width: 80%;
    height: 90%;
    justify-content: flex-start; 
    align-items: flex-start; 
    padding: 20px;
    margin: 0px;
    font-size: 20px; 
    font-weight: normal;
    color: black;
    border: 0;
    font-family: Roboto, sans-serif;
    resize: none;
    outline: 0;
    :focus {
        outline: 0;
    }
`

export const TranslateBoxTo = styled.div`
    display: flex;
    width: 80%;
    height: 90%;
    justify-content: flex-start; 
    align-items: flex-start; 
    padding: 20px;
    font-size: 20px; 
    font-weight: normal;
    color: black;
    margin: 0px;
    border: none;
`

export const TranslateBoxDivider = styled.div`
    width: 0px;
    height: 100%;
    border: solid silver;
`

export const TranslateBoxOptionBox = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-start; 
    align-items: center; 
    text-transform: uppercase;
`

export const TranslateBoxImage = styled.img`
    height: 20px;
    width: 20px;
    padding: 10px;
    border-radius: 90px;
    cursor: pointer;
    :hover{
        background-color: #E7E7E7;
    }
    /* aria-label="Swap languages (Ctrl+Shift+S)" */
`

export const TranslateBoxOption = styled.button`
    display: flex;
    width: 125px;
    height: 100%;
    justify-content: space-between; 
    align-items: center; 
    border: none;
    font-size: 18px; 
    font-weight: 500;
    background-color: white;
    cursor: pointer;
    color: ${props => (props.selected ? '#1A73E8' : 'grey')};
    flex-direction: column;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    :hover{
        background-color: #E7E7E7;
    }
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
