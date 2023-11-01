import {useNavigate} from "react-router-dom";
import moment from "moment";

const EpisodesList = (episodes) => {

    const navigate = useNavigate();


    // FUNCIONES AUXILIARES ---------------------------------------------------
    const handleClick = (podcastId, episodeId) => {
        navigate(`/podcast/${podcastId}/episode/${episodeId}`);
    }

    const MilisegundosAMinutos = (milisegundos) => {
        if (milisegundos == null)
            return "00:00"

        const minutos = Math.floor(milisegundos / 60000);
        const segundos = ((milisegundos % 60000) / 1000).toFixed(0);
        const minutosFormateados = (minutos < 10) ? '0' + minutos : minutos;
        const segundosFormateados = (segundos < 10) ? '0' + segundos : segundos;

        // Devuelve el resultado en el formato 'minutos:segundos'
        return `${minutosFormateados}:${segundosFormateados}`;
    }


    // ESTILOS ----------------------------------------------------------------
    const containerStyle = {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 4,
        display: 'inline-flex'
    };

    const ulStyle = {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%'
    };

    const episodeElementStyle = {
        width: '100%',
        height: '100%',
        background: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 4,
        display: 'inline-flex'
    };

    const titleStyle = {
        flex: '1 1 0',
        height: '100%',
        padding: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        display: 'flex',
        color: 'black',
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    };

    const dateDurationStyle = {
        justifyContent: 'flex-end',
        alignItems: 'center',
        display: 'flex',
        gap: 32
    };

    const dateStyle = {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'flex',
        color: 'black',
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    };


    // RETURN -----------------------------------------------------------------
        return (
            <div className="Componentelistepisodes" style={containerStyle}>
                <ul style={ulStyle}>
                    {episodes.episodes.map((episode, index) => (
                        <li key={index} style={{ marginBottom: 4 }}
                            onClick={() => handleClick(episode.collectionId, episode.trackId)}>
                            <div className="Elementepisodelist" style={episodeElementStyle}>
                                <div className="Title" style={titleStyle}>
                                    {episode.trackName}
                                </div>
                                <div className="Dateduration" style={dateDurationStyle}>
                                    <div className="Date" style={dateStyle}>
                                        {moment(episode.releaseDate).format('DD/MM/YYYY')}
                                    </div>
                                    <div className="Duration" style={dateStyle}>
                                        {MilisegundosAMinutos(episode.trackTimeMillis)}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );

}

export default EpisodesList;

