const EpisodeReproductor = ({trackName, description, episodeUrl}) => {


    // ESTILOS ----------------------------------------------------------------
    const componenteEpisodioStyle = {
        width: '100%',
        height: '100%',
        padding: 10,
        background: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5,
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 16,
        display: 'inline-flex'
    };

    const titleStyle = {
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        display: 'inline-flex',
        flex: '1 1 0',
        color: 'black',
        fontSize: 25,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    };

    const descriptionStyle = {
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        display: 'inline-flex',
        flex: '1 1 0',
        color: 'black',
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    };

    const audioStyle = {
        alignSelf: 'stretch',
        padding: 10,
        borderTop: '1px #727272 solid',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex'
    };


    // RETURN -----------------------------------------------------------------
    return (
        <div className="Componenteepisodio" style={componenteEpisodioStyle}>
            <div className="Titulo" style={titleStyle}>
                {trackName}
            </div>
            <div className="Descripcion" style={descriptionStyle}>
                {description}
            </div>
            <div className="Audio" style={audioStyle}>
                <audio controls style={{ width: '100%' }}>
                    <source src={episodeUrl} type="audio/mpeg" />
                    Tu navegador no soporta la etiqueta de audio.
                </audio>
            </div>
        </div>
    )
}

export default EpisodeReproductor;