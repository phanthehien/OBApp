/**
 * Created by hien.phanthe on 3/8/17.
 */

import * as actionTypes from '../actions/actionTypes'

export function CandidateReducer(state = { candidates : [] }, action) {
    switch (action.type){
        case actionTypes.GET_ALL_CANDIDATES_SUCCESS:
            console.log('Got all candidate', action.candidates);
            return {
                ...state,
                candidates : action.candidates
            };
            break;

        case actionTypes.GET_CANDIDATE_DETAIL:
            console.log('Got candidate detail', action.candidate);
            return {
                ...state,
                candidate : action.candidate
            };

        case actionTypes.Update_CANDIDATE_SUCCESS:
            console.log('update candidate detail', action.candidate);
            return {
                ...state,
                candidate : action.candidate
            };

        case actionTypes.Update_CANDIDATE_ERROR:
            console.log('update candidate error', action.candidate);
            return {
                ...state,
                candidate : action.candidate
            };

        case actionTypes.CREATE_CANDIDATE_SUCCESS:
            console.log('Create candidate detail', action.candidate);
            return {
                ...state,
                candidate : action.candidate
            };

        case actionTypes.CREATE_CANDIDATE_ERROR:
            console.log('create candidate detail', action.candidate);
            return {
                ...state,
                candidate : action.candidate
            };

        case actionTypes.ARCHIVE_CANDIDATE_SUCCESS:
            console.log('Archive candidate detail', action.candidate);
            return {
                ...state,
                candidate : action.candidate
            };

        case actionTypes.ARCHIVE_CANDIDATE_SUCCESS:
            console.log('Archive candidate detail', action.candidate);
            return {
                ...state,
                candidate : action.candidate
            };

        default:
            return state;
    }
}