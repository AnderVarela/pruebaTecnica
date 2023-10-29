import * as actionTypes from './actionTypes';
import backend from '../../backend';

const getPodcastsCompleted = getPodcasts => ({
    type: actionTypes.GET_PODCASTS_COMPLETED,
    getPodcasts
});

export const getPodcasts = () => async (dispatch) => {

    dispatch(getPodcastsCompleted(await backend.popularPodcasts.obtenerOActualizarLista()));

}