// Función para obtener los podcasts desde la URL
async function obtenerPodcasts() {
    try {
        const response = await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener los podcasts:', error);
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
            //console.log('Ha pasado más de un día. Actualizando la lista de podcasts...');
            const newData = await obtenerPodcasts();

            if (newData) {
                localStorage.setItem('podcastsData', JSON.stringify(newData));
                localStorage.setItem('lastFetchDate', new Date().toISOString());
                jsonObject = newData;
                return jsonObject;
            }
        } else {
            //console.log('Recuperando lista de podcasts almacenada en el cliente.');
            jsonObject = JSON.parse(almacenamientoLocal);
            return jsonObject;
        }
    } else {
        //console.log('No hay datos almacenados. Obteniendo lista de podcasts por primera vez.');
        const newData = await obtenerPodcasts();

        if (newData) {
            localStorage.setItem('podcastsData', JSON.stringify(newData));
            localStorage.setItem('lastFetchDate', new Date().toISOString());
            jsonObject = newData;
            return newData;
        }
    }
}