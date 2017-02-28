/**
 * Created by hien.phanthe on 2/23/17.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
// import * as signInActions from '../actions/signInActions'
import CircleImageView from '../components/CircleImageView'
import CustomTextInput from '../components/CustomTextInput'
import {Actions} from 'react-native-router-flux'
import {login} from '../redux/SignInLogic'

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

    wrapper: {
        flex: 1,
    },

    rightWrap: {
        flexDirection: "row",
        height: 40,
        alignSelf: 'flex-end',
        marginHorizontal: 20,
    },

    buttonFullWidth: {
        marginTop: 30,
        backgroundColor: '#ff3366',
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },

    bottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        height: 40,
    },

    textColor: {
        color: 'white'
    },
    bigSize: {
        fontWeight: 'bold'
    }
});

class SignInScreen extends Component {

    constructor() {
        super();
        this.state = {
            username: 'hienphan',
            password: '123',
            userInfo: null
        };

        this.showMessage = this.showMessage.bind(this);
    }

    updateUsername = (text) => {
        this.setState({username: text});
        //this.state.username = text;
    };

    updatePassword = (text) => {
        this.setState({password: text});
    };

    navigateSignUp = () => {
        Actions.signUp();
        //this.props.navigator.push({ index : 1 });
    };

    showMessage() {
        this.props.loginScreen({username: this.state.username, password: this.state.password});
    };


    render() {
        const {actions} = this.props;

        if (this.props.userInfo) {
            // Actions.signUp();

        }

        return (
            <Image style={ [styles.container, styles.image] } source={require('images/bg_signin.png')}>
                <ScrollView bounces={false}>

                    <View
                        style={[styles.halfHeight, { backgroundColor : 'transparent',  justifyContent: 'center', alignItems: 'center',}] }>
                        <CircleImageView />
                    </View>


                    <View style={ [styles.quarterHeight, { backgroundColor : 'transparent'}] }>
                        <View style={styles.wrapper}>
                            <CustomTextInput onChangeText={ this.updateUsername}
                                             value={ this.state.username }
                                             imageIcon={icon_username}
                                             placeholder="Username"
                                             placeholderTextColor="#FFF"/>
                            <CustomTextInput onChangeText={ this.updatePassword }
                                             value={ this.state.password }
                                             imageIcon={icon_password}
                                             secureTextEntry={true}
                                             placeholder="Password"
                                             placeholderTextColor="#FFF"/>

                            <View style={styles.rightWrap}>
                                <TouchableHighlight>
                                    <Text style={ [styles.textColor, styles.bigSize ]}>Forgot Password</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <View style={ [styles.quarterHeight, { backgroundColor : 'transparent' } ] }>
                        <View style={styles.buttonFullWidth}>
                            <TouchableOpacity onPress={ this.showMessage }>
                                <Text style={ [styles.textColor, styles.bigSize ] }>Sign In</Text>
                            </TouchableOpacity>

                        </View>

                        <Text style={ [styles.textColor, styles.bigSize ] }> {this.props.userInfo ? "Logged in success." : this.props.message }</Text>

                        <View style={styles.bottom}>
                            <Text style={ styles.textColor }>Don't have an account? </Text>
                                <TouchableHighlight onPress={ this.navigateSignUp }>
                                    <Text style={ [ styles.textColor, styles.bigSize ]}>Sign Up</Text>
                                </TouchableHighlight>
                        </View>

                    </View>
                </ScrollView>
            </Image>
        )
    }
}
;

export default connect(state => ({
    message: state.SignInReducer.error,
    userInfo: state.SignInReducer.userInfo
}), (dispatch) => ({
    loginScreen: (userCredentials) => dispatch(login(userCredentials))
}))(SignInScreen);
