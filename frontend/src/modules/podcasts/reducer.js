import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const initialState = {
    getPodcasts: null,
    getFiltro: null,
    getPodcastsDetails: null
};

const getPodcasts = (state = initialState.getPodcasts, action) => {
    switch (action.type) {

        case actionTypes.GET_PODCASTS_COMPLETED:
            return action.getPodcasts;

        default:
            return state;
    }
}

const getFiltro = (state = initialState.getFiltro, action) => {
    switch (action.type) {

        case actionTypes.CHANGE_FILTER:
            return action.getFiltro;

        default:
            return state;
    }
}

const getPodcastsDetails = (state = initialState.getPodcastsDetails, action) => {
    switch (action.type) {

        case actionTypes.GET_PODCASTS_DETAILS_COMPLETED:
            return action.getPodcastsDetails;

        default:
            return state;
    }
}

const reducer = combineReducers({
    getPodcasts,
    getFiltro,
    getPodcastsDetails
});

export default reducer;