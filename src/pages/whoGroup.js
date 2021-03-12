import React from 'react';
import * as typographyStyles from "../styles/typography";
import {TextField, Grid, Button} from '@material-ui/core'
import {NavigationButton, ManyLogo, IphoneFrame, ContainerDiv, PageGrid} from "../components/index";


function WhoGroup() {
    return (
        <ContainerDiv>
            <IphoneFrame/>
            <PageGrid
                container
                direction="column"
                justify="center"
                alignItems="center">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <text style={typographyStyles.cushingTextHeader}>Who is in the group?</text>
                    <TextField
                        label="Sponsor Name"
                        color='black'
                        style={{width: '20%'}}
                        // variant="filled"
                    />
                    <TextField
                        // variant="filled"
                        style={{width: '20%'}}
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
                </Grid>
                {/*</div>*/}
            </PageGrid>
        </ContainerDiv>
    )
        ;
}

export default WhoGroup;


