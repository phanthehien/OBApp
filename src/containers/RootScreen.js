/**
 * Created by hien.phanthe on 2/24/17.
 */

import React, { Component } from 'react';
import {
    Text,
	Navigator
} from 'react-native'

import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'


export default class RootScreen extends Component {

	renderScene(route, navigator) {
		switch(route.index) {
			case 1:
                return <SignUpScreen navigator={ navigator }  />
				break;

			default:
                return <SignInScreen navigator={ navigator } />
                break;
		}

    }

	render() {
		return (
            <Navigator
                initialRoute={{ index: 0 }}
                renderScene={ this.renderScene }
            />
		);
	}
}