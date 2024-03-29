import styled from 'styled-components'

// Feedback Modal
export const FeedbackContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: ${props => (props.selected ? '1' : '0')};
    transition: all 0.3s ease-in-out;
    pointer-events: ${props => (props.selected ? 'visible' : 'none' )};
`

export const FeedbackInner = styled.div`
    display: flex;
    width: 25%;
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    transform: translateY(${props => (props.selected ? '0px' : '-200px' )});
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 2pt 1pt black;
    padding: 0px;
`

// Actual Feedback Content
export const FeedbackHeader = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #546E7A;
    color: white;
    font-size: 24px;
    padding: 0px;
    margin: 0px;
    border-radius: 15px 15px 0px 0px;
`

export const FeedbackBody = styled.div`
    display: flex;
    justify-content: center; 
    width: 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`

export const FeedbackFooter = styled.div`
    display: flex;
    justify-content: flex-end; 
    align-items: center;
    width: 100%;
    height: 50px;
    padding-right: 15px;
`

export const FeedbackSubmitButton = styled.p`
    display: flex;
    width: 30%;
    height: 100%;
    justify-content: center; 
    align-items: center; 
    text-transform: uppercase;
    cursor: pointer;
    font-size: 20px;
`

// Open Modal BUtton
export const OpenFeedbackButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 370px 50px 0 50px;
`

export const OpenFeedbackButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
`

export const OpenFeedbackText = styled.p`
    cursor: pointer;
    font-weight: normal;
    font-style: italic;
    color: #5F6368;
    font-size: 18px;
    margin: 0px;
    padding: 0px;
    padding-top: 10px;
    :hover {
        text-decoration: underline;
    }
`

export const FeedbackText = styled.textarea`
    display: flex;
    width: 95%;
    height: 300px;
    justify-content: flex-start; 
    align-items: flex-start; 
    margin: 20px;
    font-size: 18px; 
    font-weight: normal;
    color: grey;
    border: none;
    font-family: sans-serif;
    resize: none;
    :focus {
        outline: none;
    }
`

// Thank you for feedback modal
// Feedback Modal
export const TYFeedbackContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex; 
    justify-content: center;
    align-items: flex-start;
    opacity: ${props => (props.selected ? '1' : '0')};
    transition: all 0.3s ease-in-out;
    pointer-events: ${props => (props.selected ? 'visible' : 'none' )};
`

export const TYFeedbackInner = styled.div`
    display: flex;
    width: 50%;
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    transform: translateY(${props => (props.selected ? '20px' : '-60px' )});
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 2pt 1pt black;
    padding: 0px;
`

export const TYFeedbackHeader = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #546E7A;
    color: white;
    font-size: 24px;
    padding: 0px;
    margin: 0px;
    border-radius: 15px;
    font-weight: normal;
`