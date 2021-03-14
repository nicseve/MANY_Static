import React, {useRef} from 'react';
import {MainContainer, IphoneFrame, IphoneScreen,TextBaseCush} from "../components";
import {SnapList, SnapItem, useDragToScroll} from "react-snaplist-carousel";


function createMonthsElements() {
    let months = [];
    for (let i = 1; i <= 24; i++) {
        months.push(
            <SnapItem margin={{top: '10px', bottom: '10px'}} height="80px" snapAlign="center">
                    <TextBaseCush
                        style={{
                            color: 'white',
                            fontWeight: 'regular',
                            fontSize: '80px',
                            // paddingBottom: i === 24 ? 395 : 0,
                            // paddingTop: i === 1 ? 40 : 0
                        }}>{i}
                    </TextBaseCush>
            </SnapItem>)
    }
    return months
}

const WhatDurationMonths = () => {
    const snapList = useRef(null);
    useDragToScroll({ref: snapList, disable: false});

    const months = createMonthsElements();

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
                <SnapList width='85' direction="vertical" ref={snapList}>
                    {months}
                </SnapList>
            </IphoneScreen>
        </MainContainer>
    )
}


export default WhatDurationMonths