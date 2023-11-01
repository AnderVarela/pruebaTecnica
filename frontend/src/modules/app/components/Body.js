import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import DetallesDeUnPodcast from "./DetallesDeUnPodcast";
import DetallesDeUnEpisodio from "./DetallesDeUnEpisodio";


const Body = () => {

    return (

        <div className="container">
            <br/>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/podcast/:id" element={<DetallesDeUnPodcast/>}/>
                <Route path="/podcast/:podcastId/episode/:episodeId" element={<DetallesDeUnEpisodio/>}/>
            </Routes>
        </div>

    );

};

export default Body;