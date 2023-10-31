import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import * as selectors from '../selectors';
import * as actions from "../actions";
import {useNavigate, useParams} from "react-router-dom";
import Episodes from "./Episodes";


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
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Episodes episodes={episodes.resultCount - 1}/>
                </div>
                <div
                    style={{
                        background: 'white',
                        minHeight: 'auto',
                        minWidth: 'auto',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: 15,
                        alignItems: 'center',
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 18,
                        paddingBottom: 18,

                    }}>
                    <ul style={{listStyleType: 'none'}}>
                        {episodes.results
                            .filter((episode, index) => index !== 0) // Quita el primer elemento
                            .map((episode, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleClick(episode.collectionId, episode.trackId)}
                                >
                                    <div
                                        style={{
                                            width: 620,
                                            background: 'white',
                                            borderTop: '1px black solid',
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            gap: 4,
                                            display: 'inline-flex',
                                            minHeight: 'auto'
                                        }}
                                    >
                                        <div
                                            style={{
                                                flex: '1 1 0',
                                                padding: 10,
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                gap: 10,
                                                display: 'flex'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    color: 'black',
                                                    fontSize: 14,
                                                    fontFamily: 'Balsamiq Sans',
                                                    fontWeight: '400',
                                                    wordWrap: 'break-word'
                                                }}
                                            >
                                                {episode.trackName}
                                            </div>
                                        </div>
                                        <div style={{justifyContent: 'flex-end', alignItems: 'center', display: 'flex'}}>
                                            <div style={{
                                                padding: 10,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: 10,
                                                display: 'flex'
                                            }}>
                                                <div style={{
                                                    color: 'black',
                                                    fontSize: 14,
                                                    fontFamily: 'Balsamiq Sans',
                                                    fontWeight: '400',
                                                    wordWrap: 'break-word'
                                                }}>{episode.releaseDate}</div>
                                            </div>
                                            <div style={{
                                                padding: 10,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: 10,
                                                display: 'flex'
                                            }}>
                                                <div style={{
                                                    color: 'black',
                                                    fontSize: 14,
                                                    fontFamily: 'Balsamiq Sans',
                                                    fontWeight: '400',
                                                    wordWrap: 'break-word'
                                                }}>{MilisegundosAMinutos(episode.trackTimeMillis)}</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>

        );

    }
}

export default EpisodesList;

