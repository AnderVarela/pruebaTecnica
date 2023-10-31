import * as actionTypes from './actionTypes';
import backend from '../../backend';
import {GET_EPISODES_COMPLETED} from "./actionTypes";

const getPodcastsCompleted = getPodcasts => ({
    type: actionTypes.GET_PODCASTS_COMPLETED,
    getPodcasts
});

export const getPodcasts = (text) => async (dispatch) => {

    dispatch(getPodcastsCompleted(await backend.popularPodcasts.filtrarPodcasts(text)));

}

const changeFilterCompleted = getFiltro => ({
    type: actionTypes.CHANGE_FILTER,
    getFiltro
});

export const changeFilter = (filtro) => dispatch => dispatch(changeFilterCompleted(filtro));

const getPodcastsDetailsCompleted = getPodcastsDetails => ({
    type: actionTypes.GET_PODCASTS_DETAILS_COMPLETED,
    getPodcastsDetails
});

export const getPodcastsDetails = (id) => async (dispatch) => {

    dispatch(getPodcastsDetailsCompleted(await backend.popularPodcasts.getPodcastData(id)));

}

const getEpisodesCompleted = getEpisodes => ({
    type: actionTypes.GET_EPISODES_COMPLETED,
    getEpisodes
});

export const getEpisodes = (id) => async (dispatch) => {

    dispatch(getEpisodesCompleted(await backend.popularPodcasts.getPodcastEpisodes(id)));

}
