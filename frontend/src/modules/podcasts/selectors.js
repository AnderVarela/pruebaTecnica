const getModuleState = state => state.podcasts;

export const getAllPodcasts = state =>
    getModuleState(state).getPodcasts;

export const getFiltro = state =>
    getModuleState(state).getFiltro;

