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
    const handleKeyDown = (event) => { // activa el filtro al pulsar enter.
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    // ESTILOS ----------------------------------------------------------------
    const styles = {
        filterContainer: {
            width: 306,
            height: 37,
            padding: 10,
            background: 'white',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 5,
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex'
        },
        inputField: {
            color: 'black',
            fontSize: 14,
            fontFamily: 'Arial',
            fontWeight: '400',
            wordWrap: 'break-word',
            border: 'none',
            outline: 'none',
            width: '100%',
            background: 'transparent'
        }
    };

    // RETURN -----------------------------------------------------------------
    return (
        <div className="Filtro" style={styles.filterContainer}>
            <input
                id="filtro"
                type="text"
                style={styles.inputField}
                placeholder="Filter podcasts..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default FilteredPosts;
