/**
 * Created by hien.phanthe on 2/27/17.
 */

import * as actions from './SignInReducer'

import {Actions} from 'react-native-router-flux'

//it will always return action creators (just the plain object)

//4: Load Data
const userInfo = {
    training_id : 1,
    full_name: 'Phan The Hien',
    email: 'phanthehien@gmail.com',
    birthday : '1986-01-20',
    token: '1231jfksfnmcnsoijejrksl34324'
};


export function login(userCredentials) {
    if (userCredentials.username === "hienphan" && userCredentials.password === "123") {
        Actions.home();
        return actions.loginRequestSuccess(userInfo);
    } else {
        return actions.loginRequestFailed({ message: "There is no user" });
    }
}
