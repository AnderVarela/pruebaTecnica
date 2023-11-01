import PodcastDetails from "../../podcasts/components/PodcastDetails";
import {useDispatch, useSelector} from "react-redux";
import * as selectors from "../../podcasts/selectors";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as actions from "../../podcasts/actions";
import EpisodeReproductor from "../../podcasts/components/EpisodeReproductor";
import ComponentWithSpinner from "../../common/components/Spinner";

const DetallesDeUnEpisodio = () => {

    const [episode, setEpisode] = useState(null);
    const episodes = useSelector(selectors.getEpisodes)
    const data = useSelector(selectors.getPodcastDetails); //se necesita para saber el autor del podcast.
    const {podcastId, episodeId} = useParams();
    const dispatch = useDispatch();


    // USE EFFECT--------------------------------------------------------------
    useEffect(() => { // obtiene todos los episodios
        const fetchData = async () => {
            await dispatch(actions.getPodcastsDetails(podcastId));
            await dispatch(actions.getEpisodes(podcastId));
        };
        fetchData();

    }, [podcastId]);

    useEffect(() => { // obtiene el episodio específico
        if (episodes != null) {
            setEpisode(encontrarEpisodioPorId(episodes, episodeId));
        }
    }, [episodes, episodeId])


    // FUNCIONES AUXILIARES ---------------------------------------------------
    function encontrarEpisodioPorId(episodes, episodeId) {
        if (episodes != null && episodes.results && episodeId != null) {
            for (let i = 0; i < episodes.results.length; i++) {
                if (episodes.results[i].trackId == episodeId.toString()) {
                    return episodes.results[i];
                }
            }
            return null;
        } else {
            return null;
        }
    }

    // ESTILOS ----------------------------------------------------------------
    const containerStyle = {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 40,
        display: 'inline-flex'
    };


    // RETURN -----------------------------------------------------------------
    if (episode != null && data != null && data.results[0].artistName) {
        return (
            <div className="Detallesdeunepisodio" style={containerStyle}>

                <PodcastDetails imagen={episode.artworkUrl600} artista={data.results[0].artistName}
                                nombre={episode.collectionName} podcastId={episode.collectionId}/>

                <EpisodeReproductor trackName={episode.trackName} description={episode.description}
                                    episodeUrl={episode.episodeUrl}/>
            </div>
        );
    } else {
        return <ComponentWithSpinner/>
    }
};

export default DetallesDeUnEpisodio;