import React from 'react';
import {MainContainer, IphoneFrame, TextHeaderCush, IphoneScreen, TextBaseGothic} from "../components";

function WhatDuration() {
    return (
        <MainContainer>
            <IphoneFrame/>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is the duration?</TextHeaderCush>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', position: 'relative', top: '10px', left: '20px'}}>
                    <TextBaseGothic fontSize='80px'>
                        12
                    </TextBaseGothic>
                    <div style={{marginTop: '55px', marginLeft: '10px'}}>
                        <TextBaseGothic fontSize='20px'>
                            months
                        </TextBaseGothic>
                    </div>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhatDuration;

