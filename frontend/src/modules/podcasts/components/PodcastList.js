import React, {useState, useEffect} from 'react';
import Podcast from "./Podcast";
import {useDispatch, useSelector} from "react-redux";
import * as selectors from '../selectors';
import * as actions from "../actions";
import {useNavigate} from "react-router-dom";

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


    // RETURN -----------------------------------------------------------------
    if (getPodcasts == null) {
        return <div>Error de conexión</div>
    } else {
        return (
            <div>
                <ul style={listStyle}>
                    {getPodcasts.map((podcast, index) => (

                        <li key={index} style={listItemStyle}
                            onClick={() => handleClick(podcast.id.attributes['im:id'])}>
                            <Podcast name={podcast['im:name'].label} author={podcast['im:artist'].label}
                                     image={podcast['im:image'][0].label}/>
                        </li>
                    ))}
                </ul>
            </div>)
    }
}

export default PodcastList;


// ESTILOS --------------------------------------------------------------------
const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
};

const listItemStyle = {
    width: '200px',
    padding: '40px',
    margin: '10px',
};
