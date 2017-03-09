/**
 * Created by hien.phanthe on 2/27/17.
 */


import { combineReducers } from 'redux'
import { SignInReducer } from './SignInReducer'
import { HomeReducer } from './HomeReducer'
import { CandidateReducer } from './CandidateReducer'

export function TestMessageReducer(state, action) {
    return {
        ...state,
        loading: false,
        error: 'sdfd sdf sdf',
        payload: action.payload
    };
}
const rootReducer = combineReducers({
    SignInReducer,
    TestMessageReducer,
    HomeReducer,
    CandidateReducer
});

export default rootReducer;
