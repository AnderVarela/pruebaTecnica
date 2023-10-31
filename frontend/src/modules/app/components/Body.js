import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import PodcastDetails from "../../podcasts/components/PodcastDetails";
import TemporalComponent from "./TemporalComponent";


const Body = () => {

    return (

        <div className="container">
            <br/>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/podcast/:id" element={<PodcastDetails/>}/>
                <Route path="/podcast/:idd/episode/:episodeId" element={<TemporalComponent/>}/>
            </Routes>
        </div>

    );

};

export default Body;