
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

import CircleImageView from './components/CircleImageView'
const win = Dimensions.get('window');

const icon_username = require('src/assets/images/user_name.png');
const icon_password = require('src/assets/images/password.png');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    halfHeight: {
        flex: .5,
        backgroundColor: '#FF3366'
    },
    quarterHeight: {
        flex: .25,
        backgroundColor: '#000'
    },
    image: {
        width: win.width,
        height: win.height,
    },
    icon: {
        width: 20,
        height: 20
    },
    wrapper: {
        flex: 1
    },
    iconWrap : {
        paddingHorizontal: 5,
        paddingLeft: 20,
        alignItems: "center",
        justifyContent: "center",
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
        backgroundColor: 'red',
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
    }
});


export default class LoginScreen extends Component {
    render() {
        return (
            <Image  style= { [styles.container, styles.image] } source={require('./assets/images/bg_signin.png')}>
                <View  style={[styles.halfHeight, { backgroundColor : 'transparent',  justifyContent: 'center', alignItems: 'center',}] }>
                    <CircleImageView />
                </View>


                <View style={ [styles.quarterHeight, { backgroundColor : 'transparent'}] }>
                    <View style={styles.wrapper}>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={icon_username} style={styles.icon} resizeMode="contain" />
                            </View>
                            <TextInput
                                placeholder="Username"
                                underlineColorAndroid="transparent"
                                placeholderTextColor="#FFF"
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.inputWrap}>
                            <View style={styles.iconWrap}>
                                <Image source={icon_password} style={styles.icon} resizeMode="contain" />
                            </View>
                            <TextInput
                                placeholderTextColor="#FFF"
                                placeholder="Password"
                                underlineColorAndroid="transparent"
                                style={ [styles.input]}
                                secureTextEntry
                            />
                        </View>
                        <View style={styles.rightWrap}>
                            <TouchableHighlight>
                                <Text style={ [styles.textColor, styles.bigSize ]}>Forgot Password</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                    <View style={ [styles.quarterHeight, { backgroundColor : 'transparent' } ] }>
                        <View style={styles.buttonFullWidth}>
                            <TouchableHighlight>
                                <Text style={ [styles.textColor, styles.bigSize ] }>Sign In</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.bottom}>
                            <Text style={ styles.textColor }>Don't have an account? </Text>
                                <TouchableHighlight>
                                    <Text  style={ [ styles.textColor, styles.bigSize ]}>Sign Up</Text>
                                </TouchableHighlight>
                            </Text>
                        </View>

                    </View>
            </Image>
        )
    }
}