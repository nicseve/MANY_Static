import React from 'react';
import {MainContainer, IphoneFrame, IphoneScreen} from "../components";


// TODO: Map text elements to array of ints

export default class WhatDurationMonths extends React.Component {
    render() {
        return (
            <MainContainer>
                <IphoneFrame/>
                {/*Override iPhone background screen color*/}
                <IphoneScreen style={{backgroundColor: '#161616'}}>
                    <div style={{zIndex:20,flexDirection:'column',display:'flex',position: 'absolute', top: '25%', left: '41%', maxHeight: 470, overflow: "auto"}}>
                        <text
                            style={{
                                color: 'white',
                                fontWeight: 'regular',
                                fontSize: '80px'
                            }}>12
                        </text>
                        <text
                            style={{
                                color: 'white',
                                fontWeight: 'regular',
                                fontSize: '80px'
                            }}>11
                        </text>
                        <text
                            style={{
                                color: 'white',
                                fontWeight: 'regular',
                                fontSize: '80px'
                            }}>10
                        </text>
                        <text
                            style={{
                                color: 'white',
                                fontWeight: 'regular',
                                fontSize: '80px'
                            }}>9
                        </text>
                        <text
                            style={{
                                color: 'white',
                                fontWeight: 'regular',
                                fontSize: '80px'
                            }}>8
                        </text>
                        <text
                            style={{
                                color: 'white',
                                fontWeight: 'regular',
                                fontSize: '80px'
                            }}>7
                        </text>    <text
                        style={{
                            color: 'white',
                            fontWeight: 'regular',
                            fontSize: '80px'
                        }}>6
                    </text>
                    </div>
                        <text style={{
                            position:'absolute',
                            color: 'white',
                            // backgroundColor: 'blue',
                            fontWeight: 'regular',
                            fontSize: '20px'
                        }}>months
                        </text>
                </IphoneScreen>
            </MainContainer>
        )
    }
}
