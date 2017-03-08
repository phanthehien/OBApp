/**
 * Created by hien.phanthe on 2/24/17.
 */
import * as types from './actionTypes';

export function logout() {
    return {
        type: types.GO_LOGOUT,
    };
}

export function storeUser(userInfo) {
    return  {
        type : types.STORE_USER,
        userInfo: userInfo
    }
};