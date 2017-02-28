/**
 * Created by hien.phanthe on 2/27/17.
 */

//1. Action Types
const REQUEST = 'Request';
const SUCCESS = 'Success';
const FAILED = 'Failed';

//2. Action Creators
export function loginRequest() {
    return {
      type: REQUEST
    };
}

export function loginRequestSuccess(json) {
    return {
        type: SUCCESS,
        payload: json
    };
}

export function loginRequestFailed(error) {
    return {
        type: FAILED,
        error: error.message
    };
}

//3. Reducers
const INITIAL_STATE = {
    error: '',
    loading: false

};

export function SignInReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            };

        case SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                userInfo: action.payload
            };

        case FAILED:
            return {
                ...state,
                loading: false,
                error: 'there is an error'
            };

        default:
            return state;

    }
};



