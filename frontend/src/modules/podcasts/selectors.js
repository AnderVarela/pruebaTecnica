const getModuleState = state => state.podcasts;

export const getAllPodcasts = state =>
    getModuleState(state).getPodcasts;
