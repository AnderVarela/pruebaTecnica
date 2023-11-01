
const MAX_NUMBER_OF_EPISODES = 50;
// Función para obtener los podcasts desde la URL
async function obtenerPodcasts() {
    try {
        const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

// Función para obtener o actualizar la lista de podcasts
export async function obtenerOActualizarLista() {
    const almacenamientoLocal = localStorage.getItem('podcastsData');
    const almacenamientoFecha = localStorage.getItem('lastFetchDate');
    let jsonObject = null;

    if (almacenamientoLocal && almacenamientoFecha) {
        const lastFetchDate = new Date(almacenamientoFecha);
        const currentDate = new Date();

        // Comprobamos si ha pasado más de un día desde la última solicitud
        const unDiaEnMS = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
        if (currentDate - lastFetchDate > unDiaEnMS) {
            const newData = await obtenerPodcasts();

            if (newData) {
                localStorage.setItem('podcastsData', JSON.stringify(newData));
                localStorage.setItem('lastFetchDate', new Date().toISOString());
                jsonObject = newData;
                return jsonObject;
            }
        } else {
            jsonObject = JSON.parse(almacenamientoLocal);
            return jsonObject;
        }
    } else {
        const newData = await obtenerPodcasts();

        if (newData) {
            localStorage.setItem('podcastsData', JSON.stringify(newData));
            localStorage.setItem('lastFetchDate', new Date().toISOString());
            return newData;
        }
    }
}

// Esta función filtra los podcasts por el texto ingresado
export async function filtrarPodcasts(textoABuscar) {
    const podcasts = await obtenerOActualizarLista();

    if (!textoABuscar || textoABuscar.trim() === "") {
        // Devolver todos los podcasts si textoABuscar es null o una cadena vacía
        return (podcasts && podcasts.feed && podcasts.feed.entry) ? podcasts.feed.entry : null;
    }

    if (podcasts && podcasts.feed && podcasts.feed.entry) {
        const podcastsFiltrados = podcasts.feed.entry.filter(podcast => {
            const titulo = podcast['im:name']?.label.toLowerCase();
            const nombreAutor = podcast['im:artist']?.label.toLowerCase();

            // Verifica si el texto a buscar está incluido en el título o el nombre del autor
            return (titulo.includes(textoABuscar.toLowerCase()) || nombreAutor.includes(textoABuscar.toLowerCase()));
        });

        return podcastsFiltrados;
    }

    return null;
}


export async function getPodcastData(podcastId) {
    try {
        const storedData = localStorage.getItem(`podcast_${podcastId}`);

        if (storedData) {
            const parsedData = JSON.parse(storedData);
            const storedTimestamp = parsedData.timestamp;
            const storedPodcastData = parsedData.data;

            // Comprobar si ha pasado un día desde la última solicitud
            const lastFetchedTime = new Date(storedTimestamp);
            const currentTime = new Date();
            const oneDay = 24 * 60 * 60 * 1000; // Un día en milisegundos

            if (currentTime - lastFetchedTime < oneDay) {
                // Si ha pasado menos de un día, devolver los datos almacenados
                console.log("data obtenida de memoria local")
                return storedPodcastData;
            }
        }

        const response = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json(); // Obtenemos directamente el JSON

        // Guardar los datos y la marca de tiempo en localStorage
        const dataToStore = {
            timestamp: new Date().getTime(),
            data: data
        };

        localStorage.setItem(`podcast_${podcastId}`, JSON.stringify(dataToStore));

        console.log("data obtenida de servidor externo")
        return data;
    } catch (error) {
        return null;
    }
}



export async function getPodcastEpisodes(podcastId) {
    try {
        const response = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode&limit=${MAX_NUMBER_OF_EPISODES}`);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json(); // Obtenemos directamente el JSON
        return data;
    } catch (error) {
        return null;
    }
}