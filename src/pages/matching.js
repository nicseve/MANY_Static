import React from 'react';
import {MainContainer, IphoneFrame, IphoneScreen} from "../components";


export default class Matching extends React.Component {
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
                <IphoneScreen>

                    <div style={{
                        zIndex: 1,
                        backgroundColor:'red',
                        flexDirection: 'row',
                        display: 'flex',
                        position: 'absolute',
                        width: 302,
                        height: 250,
                        overflow: "auto"
                    }}>
                        {months}
                    </div>
                    <div style={{
                        backgroundColor:'blue',
                        zIndex: 1,
                        flexDirection: 'row',
                        display: 'flex',
                        position: 'absolute',
                        marginTop: 290,
                        width: 302,
                        height:250,
                        overflow: "auto"
                    }}>
                        {months}
                    </div>
                </IphoneScreen>
            </MainContainer>
        )
    }
}
