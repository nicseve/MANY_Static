import React from 'react';
import {
    IphoneFrame,
    MainContainer,
    TextHeaderCush,
    IphoneScreen,
    LeftBlackButton,
    RightBlackButton,
    ManyHomeButton,
    TextBaseManySans
} from "../components/index";

function WhereGroup() {
    return (
        <MainContainer>
            <IphoneFrame/>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>Where is the group?</TextHeaderCush>
                </div>
                <div
                    style={{display: 'flex', flexDirection: 'column', position: 'relative', top: '10px', left: '45px',gap:'5px'}}>
                    <TextBaseManySans fontSize='20px'>Located in</TextBaseManySans>
                    <TextBaseManySans fontSize='20px'>Traveling from</TextBaseManySans>
                    <TextBaseManySans fontSize='20px'>Sharing from</TextBaseManySans>

                </div>
                <div style={{display: 'flex', flexDirection: 'row', marginTop: '355px', gap: '55px'}}>
                    <LeftBlackButton style={{height: '20px'}} path={'/whoGroup'}/>
                    <ManyHomeButton style={{height: '30px'}} path={'/home'}/>
                    <RightBlackButton style={{height: '20px'}} path={'/whereGroup'}/>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhereGroup;
