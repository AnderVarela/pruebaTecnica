import React, {useEffect} from 'react';
import Podcast from "./Podcast";
import {useDispatch, useSelector} from "react-redux";
import * as selectors from '../selectors';
import * as actions from "../actions";
import {useNavigate} from "react-router-dom";
import ComponentWithSpinner from "../../common/components/Spinner";

function PodcastList() {
    const filtro = useSelector(selectors.getFiltro);
    const getPodcasts = useSelector(selectors.getAllPodcasts);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // USE EFFECT--------------------------------------------------------------

    useEffect(() => { // obtiene la lista de podcast --------------------
        const fetchData = async () => {
            await dispatch(actions.getPodcasts(filtro));
        };

        fetchData();
    }, [filtro]);

    // FUNCIÓN AUXILIAR PARA NAVEGAR A LA NUEVA DIRECCIÓN ---------------------
    const handleClick = (id) => {
        navigate(`/podcast/${id}`);
    }

    // ESTILOS ----------------------------------------------------------------
    const listStyles = {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 24,
        display: 'inline-flex',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%'
    };

    const elementStyles = {
        marginBottom: 50
    };


    // RETURN -----------------------------------------------------------------
    if (getPodcasts == null) {
        return <ComponentWithSpinner/>
    } else {
        return (
                <ul style={listStyles}>
                    {getPodcasts.map((podcast, index) => (
                        <li key={index} style={elementStyles}
                            onClick={() => handleClick(podcast.id.attributes['im:id'])}>
                            <Podcast
                                name={podcast['im:name'].label}
                                author={podcast['im:artist'].label}
                                image={podcast['im:image'][0].label}
                            />
                        </li>
                    ))}
                </ul>
        )
    }
}

export default PodcastList;