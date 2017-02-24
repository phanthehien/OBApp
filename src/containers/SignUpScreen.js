/**
 * Created by hien.phanthe on 2/23/17.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    TouchableHighlight
} from 'react-native';

import CircleImageView from '../components/CircleImageView'
import CustomTextInput from '../components/CustomTextInput'
import { Actions } from 'react-native-router-flux'

const win = Dimensions.get('window');

const icon_username = require('src/assets/images/user_name.png');
const icon_password = require('src/assets/images/password.png');
const icon_email = require('src/assets/images/email.png');
const icon_birthday = require('src/assets/images/birthday.png');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    halfHeight: {
        flex: .5,
        backgroundColor: '#FF3366'
    },
    fifthHeight: {
        flex: .20,
        backgroundColor: '#000'
    },
    quarterHeight: {
        flex: .25,
        backgroundColor: '#000'
    },
    image: {
        width: win.width,
        height: win.height,
    },

    wrapper: {
        flex: 1,
    },
    iconWrap : {
        paddingHorizontal: 5,
        paddingLeft: 20,
        alignItems: "center",
        justifyContent: "center",
        width: 40
    },
    inputWrap: {
        flexDirection: "row",
        paddingHorizontal: 5,
        marginVertical: 10,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#CCC"
    },
    rightWrap:{
        flexDirection: "row",
        height: 40,
        alignSelf:'flex-end',
        marginHorizontal: 20,
    },
    input : {
        flex: 1,
    },
    buttonFullWidth : {
        marginTop: 30,
        backgroundColor: '#ff3366',
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },

    bottom : {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        height: 40,
    },

    textColor : {
        color: 'white'
    },
    bigSize : {
        fontWeight: 'bold'
    },

    titleSize : {
        marginLeft: 20,
        fontSize: 40,
        color: 'white'
    }
});


export default class SignInScreen extends Component {
    render() {
        return (
            <Image  style= { [styles.container, styles.image] } source={require('images/bg_signup.png')}>

                <TouchableHighlight onPress={ Actions.pop }>
                    <Text  style={ [ styles.textColor, styles.titleSize ]}> &lt; </Text>
                </TouchableHighlight>

                <View  style={[styles.fifthHeight, { backgroundColor : 'transparent',  justifyContent: 'center', alignItems: 'flex-start',}] }>
                    <Text style={ [styles.titleSize] }>Sign Up</Text>
                </View>


                <View style={ [styles.halfHeight, { backgroundColor : 'transparent'}] }>
                    <View style={styles.wrapper}>

                        <CustomTextInput imageIcon={icon_username} placeholder="Username" placeholderTextColor="#FFF" />
                        <CustomTextInput imageIcon={icon_email} placeholder="Email" placeholderTextColor="#FFF" />

                        <CustomTextInput imageIcon={icon_password}
                                         secureTextEntry = {true}
                                         placeholder="Password"
                                         placeholderTextColor="#FFF" />

                        <CustomTextInput imageIcon={icon_birthday} placeholder="Birthday" placeholderTextColor="#FFF" />

                    </View>
                </View>
                <View style={ [styles.quarterHeight, { backgroundColor : 'transparent' } ] }>
                    <View style={styles.buttonFullWidth}>
                        <TouchableHighlight>
                            <Text style={ [styles.textColor, styles.bigSize ] }>Join</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.bottom}>
                        <Text style={ styles.textColor } >Already have an account? </Text>
                            <TouchableHighlight onPress={ Actions.pop }>
                                <Text  style={ [ styles.textColor, styles.bigSize ]}>Sign In</Text>
                            </TouchableHighlight>
                    </View>

                </View>
            </Image>
        )
    }
}