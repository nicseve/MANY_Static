import React, {useRef} from 'react';
import {MainContainer, IphoneFrame, IphoneScreen,Glyph} from "../components";
import {
    SnapItem, SnapList, useDragToScroll, useScroll,
} from 'react-snaplist-carousel';


const mainUsers = [
    {z:0,month:24,id:0,location:require("../assets/continents/0049_con.png").default, glyph: require("../assets/glyphs/0050_B.png").default,logo:require("../assets/logos/0049_AMAM_BW.png").default,logo1:require("../assets/logos/0049_TUNUR_BW.png").default},
    {z:1,month:36,id:6,location:require("../assets/continents/0022_con.png").default, glyph: require("../assets/glyphs/0022_B.png").default,logo:require("../assets/logos/0022_ECFMG_BW.png").default},
    {z:0,month:12,id:1,location:require("../assets/continents/0039_con.png").default, glyph: require("../assets/glyphs/0039_B.png").default,logo:require("../assets/logos/0039_AGIN_BW.png").default,logo1:require("../assets/logos/0039_ARC_BW.png").default,logo2:require("../assets/logos/0039_UKZ_BW.png").default},
    {z:0,month:12,id:2,location:require("../assets/continents/0040_con.png").default, glyph: require("../assets/glyphs/0040_B.png").default,logo:require("../assets/logos/0040_SWU_BW.png").default},
    {z:0,month:12,id:3,location:require("../assets/continents/0041_con.png").default, glyph: require("../assets/glyphs/0041_B.png").default,logo:require("../assets/logos/0041_UGuadalajara_BW.png").default},
    {z:0,month:24,id:4,location:require("../assets/continents/0045_con.png").default, glyph: require("../assets/glyphs/0045_B.png").default,logo:require("../assets/logos/0045_NIEED_BW.png").default},
    {z:1,month:12,id:5,location:require("../assets/continents/0046_con.png").default, glyph: require("../assets/glyphs/0046_A.png").default,logo:require("../assets/logos/0046_UDESC_BW.png").default,logo1:require("../assets/logos/0046_usp_bw.png").default},
    {z:0,month:24,id:7,location:require("../assets/continents/0061_con.png").default, glyph: require("../assets/glyphs/0061_B.png").default,logo:require("../assets/logos/0061_IL_BW.png").default},
    {z:0,month:24,id:8,location:require("../assets/continents/0067_con.png").default, glyph: require("../assets/glyphs/0067_B.png").default,logo:require("../assets/logos/0067_AEA_BW.png").default,logo1:require("../assets/logos/0067_AEA_BW.png").default},
    {height:100,move:130, z:0,month:36,id:9,location:require("../assets/continents/0071_con.png").default, glyph: require("../assets/glyphs/0071_C.png").default,logo:require("../assets/logos/0071_ISAB_BW.png").default},
    {z:0,month:12,id:10,location:require("../assets/continents/0073_con.png").default, glyph: require("../assets/glyphs/0073_B.png").default,logo:require("../assets/logos/0073_GBM_BW.png").default,logo1:require("../assets/logos/0073_TFC_BW.png").default},
    {z:0,month:12,id:11,location:require("../assets/continents/0074_con.png").default, glyph: require("../assets/glyphs/0074_B.png").default,logo:require("../assets/logos/0074_TFC_BW.png").default},
    {move:90,z:0,month:24,id:12,location:require("../assets/continents/0075_con.png").default, glyph: require("../assets/glyphs/0075_C.png").default,logo:require("../assets/logos/0075_WFC_BW.png").default},
    {z:0,month:12,id:13,location:require("../assets/continents/0077_con.png").default, glyph: require("../assets/glyphs/0077_B.png").default,logo:require("../assets/logos/0077_Jerash_BW.png").default},
    {z:0,month:12,id:14,location:require("../assets/continents/0078_con.png").default,glyph: require("../assets/glyphs/0078_B.png").default,logo:require("../assets/logos/0078_FAO_BW.png").default},
    {z:1,month:36,id:15,location:require("../assets/continents/0079_con.png").default, glyph: require("../assets/glyphs/0079_A.png").default,logo:require("../assets/logos/0079_DamascusU_BW.png").default},
    {z:1,month:24,id:16,location:require("../assets/continents/0080_con.png").default, glyph: require("../assets/glyphs/0080_A.png").default,logo:require("../assets/logos/0080_ECA_BW.png").default},
    {z:0,month:24,id:17,location:require("../assets/continents/0081_con.png").default, glyph: require("../assets/glyphs/0081_B.png").default,logo:require("../assets/logos/0081_WWBG_BW.png").default},
    {z:1,month:18,id:18,location:require("../assets/continents/0085_con.png").default, glyph: require("../assets/glyphs/0085_A.png").default,logo:require("../assets/logos/0085_BHRRC_BW.png").default,logo1:require("../assets/logos/0085_JCCA_BW.png").default},
    {z:0,month:18,id:19,location:require("../assets/continents/0086_con.png").default, glyph: require("../assets/glyphs/0086_B.png").default,logo:require("../assets/logos/0086_BIRZEIT_BW.png").default,logo1:require("../assets/logos/0086_IYF_BW.png").default},
    {z:0,month:6,id:20,location:require("../assets/continents/0088_con.png").default, glyph: require("../assets/glyphs/0088_B.png").default,logo:require("../assets/logos/0088_ESL_BW.png").default,logo1:require("../assets/logos/0088_icee_BW.png").default},
    {z:1,month:6,id:21,location:require("../assets/continents/0089_con.png").default, glyph: require("../assets/glyphs/0089_A.png").default,logo:require("../assets/logos/0089_DOCTORSACADEMY_BW.png").default},
    {z:1,month:6,id:22,location:require("../assets/continents/0091_con.png").default, glyph: require("../assets/glyphs/0091_A.png").default,logo:require("../assets/logos/0091_CS_BW.png").default,logo1:require("../assets/logos/0091_LMA_BW.png").default},
];

 function renderMatches() {

    let u6 = [
        {id:0,month:36,location:require("../Continents/0021_con.png"), name: require("../Glyphs/0021_B.png"),logo:require("../Logos/0021_Alexandria_BW.png"),logo1:require("../Logos/0021_ECFMG_BW.png")},
        {id:1,month:36,location:require("../Continents/0023_con.png"), name: require("../Glyphs/0023_B.png"),logo:require("../Logos/0023_Beaumont_BW.png"),logo1:require("../Logos/0023_ECFMG_BW.png")},
        {id:2,month:6,location:require("../Continents/0055_con.png"), name: require("../Glyphs/0055_B.png"),logo:require("../Logos/0055_CSU_BW.png"),logo1:require("../Logos/0055_SAS_BW.png")},
    ];
    let u1 = [
        {id:0,month:12,location:require("../Continents/0014_con.png"), name: require("../Glyphs/0014_A.png"),logo:require("../Logos/0014_WWFE_BW.png")},
        {id:1,month:12,location:require("../Continents/0016_con.png"), name: require("../Glyphs/0016_A.png"),logo:require("../Logos/0016_WWFE_BW.png")},
        {id:2,month:12,location:require("../Continents/0037_con.png"), name: require("../Glyphs/0037_A.png"),logo:require("../Logos/0037_ILRI_BW.png")},
        {id:3,month:36,location:require("../Continents/0047_con.png"), name: require("../Glyphs/0047_B.png"),logo:require("../Logos/0047_DAAD_BW.png"),logo1:require("../Logos/0047_ESGPIP_BW.png")},
        {id:4,month:36,location:require("../Continents/0095_con.png"), name: require("../Glyphs/0095_A.png"),logo:require("../Logos/0095_CFRURALA_BW.png")},
    ];
    let u2 = [
        {id:0,month:12,location:require("../Continents/0015_con.png"), name: require("../Glyphs/0015_A.png"),logo:require("../Logos/0015_WWFE_BW.png")},
        {id:1,month:12,location:require("../Continents/0017_con.png"), name: require("../Glyphs/0017_A.png"),logo:require("../Logos/0017_DRYCREEK_BW.png"),logo1:require("../Logos/0017_WWFE_BW.png")},
        {id:2,month:12,location:require("../Continents/0018_con.png"), name: require("../Glyphs/0018_A.png"),logo:require("../Logos/0018_WWFE_BW.png")},
        {id:3,month:12,location:require("../Continents/0019_con.png"), name: require("../Glyphs/0019_A.png"),logo:require("../Logos/0019_WWFE_BW.png")},
        {id:4,month:12,location:require("../Continents/0020_con.png"), name: require("../Glyphs/0020_A.png"),logo:require("../Logos/0020_WWFE_BW.png")},
        {id:5,month:6,location:require("../Locations/Australia.png"), name: require("../Glyphs/0038_A.png"),logo:require("../Logos/0038_AUS_BW.png"),logo1:require("../Logos/0038_NHL_.png")},
        {id:6,month:6,location:require("../Continents/0063_con.png"), name: require("../Glyphs/0063_A.png"),logo:require("../Logos/0063_Sastak_BW.png")},
        {id:7,month:24,location:require("../Continents/0024_con.png"), name: require("../Glyphs/0024_B.png"),logo:require("../Logos/0024_Detroit__BW.png"),logo1:require("../Logos/0024_DGE_BW.png")},
        {id:8,month:6,location:require("../Continents/0063_con.png"), name: require("../Glyphs/0063_A.png"),logo:require("../Logos/0063_Sastak_BW.png")},
        {id:9,month:24,location:require("../Continents/0072_con.png"), name: require("../Glyphs/0072_A.png"),logo:require("../Logos/0072_WPC_BW.png")},
        {id:10,month:12,location:require("../Continents/0092_con.png"), name: require("../Glyphs/0092_A.png"),logo:require("../Logos/0092_EARTNNET_BW.png"),logo1:require("../Logos/0092_MESA_BW.png")},
    ];
    let u3 = [
        {id:0,month:12,location:require("../Continents/0014_con.png"), name: require("../Glyphs/0014_A.png"),logo:require("../Logos/0014_WWFE_BW.png")},
        {id:1,month:12,location:require("../Continents/0016_con.png"), name: require("../Glyphs/0016_A.png"),logo:require("../Logos/0016_WWFE_BW.png")},
        {id:2,month:12,location:require("../Continents/0037_con.png"), name: require("../Glyphs/0037_A.png"),logo:require("../Logos/0037_ILRI_BW.png")},
        {id:3,month:36,location:require("../Continents/0047_con.png"), name: require("../Glyphs/0047_B.png"),logo:require("../Logos/0047_ESGPIP_BW.png"),logo1:require("../Logos/0047_DAAD_BW.png")},
        {id:4,month:36,location:require("../Continents/0095_con.png"), name: require("../Glyphs/0095_A.png"),logo:require("../Logos/0095_CFRURALA_BW.png")},
    ];
    let u4 = [
        {id:0,month:36,location:require("../Continents/0044_con.png"), name: require("../Glyphs/0044_A.png"),logo:require("../Logos/0044_NIEED_BW.png")},
    ];
    let u5 = [
        {id:0,month:12,location:require("../Continents/0028_con.png"), name: require("../Glyphs/0028_B.png"),logo:require("../Logos/0028_USFS_BW.png")},
        {id:1,month:12,location:require("../Continents/0029_con.png"), name: require("../Glyphs/0029_B.png"),logo:require("../Logos/0029_USFS_BW.png")},
        {id:2,month:12,location:require("../Continents/0031_con.png"), name: require("../Glyphs/0031_B.png"),logo:require("../Logos/0031_USFS_BW.png")},
        {id:3,month:4,location:require("../Continents/0064_con.png"), name: require("../Glyphs/0064_B.png"),logo:require("../Logos/0064_SEE_BW.png"),logo1:require("../Logos/0064_Access_Tier5_BW.jpg")},
        {id:4,month:12,location:require("../Continents/0069_con.png"), name: require("../Glyphs/0069_B.png"),logo:require("../Logos/0069_BIODIVERSITY_BW.png"),logo1:require("../Logos/0069_CGIAR_logo_BW.png")},
        {id:5,month:12,location:require("../Continents/0070_con.png"), name: require("../Glyphs/0070_B.png"),logo:require("../Logos/0070_BIODIVERSITY_BW.png"),logo1:require("../Logos/0070_CGIAR_logo_BW.png")},
        {id:6,month:6,location:require("../Continents/0094_con.png"), name: require("../Glyphs/0094_B.png"),logo:require("../Logos/0094_AMERICORPS_BW.png"),logo1:require("../Logos/0094_EARTHCORPS_BW.png")},
    ];
    let u0 = [
        {id:0,month:24,location:require("../Continents/0051_con.png"), name: require("../Glyphs/0051_B.png"),logo:require("../Logos/0051_ILO_BW.png"),logo1:require("../Logos/0051_TUNUR_BW.png")},
        {id:1,month:36,location:require("../Continents/0053_con.png"), name: require("../Glyphs/0053_B.png"),logo:require("../Logos/0053_DESERTEC_BW.png"),logo1:require("../Logos/0053_IOM_BW.png")},
    ];
    let u7 = [
        {id:0,month:12,location:require("../Continents/0056_con.png"), name: require("../Glyphs/0056_B.png"),logo:require("../Logos/0056_AARP_BW.png"),logo1:require("../Logos/0056_Encore_BW.png")},
        {id:1,month:12,location:require("../Continents/0057_con.png"), name: require("../Glyphs/0057_B.png"),logo:require("../Logos/0057_AARP_BW.png"),logo1:require("../Logos/0057_Encore_BW.png")},
        {id:2,month:12,location:require("../Continents/0058_con.png"), name: require("../Glyphs/0058_B.png"),logo:require("../Logos/0058_AARP_BW.png"),logo1:require("../Logos/0058_COTACACHI_BW.png")},
        {id:3,month:300,location:require("../Continents/0059_con.png"), name: require("../Glyphs/0059_B.png"),logo:require("../Logos/0059_CIPEM_BW.png"),logo1:require("../Logos/0059_EERealty_BW.png")},
        {id:4,month:12,location:require("../Continents/0060_con.png"), name: require("../Glyphs/0060_A.png"),logo:require("../Logos/0060_IESS_BW.png"),logo1:require("../Logos/0060_IL_BW.png")},
    ];
    let u8 = [
        {id:0,month:24,location:require("../Continents/0066_con.png"), name: require("../Glyphs/0066_A.png"),logo:require("../Logos/0066_AEA_BW.png")},
    ];
    let u9 = [
        {id:0,move:-0,month:24,location:require("../Continents/0068_con.png"), name: require("../Glyphs/0068_C.png"),logo:require("../Logos/0068_CIP_BW.png")},
        {id:1,move:-20,month:24,location:require("../Continents/0075_con.png"), name: require("../Glyphs/0075_C.png"),logo:require("../Logos/0075_WFC_BW.png")},
        {id:2,month:24,location:require("../Continents/0087_con.png"), name: require("../Glyphs/0087_C.png"),logo:require("../Logos/0087_BW.png"),logo1:require("../Logos/0087_CAP_BW.png")},
        {id:3,month:24,location:require("../Continents/0076_con.png"), name: require("../Glyphs/0076_C.png"),logo:require("../Logos/0076_KFC_BW.png")},
    ];
    let u10 = [
        {id:0,text:require("../Paragraphs/unnamed.png"),month:12,location:require("../Continents/0002_con.png"), name: require("../Glyphs/0002_A.png"),logo:require("../Logos/0002_FCC_BW.png"),logo1:require("../Logos/0002_STLOUIS_BW.png")},
        {id:1,month:12,location:require("../Continents/0003_con.png"), name: require("../Glyphs/0003_A.png"),logo:require("../Logos/0003_FCC_BW.png"),logo1:require("../Logos/0003_KANSASCITY_BW.png")},
        {id:2,month:12,location:require("../Continents/0004_con.png"), name: require("../Glyphs/0004_A.png"),logo:require("../Logos/0004_FCC_BW.png"),logo1:require("../Logos/0004_FLINT_BW.png")},
        {id:3,month:14,location:require("../Continents/0005_con.png"), name: require("../Glyphs/0005_A.png"),logo:require("../Logos/0005_FCC_BW.png"),logo1:require("../Logos/0005_UWT_BW.png")},
        {id:4,month:12,location:require("../Continents/0006_con.png"), name: require("../Glyphs/0006_A.png"),logo:require("../Logos/0006_ELKHART_BW.png"),logo1:require("../Logos/0006_FCC_BW.png")},
        {id:5,month:6,location:require("../Continents/0094_con.png"), name: require("../Glyphs/0094_B.png"),logo:require("../Logos/0094_EARTHCORPS_BW.png"),logo1:require("../Logos/0094_AMERICORPS_BW.png")},
    ];
    let u11 = [
        {id:0,month:12,location:require("../Continents/0002_con.png"), name: require("../Glyphs/0002_A.png"),logo:require("../Logos/0002_FCC_BW.png"),logo1:require("../Logos/0002_STLOUIS_BW.png")},
        {id:1,month:12,location:require("../Continents/0003_con.png"), name: require("../Glyphs/0003_A.png"),logo:require("../Logos/0003_FCC_BW.png"),logo1:require("../Logos/0003_KANSASCITY_BW.png")},
        {id:2,month:12,location:require("../Continents/0004_con.png"), name: require("../Glyphs/0004_A.png"),logo:require("../Logos/0004_FCC_BW.png"),logo1:require("../Logos/0004_FLINT_BW.png")},
        {id:3,month:14,location:require("../Continents/0005_con.png"), name: require("../Glyphs/0005_A.png"),logo:require("../Logos/0005_FCC_BW.png"),logo1:require("../Logos/0005_UWT_BW.png")},
        {id:4,month:12,location:require("../Continents/0006_con.png"), name: require("../Glyphs/0006_A.png"),logo:require("../Logos/0006_ELKHART_BW.png"),logo1:require("../Logos/0006_FCC_BW.png")},
        {id:5,month:6,location:require("../Continents/0094_con.png"), name: require("../Glyphs/0094_B.png"),logo:require("../Logos/0094_EARTHCORPS_BW.png"),logo1:require("../Logos/0094_AMERICORPS_BW.png")},
    ];
    let u12 = [
        {id:0,move:30,month:24,location:require("../Continents/0076_con.png"), name: require("../Glyphs/0076_C.png"),logo:require("../Logos/0076_KFC_BW.png")},
    ];
    let u13 = [
        {id:0,month:12,location:require("../Continents/0007_con.png"), name: require("../Glyphs/0007_B.png"),logo:require("../Logos/0007_DELFINA_BW.png, .png"),logo1:require("../Logos/0007_SILENTU_BW.png")},
        {id:1,month:12,location:require("../Continents/0008_con.png"), name: require("../Glyphs/0008_B.png"),logo:require("../Logos/0008_Impulse theater_BW.png"),logo1:require("../Logos/0008_ringlok_BW.png")},
        {id:3,month:1,location:require("../Continents/0012_con.png"), name: require("../Glyphs/0012_B.png"),logo:require("../Logos/0012_CSC_BW.png"),logo1:require("../Logos/0012_FNCSF_BW.png")},
        {id:4,month:36,location:require("../Continents/0044_con.png"), name: require("../Glyphs/0044_A.png"),logo:require("../Logos/0044_NIEED_BW.png")},
        {id:5,month:24,location:require("../Continents/0045_con.png"), name: require("../Glyphs/0045_B.png"),logo:require("../Logos/0045_NIEED_BW.png"),logo1:require("../Logos/0064_Access_Tier5_BW.jpg")},
        {id:6,month:6,location:require("../Continents/0052_con.png"), name: require("../Glyphs/0052_A.png"),logo:require("../Logos/0052_BRAC_BW.png"),logo1:require("../Logos/0052_ILO_BW.png")},
        {id:7,month:6,location:require("../Continents/0054_con.png"), name: require("../Glyphs/0054_A.png"),logo:require("../Logos/0054_CSU_BW.png"),logo1:require("../Logos/0054_SAS_BW.png")},
        {id:8,month:6,location:require("../Continents/0055_con.png"), name: require("../Glyphs/0055_B.png"),logo:require("../Logos/0055_SAS_BW.png"),logo1:require("../Logos/0055_CSU_BW.png")},
        {id:9,month:48,location:require("../Continents/0082_con.png"), name: require("../Glyphs/0082_B.png"),logo:require("../Logos/0082_Dayton_BW.png"),logo1:require("../Logos/0082_MCLB_BW.png")},
    ];
    let u14 = [
        {id:0,month:12,location:require("../Continents/0014_con.png"), name: require("../Glyphs/0014_A.png"),logo:require("../Logos/0014_WWFE_BW.png")},
        {id:1,month:12,location:require("../Continents/0016_con.png"), name: require("../Glyphs/0016_A.png"),logo:require("../Logos/0016_WWFE_BW.png")},
        {id:2,month:12,location:require("../Continents/0031_con.png"), name: require("../Glyphs/0031_B.png"),logo:require("../Logos/0031_USFS_BW.png")},
        {id:3,month:36,location:require("../Continents/0047_con.png"), name: require("../Glyphs/0047_B.png"),logo:require("../Logos/0047_DAAD_BW.png"),logo1:require("../Logos/0047_ESGPIP_BW.png")},
        {id:4,month:12,location:require("../Continents/0092_con.png"), name: require("../Glyphs/0092_A.png"),logo:require("../Logos/0092_MESA_BW.png"),logo1:require("../Logos/0092_EARTNNET_BW.png")},
        {id:5,month:12,location:require("../Continents/0093_con.png"), name: require("../Glyphs/0093_A.png"),logo:require("../Logos/0093_MESA_BW.png"),logo1:require("../Logos/0093_OSEEDA_BW.png")},
        {id:6,month:36,location:require("../Continents/0095_con.png"), name: require("../Glyphs/0095_A.png"),logo:require("../Logos/0095_CFRURALA_BW.png")},
        {id:7,month:12,location:require("../Continents/0096_con.png"), name: require("../Glyphs/0096_A.png"),logo:require("../Logos/0096_ALASKAMCC_BW.png")},
    ];
    let u15 = [
        {id:0,month:12,location:require("../Continents/0007_con.png"), name: require("../Glyphs/0007_B.png"),logo:require("../Logos/0007_Sroom_BW.png"),logo1:require("../Logos/0007_SILENTU_BW.png")},
        {id:1,month:12,location:require("../Continents/0008_con.png"), name: require("../Glyphs/0008_B.png"),logo:require("../Logos/0008_Impulse theater_BW.png"),logo1:require("../Logos/0008_ringlok_BW.png")},
        {id:2,month:12,location:require("../Continents/0043_con.png"), name: require("../Glyphs/0043_B.png"),logo:require("../Logos/0043_NIEED_BW.png"),logo1:require("../Logos/0043_TALK_BW.png")},
        {id:3,month:6,location:require("../Continents/0054_con.png"), name: require("../Glyphs/0054_A.png"),logo:require("../Logos/0054_CSU_BW.png"),logo1:require("../Logos/0054_SAS_BW.png")},
        {id:4,month:48,location:require("../Continents/0082_con.png"), name: require("../Glyphs/0082_B.png"),logo:require("../Logos/0082_Dayton_BW.png"),logo1:require("../Logos/0082_MCLB_BW.png")},
    ];
    let u16 = [
        {id:0,month:6,location:require("../Continents/0009_con.png"), name: require("../Glyphs/0009_B.png"),logo:require("../Logos/0009_bsm_BW.png"),logo1:require("../Logos/0009_REfugio_bw.png")},
        {id:1,month:1,location:require("../Continents/0013_con.png"), name: require("../Glyphs/0013_B.png"),logo:require("../Logos/0013_TU_BW.png"),logo1:require("../Logos/0013_Uberdentellerand_BW.png")},
        {id:2,month:18,location:require("../Continents/0024_con.png"), name: require("../Glyphs/0024_B.png"),logo:require("../Logos/0024_Detroit__BW.png"),logo1:require("../Logos/0024_DGE_BW.png")},
        {id:3,month:18,location:require("../Continents/0025_con.png"), name: require("../Glyphs/0025_B.png"),logo:require("../Logos/0025_DGE_BW.png"),logo1:require("../Logos/0024_Detroit__BW.png")},
        {id:4,month:12,location:require("../Continents/0026_con.png"), name: require("../Glyphs/0026_B.png"),logo:require("../Logos/0026_LOVELAND_BW.png"),logo1:require("../Logos/0026_DGE_BW.png")},
        {id:5,month:24,location:require("../Continents/0027_con.png"), name: require("../Glyphs/0027_B.png"),logo:require("../Logos/0027_DGE_BW.png"),logo1:require("../Logos/0027_CITYPITTS_BW.png")},
    ];
    let u17 = [
        {id:0,month:24,location:require("../Continents/0010_con.png"), name: require("../Glyphs/0010_B.png"),logo:require("../Logos/0010_geheimagentur_BW.png"),logo1:require("../Logos/0010_HYdrarchy_BW.png")},
        {id:1,month:18,location:require("../Continents/0011_con.png"), name: require("../Glyphs/0011_A.png"),logo:require("../Logos/0011_geheimagentur_BW.png"),logo1:require("../Logos/0011_HYdrarchy_BW.png")},
    ];
    let u18 = [
        {id:0,month:18,location:require("../Continents/0024_con.png"), name: require("../Glyphs/0024_B.png"),logo:require("../Logos/0024_DGE_BW.png"),logo1:require("../Logos/0024_Detroit__BW.png")},
        {id:1,month:18,location:require("../Continents/0025_con.png"), name: require("../Glyphs/0025_B.png"),logo:require("../Logos/0025_Cuyahoga_BW.png"),logo1:require("../Logos/0025_DGE_BW.png")},
        {id:2,month:12,location:require("../Continents/0026_con.png"), name: require("../Glyphs/0026_B.png"),logo:require("../Logos/0026_DGE_BW.png"),logo1:require("../Logos/0026_LOVELAND_BW.png")},
        {id:3,month:24,location:require("../Continents/0027_con.png"), name: require("../Glyphs/0027_B.png"),logo:require("../Logos/0027_CITYPITTS_BW.png"),logo1:require("../Logos/0027_DGE_BW.png")},
        {id:4,month:36,location:require("../Continents/0053_con.png"), name: require("../Glyphs/0053_B.png"),logo:require("../Logos/0053_DESERTEC_BW.png"),logo1:require("../Logos/0053_DESERTEC_BW.png")},
        {id:5,month:24,location:require("../Continents/0084_con.png"), name: require("../Glyphs/0084_B.png"),logo:require("../Logos/0084_Dayton_BW.png"),logo1:require("../Logos/0084_MCLB_BW.png")},
    ];
    let u19 = [
        {id:0,month:18,location:require("../Continents/0024_con.png"), name: require("../Glyphs/0024_B.png"),logo:require("../Logos/0024_DGE_BW.png"),logo1:require("../Logos/0024_Detroit__BW.png")},
        {id:1,month:18,location:require("../Continents/0025_con.png"), name: require("../Glyphs/0025_B.png"),logo:require("../Logos/0025_Cuyahoga_BW.png"),logo1:require("../Logos/0025_DGE_BW.png")},
        {id:2,month:12,location:require("../Continents/0026_con.png"), name: require("../Glyphs/0026_B.png"),logo:require("../Logos/0026_DGE_BW.png"),logo1:require("../Logos/0026_LOVELAND_BW.png")},
        {id:3,month:24,location:require("../Continents/0027_con.png"), name: require("../Glyphs/0027_B.png"),logo:require("../Logos/0027_CITYPITTS_BW.png"),logo1:require("../Logos/0027_DGE_BW.png")},
        {id:4,month:36,location:require("../Continents/0053_con.png"), name: require("../Glyphs/0053_B.png"),logo:require("../Logos/0053_DESERTEC_BW.png"),logo1:require("../Logos/0053_DESERTEC_BW.png")},
        {id:5,month:24,location:require("../Continents/0084_con.png"), name: require("../Glyphs/0084_B.png"),logo:require("../Logos/0084_Dayton_BW.png"),logo1:require("../Logos/0084_MCLB_BW.png")},
    ];
    let u20 = [
        {id:0,month:12,location:require("../Continents/0007_con.png"), name: require("../Glyphs/0007_B.png"),logo:require("../Logos/0007_SILENTU_BW.png"),logo1:require("../Logos/0007_Sroom_BW.png")},
        {id:1,month:12,location:require("../Continents/0008_con.png"), name: require("../Glyphs/0008_B.png"),logo:require("../Logos/0008_ringlok_BW.png"),logo1:require("../Logos/0008_Impulse theater_BW.png")},
        {id:2,month:1,location:require("../Continents/0012_con.png"), name: require("../Glyphs/0012_B.png"),logo:require("../Logos/0012_FNCSF_BW.png"),logo1:require("../Logos/0012_CSC_BW.png")},
        {id:3,month:36,location:require("../Continents/0044_con.png"), name: require("../Glyphs/0044_A.png"),logo:require("../Logos/0044_NIEED_BW.png")},
        {id:4,month:6,location:require("../Continents/0054_con.png"), name: require("../Glyphs/0054_A.png"),logo:require("../Logos/0054_SAS_BW.png"),logo1:require("../Logos/0054_CSU_BW.png")},
        {id:5,month:48,location:require("../Continents/0084_con.png"), name: require("../Glyphs/0082_B.png"),logo:require("../Logos/0082_MCLB_BW.png"),logo1:require("../Logos/0082_Dayton_BW.png")},
    ];
    let u21 = [
        {id:0,month:12,location:require("../Continents/0032_con.png"), name: require("../Glyphs/0032_B.png"),logo:require("../Logos/0032_GHC_BW.png"),logo1:require("../Logos/0032_GHC_BW.png")},
        {id:1,month:12,location:require("../Continents/0033_con.png"), name: require("../Glyphs/0033_B.png"),logo:require("../Logos/0033_Atlascorp_BW.png"),logo1:require("../Logos/0033_GHC_BW.png")},
        {id:2,month:12,location:require("../Continents/0034_con.png"), name: require("../Glyphs/0034_B.png"),logo:require("../Logos/0034_Atlascorp_BW.png"),logo1:require("../Logos/0034_GHC_BW.png")},
        {id:3,month:12,location:require("../Continents/0035_con.png"), name: require("../Glyphs/0035_B.png"),logo:require("../Logos/0035_AMS_BW.png"),logo1:require("../Logos/0035_Atlascorp_BW.png")},
        {id:4,month:12,location:require("../Continents/0036_con.png"), name: require("../Glyphs/0036_B.png"),logo:require("../Logos/0036_Atlascorp_BW.png"),logo1:require("../Logos/0036_GHC_BW.png")},
        {id:5,month:24,location:require("../Continents/0083_con.png"), name: require("../Glyphs/0083_B.png"),logo:require("../Logos/0083_Dayton_BW.png"),logo1:require("../Logos/0083_MCLB_BW.png")},
    ];
    let u22 =[
        {id:0,month:6,location:require("../Continents/0090_con.png"), name: require("../Glyphs/0090_B.png"),logo:require("../Logos/0090_CSU_BW.png"),logo1:require("../Logos/0090_SAS_BW.png")},
        {id:1,month:12,location:require("../Continents/0096_con.png"), name: require("../Glyphs/0096_A.png"),logo:require("../Logos/0096_ALASKAMCC_BW.png")},
    ];


    let matches = [];
    switch (this.state.user) {
        case 0:
            return (matches = this.renderMatch.bind(this)(u0));
        case 1:
            return (matches = this.renderMatch.bind(this)(u1));
        case 2:
            return (matches = this.renderMatch.bind(this)(u2));
        case 3:
            return (matches = this.renderMatch.bind(this)(u3));
        case 4:
            return (matches = this.renderMatch.bind(this)(u4));
        case 5:
            return (matches = this.renderMatch.bind(this)(u5));
        case 6:
            return (matches = this.renderMatch.bind(this)(u6));
        case 7:
            return (matches = this.renderMatch.bind(this)(u7));
        case 8:
            return (matches = this.renderMatch.bind(this)(u8));
        case 9:
            return (matches = this.renderMatch.bind(this)(u9));
        case 10:
            return (matches = this.renderMatch.bind(this)(u10));
        case 11:
            return (matches = this.renderMatch.bind(this)(u11));
        case 12:
            return (matches = this.renderMatch.bind(this)(u12));
        case 13:
            return (matches = this.renderMatch.bind(this)(u13));
        case 14:
            return (matches = this.renderMatch.bind(this)(u14));
        case 15:
            return (matches = this.renderMatch.bind(this)(u15));
        case 16:
            return (matches = this.renderMatch.bind(this)(u16));
        case 17:
            return (matches = this.renderMatch.bind(this)(u17));
        case 18:
            return (matches = this.renderMatch.bind(this)(u18));
        case 19:
            return (matches = this.renderMatch.bind(this)(u19));
        case 20:
            return (matches = this.renderMatch.bind(this)(u20));
        case 21:
            return (matches = this.renderMatch.bind(this)(u21));
        case 22:
            return (matches = this.renderMatch.bind(this)(u22));
        default:
            return(matches = this.renderMatch.bind(this)(u0))
    }
}

const secondaryUsers = [
    {
        move: 90,
        z: 0,
        month: 24,
        id: 12,
        location: require("../assets/continents/0075_con.png").default,
        glyph: require("../assets/glyphs/0075_C.png").default.default,
        logo: require("../assets/logos/0075_WFC_BW.png").default
    },
    {
        z: 0,
        month: 12,
        id: 13,
        location: require("../assets/continents/0077_con.png").default,
        glyph: require("../assets/glyphs/0077_B.png").default.default,
        logo: require("../assets/logos/0077_Jerash_BW.png").default
    },
    {
        z: 0,
        month: 12,
        id: 14,
        location: require("../assets/continents/0078_con.png").default,
        glyph: require("../assets/glyphs/0078_B.png").default.default,
        logo: require("../assets/logos/0078_FAO_BW.png").default
    },
    {
        z: 1,
        month: 36,
        id: 15,
        location: require("../assets/continents/0079_con.png").default,
        glyph: require("../assets/glyphs/0079_A.png").default.default,
        logo: require("../assets/logos/0079_DamascusU_BW.png").default
    },
    {
        z: 1,
        month: 24,
        id: 16,
        location: require("../assets/continents/0080_con.png").default,
        glyph: require("../assets/glyphs/0080_A.png").default.default,
        logo: require("../assets/logos/0080_ECA_BW.png").default
    },
    {
        z: 0,
        month: 24,
        id: 17,
        location: require("../assets/continents/0081_con.png").default,
        glyph: require("../assets/glyphs/0081_B.png").default.default,
        logo: require("../assets/logos/0081_WWBG_BW.png").default
    },
    {
        z: 1,
        month: 18,
        id: 18,
        location: require("../assets/continents/0085_con.png").default,
        glyph: require("../assets/glyphs/0085_A.png").default.default,
        logo: require("../assets/logos/0085_BHRRC_BW.png").default,
        logo1: require("../assets/logos/0085_JCCA_BW.png").default
    },
    {
        z: 0,
        month: 18,
        id: 19,
        location: require("../assets/continents/0086_con.png").default,
        glyph: require("../assets/glyphs/0086_B.png").default.default,
        logo: require("../assets/logos/0086_BIRZEIT_BW.png").default,
        logo1: require("../assets/logos/0086_IYF_BW.png").default
    },
    {
        z: 0,
        month: 6,
        id: 20,
        location: require("../assets/continents/0088_con.png").default,
        glyph: require("../assets/glyphs/0088_B.png").default.default,
        logo: require("../assets/logos/0088_ESL_BW.png").default,
        logo1: require("../assets/logos/0088_icee_BW.png").default
    },
    {
        z: 1,
        month: 6,
        id: 21,
        location: require("../assets/continents/0089_con.png").default,
        glyph: require("../assets/glyphs/0089_A.png").default.default,
        logo: require("../assets/logos/0089_DOCTORSACADEMY_BW.png").default
    },
    {
        z: 1,
        month: 6,
        id: 22,
        location: require("../assets/continents/0091_con.png").default,
        glyph: require("../assets/glyphs/0091_A.png").default.default,
        logo: require("../assets/logos/0091_CS_BW.png").default,
        logo1: require("../assets/logos/0091_LMA_BW.png").default
    },
];

const createUsers = (usersDict) => {
    let users = []
    usersDict.forEach((user => {
        users.push(
            <SnapItem margin={{left: '23px', right: '23px'}} width="55%" height="100%" snapAlign="center">
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

    const goToTopUser = useScroll({ref: snapList});
    const goToBottomUser = useScroll({ref: snapList1});

    React.useEffect(() => {
        // scroll instantly on component did mount
        goToTopUser(2, {animationEnabled: false});
        goToBottomUser(2, {animationEnabled: false});
    }, []);

let usersTop = createUsers(mainUsers);
let usersBottom = createUsers(mainUsers).reverse();

return (
    <MainContainer>
        <IphoneFrame/>
        <IphoneScreen>
            <div style={{zIndex:4,position:'fixed',marginTop:100}}>
                <SnapList ref={snapList} direction="horizontal"
                          width='308px' height='250px'>
                    {usersTop}
                </SnapList>
            </div>
            <div style={{zIndex:3,position:'fixed',marginTop:210}}>
            <SnapList ref={snapList1} direction="horizontal"
                      width='308px' height='250px'>
                {usersBottom}
            </SnapList>
            </div>
        </IphoneScreen>
    </MainContainer>
)
}

export default Matching;

