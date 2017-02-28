/**
 * Created by hien.phanthe on 2/24/17.
 */

import React, { Component } from 'react';
import {
    Text,
} from 'react-native'

import {Scene, Router} from 'react-native-router-flux';

import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'
import HomeScreen from './HomeScreen'


export default class RootScreen extends Component {

	renderScene(route, navigator) {
		switch(route.index) {
			case 1:
                return <SignUpScree  />
				break;

			default:
                return <SignInScreen />
                break;
		}

    }

    configureScene(route, routeStack) {
		return Navigator.SceneConfigs.FloatFromBottom
	}

    
	render() {
		return (
		<Router >
			<Scene key="root" hideNavBar={true}>
				<Scene  intital={true} key="signIn" component={SignInScreen}/>
				<Scene  key="signUp" component={SignUpScreen}/>
				<Scene  key="home" component={HomeScreen}/>
			</Scene>
		</Router>


		);
	}
}