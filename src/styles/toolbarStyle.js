/**
 * Created by hien.phanthe on 2/28/17.
 */

import { StyleSheet } from 'react-native';

var toolbarStyle = StyleSheet.create({
    toolbar:{
        backgroundColor: '#ff3366',
        height: 60,
        paddingTop: 20,
        // paddingBottom:10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        flex: 0.2,
        minWidth: 50,
        paddingLeft: 10,
        paddingRight: 10,
        color:'#fff',
        textAlign:'center',
        // height: 60,
        lineHeight : 40,
    },
    toolbarTitle:{
        flex: 0.6,
        color:'#fff',
        flexDirection: 'row',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    }
});

export default toolbarStyle;
