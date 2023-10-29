import {useDispatch, useSelector} from "react-redux";
import * as selectors from "../selectors";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as actions from "../actions";

const PodcastDetails = () => {

    const getPodcasts = useSelector(selectors.getAllPodcasts);
    const [details, setDetails] = useState(null); // almacena el podcast.
    const {id} = useParams();
    const dispatch = useDispatch();

    // USE EFFECT--------------------------------------------------------------
    useEffect(() => { // obtiene todos los podcast.
        const fetchData = async () => {
            await dispatch(actions.getPodcasts(""));
        };
        fetchData();

    }, [dispatch]);

    useEffect(() => { // almacena el podcast.
        if (getPodcasts != null) {
            for (let i = 0; i < getPodcasts.length; i++) {
                const idt = getPodcasts[i].id.attributes['im:id'];

                if (idt === id) {
                    setDetails(getPodcasts[i])
                    break;
                }
            }
        }

    }, [getPodcasts]);

    // RETURN -----------------------------------------------------------------
    if (details == null) {
        return <div>Error de conexión</div>
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
                             src={details['im:image'][2].label}/>
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
                                }}>{details['im:name'].label}</div>
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
                                }}>{details['im:artist'].label}</div>
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
                                }}>{details['summary'].label}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default PodcastDetails;
