# Merlin Software
Prueba técnica front-end.

## Run

```
cd frontend
npm install (only first time to download libraries)
npm start
```

## Notas:

- Los estilos deberían estar en .css aparte, por simplificación está todo junto.
- En esta versión, los estilos no son definitivos, son aproximaciones, 
para esta prueba me paré en que fuese funcional, no estético.
- Hay algunos post que al obtener sus detalles me da el siguiente error:
```
Access to fetch at 'https://itunes.apple.com/lookup?id=1708275587' from origin
'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
header is present on the requested resource. If an opaque response serves your needs,
set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

```
GET https://itunes.apple.com/lookup?id=1708275587 net::ERR_FAILED 200 (OK)
```

- Falta el componente de mostrar el listado de episodios en la vista de ```Detalles de un podcast```, para ello,
primero habría que crear una función que nos devolviese el Json con la lista y despús sería hacer algo parecido a lo
que hice para listar la lista de los 100 podcasts.
- Falta por hacer la vista de detalles de un episodio.
- El componente PodcastDetails está hecho así de forma temporal, en él debería estar solo lo correspondiente a la
imagen, nombre, artista y descripción de un post; para después poder reutilizar ese componente en la vista de
```Detalle de un episodio```. Para la vista completa de los 3 componentes (PodcastDetails, NumberOfEpisodes
y EpisodesList) se crearía otro componente en app que incluyese los 3, y este componente es el que se pondría en
el route del body.
