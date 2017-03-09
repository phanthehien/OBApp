/**
 * Created by hien.phanthe on 2/28/17.
 */

import * as actionTypes from '../actions/actionTypes'
import * as candidateActions from '../actions/candidateActions'

import OBService from '../network/OBService'

export function HomeReducer(state = {  }, action) {
    switch (action.type){
        case actionTypes.GO_LOGOUT:
            return {
                ...state,
            };
            break;

        case actionTypes.STORE_USER :
            return {
                ...state,
                userInfo : action.userInfo
            };
        default:
            return state;
    }
}

export function loadHomeScreenAsync() {
    return (dispatch, getState) => {
        return OBService.getAllCandidates().then(candidates => {
                console.log('Loaded candidates', candidates)
                dispatch(candidateActions.getAllCandidateSuccess(candidates));
            }).catch(error => {
                console.log('Can not load candidates', error)
                dispatch(candidateActions.getAllCandidateError(error));
            });
    };
};
