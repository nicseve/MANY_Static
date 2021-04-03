import React from 'react';
import {
    MainContainer,
    IphoneFrame,
    TextHeaderCush,
    IphoneScreen,
    TextBaseCush,
    NavigationButton, LeftBlackButton, ManyHomeButton, RightBlackButton
} from "../components";

function WhatExchange() {


    return (
        <MainContainer>
            <IphoneFrame/>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>What is the exchange?</TextHeaderCush>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', position: 'relative', top: '10px', left: '10px'}}>

                    <div style={{marginTop: '50px'}}>
                        <TextBaseCush fontSize='20px'> The group needs to engage _______ to ______. The group offers ______. </TextBaseCush>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', position: 'relative', top: '288px', gap: '55px'}}>
                    <LeftBlackButton style={{height: '20px'}} path={'/whereGroup'}/>
                    <ManyHomeButton style={{height: '30px'}} path={'/home'}/>
                    <RightBlackButton style={{height: '20px'}} path={'/whatDuration'}/>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhatExchange;

