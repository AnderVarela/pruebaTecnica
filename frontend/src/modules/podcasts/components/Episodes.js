const Episodes = ({ episodes }) => {

    // ESTILOS --------------------------------------------------------------------
    const containerStyle = {
        width: '100%',
        height: '100%',
        padding: 10,
        background: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex'
    };

    const episodeTextStyle = {
        color: 'black',
        fontSize: 25,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    };


    // RETURN -----------------------------------------------------------------
    return (
        <div className="Componentenepisodes" style={containerStyle}>
            <div className="Episodes" style={episodeTextStyle}>Episodes: {episodes}</div>
        </div>
    );
};

export default Episodes;