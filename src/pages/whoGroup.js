import React from 'react';
import {TextField, Button} from '@material-ui/core'
import {IphoneFrame, MainContainer, PageGrid, TextBaseCush} from "../components/index";


function WhoGroup() {
    return (
        <MainContainer>
            <IphoneFrame/>
            <PageGrid
                container
                direction="column"
                justify="center"
                alignItems="center">
                <TextBaseCush>Who is in the group?</TextBaseCush>
                <TextField
                    label="Sponsor Name"
                    color='black'
                    InputProps={{disableUnderline: true}}
                    style={{width: '60%'}}
                />
                <TextField
                    InputProps={{disableUnderline: true}}
                    style={{width: '60%'}}
                    label="Website Address"
                    color='black'
                />
                <input
                    accept="image/*"
                    style={{display: "none"}}
                    type="file"
                    multiple
                    id="contained-button-file"
                />
                <label htmlFor="contained-button-file">
                    {/*<Button className={classes.button} variant="text" component="span">*/}
                    {/*    <text style={typographyStyles.manySansTextBase}>Upload logo</text>*/}
                    {/*</Button>*/}
                </label>
            </PageGrid>
        </MainContainer>
    );
}

export default WhoGroup;


