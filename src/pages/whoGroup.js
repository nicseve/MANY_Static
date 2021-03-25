import React from 'react';
import {TextField, Button, Input} from '@material-ui/core'
import {IphoneFrame, MainContainer, PageGrid, TextHeaderCush,TextBaseGothic, IphoneScreen} from "../components/index";


function WhoGroup() {

    // const [sponsor, setSponser] = React.useState("");
    // const [webAddress, setWebAddress] = React.useState("");

    return (
        <MainContainer>
            <IphoneFrame/>
            <IphoneScreen>
                <div style={{margin: '15px'}}>
                    <TextHeaderCush>Who is in the group?</TextHeaderCush>
                </div>
                <div style={{display:'flex', flexDirection:'column',position: 'relative', top: '10px', left: '20px'}}>
                    <Input
                        placeholder="Name of sponsor"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MSGothicThesis,sans-serif',fontSize:'large'}}
                    />
                    <Input
                        placeholder="Website address"
                        color='black'
                        disableUnderline={true}
                        style={{width: '90%', fontFamily: 'MSGothicThesis,sans-serif',fontSize:'large'}}
                    />
                    <input
                        accept="image/*"
                        style={{display: "none"}}
                        type="file"
                        id="contained-button-file"
                    />
                    <label htmlFor="contained-button-file">
                        {/*<Button variant="text" component="span">*/}
                            <TextBaseGothic fontSize={'19px'} style={{cursor:'pointer',color:'#bdbdbd'}}>Upload logo</TextBaseGothic>
                        {/*</Button>*/}
                    </label>
                </div>
            </IphoneScreen>
        </MainContainer>
    );
}

export default WhoGroup;


