import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import * as selectors from '../selectors';
import * as actions from "../actions";
import {useNavigate, useParams} from "react-router-dom";


function EpisodesList() {
    const episodes = useSelector(selectors.getEpisodes)
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(actions.getEpisodes(id));
        };

        fetchData();
    }, [id]);

    const handleClick = (idd, episodeId) => {
        navigate(`/podcast/${idd}/episode/${episodeId}`);
    }

    const MilisegundosAMinutos = (milisegundos) => {
        if (milisegundos == null)
            return "00:00"
        // Calcula los minutos y los segundos
        const minutos = Math.floor(milisegundos / 60000); // 1 minuto = 60000 ms
        const segundos = ((milisegundos % 60000) / 1000).toFixed(0); // Resto convertido a segundos

        // Formatea el resultado con 2 dígitos para los segundos (si es necesario)
        const segundosFormateados = (segundos < 10) ? '0' + segundos : segundos;

        // Devuelve el resultado en el formato 'minutos:segundos'
        return `${minutos}:${segundosFormateados}`;
    }

    if (!episodes || !episodes.results) {
        return <div>Cargando...</div>;
    } else {
        return (
            <div>
                <ul>
                    {episodes.results
                        .filter((episode, index) => index !== 0) // Quita el primer elemento
                        .map((episode, index) => (
                            <li key={index}
                                onClick={() => handleClick(episode.collectionId, episode.trackId)}>
                                {index} => {episode.trackName} => {episode.releaseDate} => {MilisegundosAMinutos(episode.trackTimeMillis)}
                            </li>
                        ))}
                </ul>
            </div>
        );

    }
}

export default EpisodesList;