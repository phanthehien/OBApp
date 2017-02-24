/**
 * Created by hien.phanthe on 2/24/17.
 */

import * as types from '../actions/actionTypes'
const initialState = {

};

export default function goSignUp(state = initialState, action={}) {
    switch(action.type) {
        case types.GO_SIGNUP:
            return {
                ...state,
            };
        default:
            return state;
    };
};