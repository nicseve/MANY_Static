import React, {useRef} from 'react';
import {MainContainer, IphoneFrame, IphoneScreen} from "../components";
import {
    SnapItem, SnapList, useDragToScroll,
} from 'react-snaplist-carousel';

const Matching = () => {

    const snapList = useRef(null);
    useDragToScroll({ref: snapList, disable: false});

    const snapList1 = useRef(null);
    useDragToScroll({ref: snapList1, disable: false});

    let months = [];
    for (let i = 0; i <= 24; i++) {
        months.push(
            <SnapItem margin={{left: '15px', right: '15px'}} width="30%" snapAlign="center">
                <button style={{backgroundColor: 'yellow'}}>
                    <text
                        style={{
                            color: 'blue',
                            fontWeight: 'regular',
                            fontSize: '80px',
                        }}>{i}
                    </text>
                </button>
            </SnapItem>)
    }
    return (
        <MainContainer>
            <IphoneFrame/>
            <IphoneScreen>
                <SnapList ref={snapList} direction="horizontal"
                          width='100%'>
                    {months}
                </SnapList>
                <SnapList ref={snapList1} direction="horizontal"
                          width='100%'>
                    {months}
                </SnapList>
            </IphoneScreen>
        </MainContainer>
    )
}

export default Matching;

