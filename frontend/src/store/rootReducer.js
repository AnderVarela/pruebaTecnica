import {combineReducers} from 'redux';
import podcasts from "../modules/podcasts";
//import app from '../modules/app';

const rootReducer = combineReducers({
    //app: app.reducer,
    podcasts: podcasts.reducer
});

export default rootReducer;