import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const initialState = {
    getPodcasts: null
};

const getPodcasts = (state = initialState.getPodcasts, action) => {
    switch (action.type) {

        case actionTypes.GET_PODCASTS_COMPLETED:
            return action.getPodcasts;

        default:
            return state;
    }
}

const reducer = combineReducers({
    getPodcasts
});

export default reducer;