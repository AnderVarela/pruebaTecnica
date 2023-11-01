import {useNavigate} from "react-router-dom";
import {useState} from "react";

const PodcastDetails = ({ imagen, nombre, artista, descripcion, podcastId }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        if (podcastId != null)
            navigate(`/podcast/${podcastId}`);
    }


    // ESTILOS ----------------------------------------------------------------
    const containerStyle = {
        width: '50%',
        height: '50%',
        paddingTop: 34,
        paddingBottom: 18,
        paddingLeft: 16,
        paddingRight: 16,
        background: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 15,
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 16,
        display: 'inline-flex'
    };

    const imageStyle = {
        alignSelf: 'stretch',
        flex: '1 1 0',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: 5
    };

    const titleAuthorContainerStyle = {
        alignSelf: 'stretch',
        height: '100%',
        width: '100%',
        paddingLeft: 8,
        paddingRight: 8,
        borderTop: '1px #727272 solid',
        borderBottom: '1px #727272 solid',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex'
    };

    const titleStyle = {
        alignSelf: 'stretch',
        padding: 10,
        justifyContent: 'left',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
        flex: '1 1 0',
        color: 'black',
        fontSize: 20,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    };

    const authorStyle = {
        alignSelf: 'stretch',
        padding: 10,
        justifyContent: 'left',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
        flex: '1 1 0',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    };

    const descriptionContainerStyle = {
        alignSelf: 'stretch',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        display: 'flex'
    };

    const descriptionTitleStyle = {
        alignSelf: 'stretch',
        padding: 10,
        justifyContent: 'left',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
        flex: '1 1 0',
        color: 'black',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: '700',
        wordWrap: 'break-word'
    };

    const descriptionContentStyle = {
        alignSelf: 'stretch',
        padding: 10,
        justifyContent: 'left',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
        flex: '1 1 0',
        color: 'black',
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: '400',
        wordWrap: 'break-word'
    };


    // RETURN -----------------------------------------------------------------
    return (
        <div className="Podcastdetails" style={containerStyle}
             onClick={() => handleClick()}>

            <img className="Imagen" style={imageStyle} src={imagen} />
            <div className="TitleAuthor" style={titleAuthorContainerStyle}>
                <div className="Title" style={titleStyle}>
                    {nombre}
                </div>
                <div className="Author" style={authorStyle}>
                    {artista}
                </div>
            </div>
            <div className="Description" style={descriptionContainerStyle}>
                <div className="Frame6" style={descriptionTitleStyle}>
                    Description:
                </div>
                <div className="Frame7" style={descriptionContentStyle}>
                    {descripcion}
                </div>
            </div>

        </div>
    );
};

export default PodcastDetails;
