import React from 'react';
import * as typographyStyles from "../styles/typography";

export default class WhoGroup extends React.Component {
    render() {
        return (
            <div className={'App-header'}>
                <text style={typographyStyles.cushingTextHeader}>Who is in the group?</text>
                <input

                    placeholder="Name of sponsor"
                />
                <input
                    placeholder="Website address"
                />
                {/*<FormFile*/}
                {/*    id="custom-file"*/}
                {/*    label="Upload logo"*/}
                {/*    custom*/}
                {/*/>*/}
            </div>
        );
    }
}
