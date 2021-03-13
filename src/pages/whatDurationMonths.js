import React from 'react';
import {MainContainer, IphoneFrame, IphoneScreen} from "../components";


export default class WhatDurationMonths extends React.Component {
    render() {
        const ints = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18,19,20];
        const months = ints.map(int => <text
            style={{
                color: 'white',
                fontWeight: 'regular',
                fontSize: '80px'
            }}>{int}
        </text>)

        return (
            <MainContainer>
                <IphoneFrame/>
                {/*Override iPhone background screen color*/}
                <IphoneScreen style={{backgroundColor: '#161616'}}>
                    <text style={{
                        position: 'absolute',
                        color: 'white',
                        marginLeft: 110,
                        marginTop: 100,
                        // backgroundColor: 'blue',
                        fontWeight: 'regular',
                        fontSize: '20px'
                    }}>months
                    </text>
                    <div style={{
                        // backgroundColor:'blue',
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
