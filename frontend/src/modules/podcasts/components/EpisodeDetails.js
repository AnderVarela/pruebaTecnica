const Episodes = ({ title, description, mp3 }) => {

    // ESTILOS ----------------------------------------------------------------
    const containerStyle = {
        width: 864,
        height: 182,
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

    const sectionStyle = {
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 10,
        display: 'inline-flex'
    };

    const titleStyle = {
        flex: '1 1 0',
        color: 'black',
        fontSize: 35,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    };

    const descriptionStyle = {
        flex: '1 1 0',
        color: 'black',
        fontSize: 24,
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    };

    const mp3Style = {
        flex: '1 1 0',
        textAlign: 'center',
        color: 'black',
        fontSize: 35,
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    };

    // RETURN -----------------------------------------------------------------
    return (
        <div style={containerStyle}>
            <div style={sectionStyle}>
                <div style={titleStyle}>
                    {title}
                </div>
            </div>
            <div style={sectionStyle}>
                <div style={descriptionStyle}>
                    {description}
                </div>
            </div>
            <div style={sectionStyle}>
                <div style={mp3Style}>
                    {mp3}
                </div>
            </div>
        </div>
    );
};

export default Episodes;