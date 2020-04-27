import * as ActionTypes from './ActionTypes';
 
export const comments = (state = {errMess: null, comments: []{}, action) => {
    swith (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case {...state, errMess: action.payload;}

        default:
            return state;
    }
};