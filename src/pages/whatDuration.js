import React from 'react';
import {ContainerDiv, IphoneFrame, TextHeaderCush} from "../components";


export default class WhatDuration extends React.Component {
    render() {
        return (
            <ContainerDiv>
                <IphoneFrame/>
                <div style={{position: 'relative', top: '-210px'}}>
                    <TextHeaderCush>What is the duration?</TextHeaderCush>
                </div>
                <text
                    style={{backgroundColor: 'red', position: 'absolute', fontWeight: 'regular', fontSize: '80px'}}>12
                </text>
                <text style={{
                    backgroundColor: 'green',
                    position: 'relative',
                    fontWeight: 'regular',
                    fontSize: '20px'
                }}>months
                </text>

            </ContainerDiv>
        )
    }

}
