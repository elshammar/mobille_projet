import React from "react";
import Constance, { PADDING } from '../../outils/constantes';
import { StyleSheet } from "react-native";

const Homestyle = StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal:PADDING.hozizontal,
        paddingVertical:PADDING.vertical,
    },
    
});



export default Homestyle;