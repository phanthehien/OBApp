/**
 * Created by hien.phanthe on 2/28/17.
 */

import { StyleSheet } from 'react-native';

var homeStyle = StyleSheet.create({
    messageBox:{
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'grey',
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:10
    },
    messageBoxTitleText:{
        color:'green',
        textAlign:'right',
        fontSize:20,
        paddingRight: 20
    },
    messageBoxBodyText:{
        color:'#fff',
        fontSize:16
    },
    style_column_view : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 5,
    },
    style_row_view: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,

    },
    style_text: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },
});

export default homeStyle;
