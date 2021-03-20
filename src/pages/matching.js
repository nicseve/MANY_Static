import React, {useRef} from 'react';
import {MainContainer, IphoneFrame, IphoneScreen,Glyph} from "../components";
import {
    SnapItem, SnapList, useDragToScroll,
} from 'react-snaplist-carousel';


const mainUsers = [
    {
        z: 0,
        month: 24,
        id: 0,
        location: require("../assets/continents/0049_con.png"),
        glyph: require("../assets/glyphs/0050_B.png").default,
        logo: require("../assets/logos/0049_AMAM_BW.png"),
        logo1: require("../assets/logos/0049_TUNUR_BW.png")
    },
    {
        z: 1,
        month: 36,
        id: 6,
        location: require("../assets/continents/0022_con.png"),
        glyph: require("../assets/glyphs/0022_B.png").default,
        logo: require("../assets/logos/0022_ECFMG_BW.png")
    },
    {
        z: 0,
        month: 12,
        id: 1,
        location: require("../assets/continents/0039_con.png"),
        glyph: require("../assets/glyphs/0039_B.png").default,
        logo: require("../assets/logos/0039_AGIN_BW.png"),
        logo1: require("../assets/logos/0039_ARC_BW.png"),
        logo2: require("../assets/logos/0039_UKZ_BW.png")
    },
    {
        z: 0,
        month: 12,
        id: 2,
        location: require("../assets/continents/0040_con.png"),
        glyph: require("../assets/glyphs/0040_B.png").default,
        logo: require("../assets/logos/0040_SWU_BW.png")
    },
    {
        z: 0,
        month: 12,
        id: 3,
        location: require("../assets/continents/0041_con.png"),
        glyph: require("../assets/glyphs/0041_B.png").default,
        logo: require("../assets/logos/0041_UGuadalajara_BW.png")
    },
    {
        z: 0,
        month: 24,
        id: 4,
        location: require("../assets/continents/0045_con.png"),
        glyph: require("../assets/glyphs/0045_B.png").default,
        logo: require("../assets/logos/0045_NIEED_BW.png")
    },
    {
        z: 1,
        month: 12,
        id: 5,
        location: require("../assets/continents/0046_con.png"),
        glyph: require("../assets/glyphs/0046_A.png").default,
        logo: require("../assets/logos/0046_UDESC_BW.png"),
        logo1: require("../assets/logos/0046_usp_bw.png")
    },
    {
        z: 0,
        month: 24,
        id: 7,
        location: require("../assets/continents/0061_con.png"),
        glyph: require("../assets/glyphs/0061_B.png").default,
        logo: require("../assets/logos/0061_IL_BW.png")
    },
    {
        z: 0,
        month: 24,
        id: 8,
        location: require("../assets/continents/0067_con.png"),
        glyph: require("../assets/glyphs/0067_B.png").default,
        logo: require("../assets/logos/0067_AEA_BW.png"),
        logo1: require("../assets/logos/0067_AEA_BW.png")
    },
    {
        height: 100,
        move: 130,
        z: 0,
        month: 36,
        id: 9,
        location: require("../assets/continents/0071_con.png"),
        glyph: require("../assets/glyphs/0071_C.png").default,
        logo: require("../assets/logos/0071_ISAB_BW.png")
    },
    {
        z: 0,
        month: 12,
        id: 10,
        location: require("../assets/continents/0073_con.png"),
        glyph: require("../assets/glyphs/0073_B.png").default,
        logo: require("../assets/logos/0073_GBM_BW.png"),
        logo1: require("../assets/logos/0073_TFC_BW.png")
    },
    {
        z: 0,
        month: 12,
        id: 11,
        location: require("../assets/continents/0074_con.png"),
        glyph: require("../assets/glyphs/0074_B.png").default,
        logo: require("../assets/logos/0074_TFC_BW.png")
    },
    // {
    //     move: 90,
    //     z: 0,
    //     month: 24,
    //     id: 12,
    //     location: require("../assets/continents/0075_con.png"),
    //     glyph: require("../assets/glyphs/0075_C.png").default,
    //     logo: require("../assets/logos/0075_WFC_BW.png")
    // },
    // {
    //     z: 0,
    //     month: 12,
    //     id: 13,
    //     location: require("../assets/continents/0077_con.png"),
    //     glyph: require("../assets/glyphs/0077_B.png").default,
    //     logo: require("../assets/logos/0077_Jerash_BW.png")
    // },
    // {
    //     z: 0,
    //     month: 12,
    //     id: 14,
    //     location: require("../assets/continents/0078_con.png"),
    //     glyph: require("../assets/glyphs/0078_B.png").default,
    //     logo: require("../assets/logos/0078_FAO_BW.png")
    // },
    // {
    //     z: 1,
    //     month: 36,
    //     id: 15,
    //     location: require("../assets/continents/0079_con.png"),
    //     glyph: require("../assets/glyphs/0079_A.png").default,
    //     logo: require("../assets/logos/0079_DamascusU_BW.png")
    // },
    // {
    //     z: 1,
    //     month: 24,
    //     id: 16,
    //     location: require("../assets/continents/0080_con.png"),
    //     glyph: require("../assets/glyphs/0080_A.png").default,
    //     logo: require("../assets/logos/0080_ECA_BW.png")
    // },
    // {
    //     z: 0,
    //     month: 24,
    //     id: 17,
    //     location: require("../assets/continents/0081_con.png"),
    //     glyph: require("../assets/glyphs/0081_B.png").default,
    //     logo: require("../assets/logos/0081_WWBG_BW.png")
    // },
    // {
    //     z: 1,
    //     month: 18,
    //     id: 18,
    //     location: require("../assets/continents/0085_con.png"),
    //     glyph: require("../assets/glyphs/0085_A.png").default,
    //     logo: require("../assets/logos/0085_BHRRC_BW.png"),
    //     logo1: require("../assets/logos/0085_JCCA_BW.png")
    // },
    // {
    //     z: 0,
    //     month: 18,
    //     id: 19,
    //     location: require("../assets/continents/0086_con.png"),
    //     glyph: require("../assets/glyphs/0086_B.png").default,
    //     logo: require("../assets/logos/0086_BIRZEIT_BW.png"),
    //     logo1: require("../assets/logos/0086_IYF_BW.png")
    // },
    // {
    //     z: 0,
    //     month: 6,
    //     id: 20,
    //     location: require("../assets/continents/0088_con.png"),
    //     glyph: require("../assets/glyphs/0088_B.png").default,
    //     logo: require("../assets/logos/0088_ESL_BW.png"),
    //     logo1: require("../assets/logos/0088_icee_BW.png")
    // },
    // {
    //     z: 1,
    //     month: 6,
    //     id: 21,
    //     location: require("../assets/continents/0089_con.png"),
    //     glyph: require("../assets/glyphs/0089_A.png").default,
    //     logo: require("../assets/logos/0089_DOCTORSACADEMY_BW.png")
    // },
    // {
    //     z: 1,
    //     month: 6,
    //     id: 22,
    //     location: require("../assets/continents/0091_con.png"),
    //     glyph: require("../assets/glyphs/0091_A.png").default,
    //     logo: require("../assets/logos/0091_CS_BW.png"),
    //     logo1: require("../assets/logos/0091_LMA_BW.png")
    // },
];

const createMainUsers = (usersDict) => {
    let users = []
    usersDict.forEach((user => {
        users.push(
            <SnapItem margin={{left: '23px', right: '23px'}} width="60%" height="80%" snapAlign="center">
                <Glyph path={user.glyph}/>
            </SnapItem>
        )
    }))
    return users
}

const Matching = () => {

const snapList = useRef(null);
useDragToScroll({ref: snapList, disable: false});

const snapList1 = useRef(null);
useDragToScroll({ref: snapList1, disable: false});

let users = createMainUsers(mainUsers);

return (
    <MainContainer>
        <IphoneFrame/>
        <IphoneScreen>
            <div style={{zIndex:4,position:'fixed',marginTop:100}}>
                <SnapList ref={snapList} direction="horizontal"
                          width='308px' height='250px'>
                    {users}
                </SnapList>
            </div>
            <div style={{zIndex:3,position:'fixed',marginTop:210}}>
            <SnapList ref={snapList1} direction="horizontal"
                      width='308px' height='250px'>
                {users}
            </SnapList>
            </div>
        </IphoneScreen>
    </MainContainer>
)
}

export default Matching;

