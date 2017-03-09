/**
 * Created by hien.phanthe on 2/27/17.
 */

import * as signInActions from './SignInReducer'


import {Actions} from 'react-native-router-flux'
import OBService from '../network/OBService';


//it will always return action creators (just the plain object)

//4: Load Data
const userInfo = {
    training_id : 1,
    full_name: 'Phan The Hien',
    email: 'phanthehien@gmail.com',
    birthday : '1986-01-20',
    token: '1231jfksfnmcnsoijejrksl34324'
};

export function signInAsync(usercredential) {
    return (dispatch, getState) => {
        return OBService.signin(usercredential).then( json => {
            console.log('User logged in', json);
            dispatch(signInActions.loginRequestSuccess(json));
            Actions.home();
        }
            ).catch(error => {
            console.log('Error when signIn', error)
            dispatch(signInActions.loginRequestFailed({ ...error , message : 'error when login' }));
        });
    };
}


export function login(userCredentials) {
    if (userCredentials.username === "hienphan" && userCredentials.password === "123") {
        Actions.home();
        return signInActions.loginRequestSuccess(userInfo);
    } else {
        return signInActions.loginRequestFailed({ message: "There is no user" });
    }
}

export function logout() {
    return signInActions.logout();
}
