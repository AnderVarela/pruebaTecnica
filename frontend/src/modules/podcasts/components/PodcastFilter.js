import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import * as actions from '../actions';


const FilteredPosts = () => {
    const [filter, setFilter] = useState('');
    const dispatch = useDispatch();

    // FUNCIONES AUXILIARES ---------------------------------------------------
    const handleSearch = () => { // actualiza el filtro, que al actualizarse, se actualiza la lista de podcast.
        dispatch(actions.changeFilter(filter));
    };
    const handleKeyDown = (event) => { // hace que funcione el filtro al pulsar enter.
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    // RETURN -----------------------------------------------------------------
    return (
        <div>
            <div className="search-bar">

                <input
                    id="filtro"
                    type="text"
                    placeholder="Filter podcasts..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    onKeyDown={handleKeyDown}/>

                <button onClick={handleSearch}
                        style={{background: 'Cornflowerblue'}}>
                    Filtrar
                </button>
            </div>
        </div>
    );
};

export default FilteredPosts;
