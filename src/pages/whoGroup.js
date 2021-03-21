import React from 'react';
import {TextField,Button,Input} from '@material-ui/core'
import {IphoneFrame, MainContainer, PageGrid, TextBaseCush,IphoneScreen} from "../components/index";


function WhoGroup() {

    // const [sponsor, setSponser] = React.useState("");
    // const [webAddress, setWebAddress] = React.useState("");

    return (
        <MainContainer>
            <IphoneFrame/>
            <IphoneScreen>
                <TextBaseCush>Who is in the group?</TextBaseCush>
                <Input
                    placeholder="Name of sponsor"
                    color='black'
                    disableUnderline={true}
                    style={{width: '60%',fontFamily:'MSGothicThesis,sans-serif'}}
                />
                <Input
                    placeholder="Website address"
                    color='black'
                    disableUnderline={true}
                    style={{width: '60%',fontFamily:'MSGothicThesis,sans-serif'}}
                />
                <input
                    accept="image/*"
                    style={{display: "none"}}
                    type="file"
                    multiple
                    id="contained-button-file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="text" component="span">
                        <text>Upload logo</text>
                    </Button>
                </label>
            </IphoneScreen>
        </MainContainer>
    );
}

export default WhoGroup;


