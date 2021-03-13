import React from 'react';
import {MainContainer, IphoneFrame, TextHeaderCush, IphoneScreen} from "../components";


export default class WhatDuration extends React.Component {
    render() {
        return (
            <MainContainer>
                <IphoneFrame/>
                <IphoneScreen>
                    <div style={{backgroundColor:'blue',margin:'10px'}}>
                        <TextHeaderCush>What is the duration?</TextHeaderCush>
                    </div>
                    <div style={{position: 'absolute', top: '25%', left: '41%'}}>
                        <text
                            style={{
                                // backgroundColor: 'red',
                                fontWeight: 'regular',
                                fontSize: '80px'
                            }}>12
                        </text>
                        <text style={{
                            // backgroundColor: 'blue',
                            fontWeight: 'regular',
                            fontSize: '20px'
                        }}>months
                        </text>
                    </div>
                </IphoneScreen>
            </MainContainer>
        )
    }
}
