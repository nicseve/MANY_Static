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
import {Input} from "@material-ui/core";

function WhereGroup() {
    return (
        <MainContainer>
            <IphoneFrame/>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>Where is the group?</TextHeaderCush>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        top: '10px',
                        left: '45px',
                        gap: '5px'
                    }}>
                    <TextBaseManySans fontSize='20px'>Located in</TextBaseManySans>
                    <TextBaseManySans fontSize='20px'>Traveling from</TextBaseManySans>
                    <TextBaseManySans fontSize='20px'>Sharing from</TextBaseManySans>
                </div>
                <div
                    style={{display: 'flex', flexDirection: 'column', position: 'relative', top: '20px', left: '20px'}}>
                    <Input
                        placeholder="Country"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans', fontSize: 'large'}}
                    />
                    <Input
                        placeholder="City"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans', fontSize: 'large'}}
                    />
                    <Input
                        placeholder="Postal code"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MANYSans', fontSize: 'large'}}
                    />
                </div>
                <div style={{display: 'flex', flexDirection: 'row', position: 'relative', top: '252px', gap: '55px'}}>
                    <LeftBlackButton style={{height: '20px'}} path={'/whoGroup'}/>
                    <ManyHomeButton style={{height: '30px'}} path={'/home'}/>
                    <RightBlackButton style={{height: '20px'}} path={'/whereGroup'}/>
                </div>
            </IphoneScreen>
        </MainContainer>
    )
}

export default WhereGroup;
