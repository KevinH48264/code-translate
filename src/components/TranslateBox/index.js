import React, { useState } from 'react'
import {
    TranslateBoxImage, TranslateBoxInner, TranslateBoxContainer, TranslateBoxBar, TranslateBoxOptionBox, TranslateBoxSub, TranslateBoxDivider, TranslateBoxOption, TranslateBoxUnderline, TranslateBoxLineHolder
} from './styles'

const TranslateBox = () => {
    const [tFrom, setTFrom] = useState('java')
    const [tTo, setTTo] = useState('python')
    
    return (
        <TranslateBoxContainer>
            <TranslateBoxInner>
                <TranslateBoxBar style={{ height: '65px', borderBottom: 'solid grey' }}>
                    <TranslateBoxOptionBox>
                        <TranslateBoxOption selected={tFrom === "java"} id="java" onClick={e => setTFrom(e.target.id)} style={{ borderRadius: '15px 0px 0px 0px' }}>
                            <TranslateBoxLineHolder />
                            Java
                            <TranslateBoxUnderline selected={tFrom === "java"} />
                        </TranslateBoxOption>
                        <TranslateBoxOption selected={tFrom === "python"} id="python" onClick={e => setTFrom(e.target.id)} onClick={e => setTFrom(e.target.id)} active={tFrom === "python"}>
                            <TranslateBoxLineHolder />
                            Python
                            <TranslateBoxUnderline selected={tFrom === "python"} />
                        </TranslateBoxOption>
                    </TranslateBoxOptionBox>
                    <TranslateBoxImage src={`${process.env.PUBLIC_URL}/translate.png`} alt="Translate Image" />
                    <TranslateBoxOptionBox>
                        <TranslateBoxOption selected={tTo === "java"} id="java" onClick={e => setTTo(e.target.id)}>
                            <TranslateBoxLineHolder />
                            Java
                            <TranslateBoxUnderline selected={tTo === "java"} />
                        </TranslateBoxOption>
                        <TranslateBoxOption selected={tTo === "python"} id="python" onClick={e => setTTo(e.target.id)}>
                            <TranslateBoxLineHolder />
                            Python
                            <TranslateBoxUnderline selected={tTo === "python"} />
                        </TranslateBoxOption>
                    </TranslateBoxOptionBox>
                </TranslateBoxBar>
                <TranslateBoxBar>
                    <TranslateBoxSub>
                        {/* <p>print("Hello World")</p> */}
                        <p>Enter text</p>
                        {/* <p>You selected to translate from {tFrom}.</p> */}
                    </TranslateBoxSub>
                    <TranslateBoxDivider />
                    <TranslateBoxSub>
                        <p>Code translation</p>
                        {/* <p>System.out.println("Hello World");</p> */}
                        {/* <p>You selected to translate to {tTo}.</p> */}
                    </TranslateBoxSub>
                </TranslateBoxBar>
            </TranslateBoxInner>
        </TranslateBoxContainer>
    )
}

export default TranslateBox

// <Button className="circleIcon" onClick={() => this.onRadioBtnClick("Circle2", "$1,000-$2,499", this.state.des1, this.state.des2, this.state.des3)} active={this.state.cSelected === 2}>
//     <img src={incirclePurple}  alt="profile-tab-icon" />|
//     <span className="numberCircle">2</span>
// </Button>

{/* <ButtonGroup> 
    <Button className={this.state.activeName === "1" ? 'active':'circleIcon' } name="1" onClick={(event) => this.onRadioBtnClick(event, states)} active={this.state.cSelected === "1"}>
        <img src={this.state.incircleImage} alt="profile-tab-icon" />
        <span className="numberCircle">1</span>
    </Button> 
</ButtonGroup> */}