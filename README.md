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
- Falta poner la descripción de los podcast en la vista ```Detalles de un podcast```
- Falta por hacer la vista de ```Detalles de un episodio```.

