import {useDispatch, useSelector} from "react-redux";
import * as selectors from "../selectors";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as actions from "../actions";
import Episodes from "./Episodes";
import EpisodesList from "./EpisodesList";

const PodcastDetails = () => {

    const data = useSelector(selectors.getPodcastDetails);
    const episodes = useSelector(selectors.getEpisodes)
    const {id} = useParams();
    const dispatch = useDispatch();

    // USE EFFECT--------------------------------------------------------------
    useEffect(() => { // obtiene el podcast
        const fetchData = async () => {
            await dispatch(actions.getPodcastsDetails(id));
            await dispatch(actions.getEpisodes(id));
        };
        fetchData();

    }, [id]);


    // RETURN -----------------------------------------------------------------
    if (data == null || !data.results || episodes == null || !episodes.resultCount) {
        return <div>Cargando...</div>
    } else {
        return (
            <div style={{display: 'flex'}}>
                <div style={{
                    width: 286,
                    height: 469,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 18,
                    paddingBottom: 18,
                    background: 'white',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: 15,
                    overflow: 'hidden',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: 16,
                    display: 'inline-flex'
                }}>
                    <div style={{
                        width: 286,
                        height: 469,
                        paddingLeft: 8,
                        paddingRight: 8,
                        paddingTop: 18,
                        paddingBottom: 18,
                        background: 'white',
                        borderRadius: 15,
                        overflow: 'hidden',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: 16,
                        display: 'inline-flex'
                    }}>


                        <img style={{width: 150, height: 150, borderRadius: 5}}
                             src={data.results[0].artworkUrl600}/>
                        <div style={{
                            alignSelf: 'stretch',
                            height: 92,
                            borderTop: '1px black solid',
                            borderBottom: '1px black solid',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            display: 'flex'
                        }}>
                            <div style={{
                                alignSelf: 'stretch',
                                height: 46,
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                                display: 'inline-flex'
                            }}>
                                <div style={{
                                    flex: '1 1 0',
                                    color: 'black',
                                    fontSize: 20,
                                    fontFamily: 'Balsamiq Sans',
                                    fontWeight: '400',
                                    wordWrap: 'break-word'
                                }}>{data.results[0].collectionName}</div>
                            </div>
                            <div style={{
                                alignSelf: 'stretch',
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                                display: 'inline-flex'
                            }}>
                                <div style={{
                                    flex: '1 1 0',
                                    color: 'black',
                                    fontSize: 16,
                                    fontFamily: 'Balsamiq Sans',
                                    fontWeight: '400',
                                    wordWrap: 'break-word'
                                }}>{data.results[0].artistName}</div>
                            </div>
                        </div>
                        <div style={{
                            alignSelf: 'stretch',
                            height: 159,
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            display: 'flex'
                        }}>
                            <div style={{
                                alignSelf: 'stretch',
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                                display: 'inline-flex'
                            }}>
                                <div style={{
                                    flex: '1 1 0',
                                    color: 'black',
                                    fontSize: 20,
                                    fontFamily: 'Balsamiq Sans',
                                    fontWeight: '400',
                                    wordWrap: 'break-word'
                                }}>Description:
                                </div>
                            </div>
                            <div style={{
                                alignSelf: 'stretch',
                                flex: '1 1 0',
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                                display: 'inline-flex'
                            }}>
                                <div style={{
                                    flex: '1 1 0',
                                    color: 'black',
                                    fontSize: 14,
                                    fontFamily: 'Balsamiq Sans',
                                    fontWeight: '400',
                                    wordWrap: 'break-word'
                                }}>
                                    {data.results[0].shortDescription}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <EpisodesList/>
                </div>
            </div>
        )
    }
};

export default PodcastDetails;
