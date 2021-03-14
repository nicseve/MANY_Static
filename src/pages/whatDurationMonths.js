import React from 'react';
import {MainContainer, IphoneFrame, IphoneScreen} from "../components";


export default class WhatDurationMonths extends React.Component {
    render() {
        let months = [];
        for (let i = 0; i <= 24; i++) {
            months.push(
                <text
                    style={{
                        color: 'white',
                        fontWeight: 'regular',
                        fontSize: '80px'
                    }}>{i}
                </text>)
        }
        return (
            <MainContainer>
                <IphoneFrame/>
                <IphoneScreen style={{backgroundColor: '#161616'}}>
                    <text style={{
                        position: 'absolute',
                        color: 'white',
                        marginLeft: 110,
                        marginTop: 100,
                        fontWeight: 'regular',
                        fontSize: '20px'
                    }}>months
                    </text>
                    <div style={{
                        zIndex: 1,
                        flexDirection: 'column',
                        display: 'flex',
                        position: 'absolute',
                        marginTop: 3,
                        marginLeft: 12,
                        height: 536,
                        overflow: "auto"
                    }}>
                        {months}
                    </div>
                </IphoneScreen>
            </MainContainer>
        )
    }
}
