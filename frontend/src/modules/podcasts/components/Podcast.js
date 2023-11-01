const Podcast = ({ name, author, image }) => {

    // ESTILOS ----------------------------------------------------------------
    const styles = {
        podcastContainer: {
            width: 278,
            alignSelf: 'stretch',
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
            paddingBottom: 8,
            background: 'white',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 10,
            overflow: 'hidden',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 4,
            display: 'inline-flex'
        },
        image: {
            width: 94,
            height: 94,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 9999
        },
        titleSection: {
            alignSelf: 'stretch',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex'
        },
        title: {
            flex: '1 1 0',
            textAlign: 'center',
            color: 'black',
            fontSize: 22,
            fontFamily: 'Arial',
            fontWeight: '400',
            wordWrap: 'break-word'
        },
        authorSection: {
            alignSelf: 'stretch',
            height: 22,
            paddingTop: 4,
            paddingBottom: 4,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            display: 'flex'
        },
        author: {
            alignSelf: 'stretch',
            textAlign: 'center',
            color: '#727272',
            fontSize: 12,
            fontFamily: 'Arial',
            fontWeight: '400',
            wordWrap: 'break-word'
        }
    };


    // RETURN -----------------------------------------------------------------
    return (
        <div style={styles.podcastContainer}>
            <img style={styles.image} src={image} alt="Podcast" />
            <div style={styles.titleSection}>
                <div style={styles.title}>{name}</div>
            </div>
            <div style={styles.authorSection}>
                <div style={styles.author}>{author}</div>
            </div>
        </div>
    );
};

export default Podcast;