import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import PodcastDetails from "../../podcasts/components/PodcastDetails";


const Body = () => {

    return (

        <div className="container">
            <br/>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/podcast/:id" element={<PodcastDetails/>}/>}/>
            </Routes>
        </div>

    );

};

export default Body;