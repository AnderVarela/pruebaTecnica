import PodcastList from "../../podcasts/components/PodcastList";
import PodcastFilter from "../../podcasts/components/PodcastFilter";

const Home = () => {
    // ESTILOS ----------------------------------------------------------------
    const styles = {
        mainContainer: {
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 50,
            display: 'inline-flex'
        },
        filterContainer: {
            alignSelf: 'stretch',
            height: 37,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: 10,
            display: 'flex'
        }
    };

    // RETURN -----------------------------------------------------------------
    return (
        <div className="VistaPrincipal" style={styles.mainContainer}>
            <div style={styles.filterContainer}>
                <PodcastFilter/>
            </div>
            <PodcastList/>
        </div>
    );
};


export default Home;