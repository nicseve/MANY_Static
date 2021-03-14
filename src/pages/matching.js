import React, {useRef} from 'react';
import {MainContainer, IphoneFrame, IphoneScreen} from "../components";
import {
    SnapList,
    SnapItem,
    useVisibleElements,
    useScroll,
    useDragToScroll
} from 'react-snaplist-carousel';


const Matching = () => {

    const snapList = useRef(null);
    const {isDragging} = useDragToScroll({ref: snapList, disable: false});

    let months = [];
    for (let i = 0; i <= 24; i++) {
        months.push(
            <SnapItem margin={{left: '15px', right: '15px'}} width="30%" snapAlign="center">
                <button style={{backgroundColor: 'yellow'}}>
                    <text
                        style={{
                            color: 'white',
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

                <SnapList ref={snapList}  direction="horizontal"
                          width={310}>
                    {months}
                </SnapList>
                {/*<ScrollContainer style={{*/}
                {/*    backgroundColor: 'blue',*/}
                {/*    zIndex: 1,*/}
                {/*    flexDirection: 'row',*/}
                {/*    alignItems: 'center',*/}
                {/*    display: 'flex',*/}
                {/*    position: 'absolute',*/}
                {/*    marginTop: 290,*/}
                {/*    width: 302,*/}
                {/*    height: 250,*/}
                {/*    overflow: "auto"*/}
                {/*}}>*/}
                {/*    {months}*/}
                {/*</ScrollContainer>*/}
            </IphoneScreen>
        </MainContainer>
    )
}

export default Matching;

