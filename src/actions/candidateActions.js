/**
 * Created by hien.phanthe on 2/24/17.
 */
import * as types from './actionTypes';

import OBService from '../network/OBService'


export function logout() {
    return {
        type: types.GO_LOGOUT,
    };
}

export function getAllCandidateSuccess(candidates) {
    return  {
        type : types.GET_ALL_CANDIDATES_SUCCESS,
        candidates
    }
};

export function getAllCandidateError(message) {
    return  {
        type : types.GET_ALL_CANDIDATES_ERROR,
        message: message
    }
};

export function getCandidateDetailSuccess(candidate) {
    return {
        type: types.GET_CANDIDATE_DETAIL,
        candidate
    }
}

export function getCandidateDetailError(candidate) {
    return {
        type: types.GET_ALL_CANDIDATES_ERROR,
        candidate
    }
}

export function createCandidateSuccess(candidate) {
    return {
        type: types.CREATE_CANDIDATE_SUCCESS,
        candidate
    }
}

export function createCandidateError(candidate) {
    return {
        type: types.CREATE_CANDIDATE_ERROR,
        candidate
    }
}
export function updateCandidateSuccess(candidate) {
    return {
        type: types.Update_CANDIDATE_SUCCESS,
        candidate
    }
}

export function updateCandidateError(candidate) {
    return {
        type: types.Update_CANDIDATE_ERROR,
        candidate
    }
}

export function archiveCandidateSuccess(candidate) {
    return {
        type: types.ARCHIVE_CANDIDATE_SUCCESS,
        candidate
    }
}

export function archiveCandidateError(candidate) {
    return {
        type: types.ARCHIVE_CANDIDATE_ERROR,
        candidate
    }
}

export function updateCandidateAsync(candidate) {
    return (dispatch, getState) => {
        return OBService.updateCandidate(candidate).then( json => {
                console.log('Updated candidate', json);
                dispatch(updateCandidateSuccess(json));
            }
        ).catch(error => {
            console.log('Error when update candidate', error)
            dispatch(updateCandidateError({ ...error , message : 'error when login' }));
        });
    };
}


