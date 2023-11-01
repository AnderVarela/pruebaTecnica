import EpisodesList from "../../podcasts/components/EpisodesList";
import Episodes from "../../podcasts/components/Episodes";
import PodcastDetails from "../../podcasts/components/PodcastDetails";
import {useDispatch, useSelector} from "react-redux";
import * as selectors from "../../podcasts/selectors";
import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import * as actions from "../../podcasts/actions";
import ComponentWithSpinner from "../../common/components/Spinner";

const DetallesDeUnPodcast = () => {

    const data = useSelector(selectors.getPodcastDetails);
    const episodes = useSelector(selectors.getEpisodes)
    const {id} = useParams();
    const dispatch = useDispatch();

    // USE EFFECT--------------------------------------------------------------
    useEffect(() => { // obtiene el podcast y sus episodios
        const fetchData = async () => {
            await dispatch(actions.getPodcastsDetails(id));
            await dispatch(actions.getEpisodes(id));
        };
        fetchData();

    }, [id]);

    // ESTILOS ----------------------------------------------------------------
    const containerStyle = {
        width: '100%',
        height: '100%',
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 40,
        display: 'inline-flex'
    };

    const episodesListStyle = {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 16,
        display: 'inline-flex',
    };

    const boxShadowStyle = {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 8,
        width: '100%',
        height: '100%',
        borderRadius: 5
    };

    const innerDivStyle = {
        width: '100%',
        height: '100%',
        background: 'white',
        borderRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 4,
        display: 'inline-flex'
    };

    const titleDivStyle = {
        flex: '1 1 0',
        height: 37,
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        display: 'flex'
    };

    const infoDivStyle = {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'flex'
    };

    const durationStyle = {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    };

    const dateStyle = {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    };

    const titleStyle = {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    };

    const dateAndDurationStyle = {
        justifyContent: 'flex-end',
        alignItems: 'center',
        display: 'flex',
        gap: 32
    };

// RETURN -----------------------------------------------------------------
    if (data == null || !data.results) {
        return <ComponentWithSpinner/>
    } else {
        return (
            <div className="Detallesdeunpodcast" style={containerStyle}>
                <PodcastDetails
                    imagen={data.results[0].artworkUrl600}
                    nombre={data.results[0].collectionName}
                    artista={data.results[0].artistName}
                    descripción={data.results[0].shortDescription}
                />

                {(episodes != null && episodes.resultCount && episodes.results) ? (
                    <div className="NepisodesListepisodes" style={episodesListStyle}>
                        <Episodes episodes={episodes.resultCount - 1}/>

                        <div style={boxShadowStyle}>
                            <div style={innerDivStyle}>
                                <div style={titleDivStyle}>
                                    <div style={titleStyle}>Title</div>
                                </div>
                                <div style={dateAndDurationStyle}>
                                    <div style={infoDivStyle}>
                                        <div style={dateStyle}>Date</div>
                                    </div>
                                    <div style={infoDivStyle}>
                                        <div style={durationStyle}>Duration</div>
                                    </div>
                                </div>
                            </div>

                            <EpisodesList episodes={episodes.results.filter((episode, index) => index !== 0)}/>
                        </div>
                    </div>
                ) : <ComponentWithSpinner/>}
            </div>
        );
    }

};

export default DetallesDeUnPodcast;
