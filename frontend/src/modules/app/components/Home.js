import PodcastList from "../../podcasts/components/PodcastList";
import FilteredPosts from "../../podcasts/components/PodcastFilter";

const Home = () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ alignSelf: 'flex-end', width: '100%', textAlign: 'right' }}>
            <FilteredPosts />
        </div>
        <div style={{ width: '100%', textAlign: 'center' }}>
            <PodcastList />
        </div>
    </div>
);

export default Home;