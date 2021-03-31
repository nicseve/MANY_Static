import React from 'react';
import {
    MainContainer,
    IphoneFrame,
    TextHeaderCush,
    IphoneScreen,
    TextBaseGothic,
    NavigationButton, LeftBlackButton, ManyHomeButton, RightBlackButton
} from "../components";

function WhatDuration() {

    const monthsIntElement = <TextBaseGothic fontSize='80px'> 12 </TextBaseGothic>

    return (
        <MainContainer>
            <IphoneFrame/>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is the duration?</TextHeaderCush>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', position: 'relative', top: '10px', left: '10px'}}>
                    <NavigationButton width={'95px'} displayComponent={monthsIntElement} path={'/whatDurationMonths'}
                                      height={'80px'}/>
                    <div style={{marginTop: '50px'}}>
                        <TextBaseGothic fontSize='20px'> months </TextBaseGothic>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', position: 'relative', top: '345px', gap: '55px'}}>
                    <LeftBlackButton style={{height: '20px'}} path={'/whoGroup'}/>
                    <ManyHomeButton style={{height: '30px'}} path={'/home'}/>
                    <RightBlackButton style={{height: '20px'}} path={'/whatMore'}/>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhatDuration;

