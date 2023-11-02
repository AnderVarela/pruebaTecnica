# Merlin Software
Prueba técnica front-end.

## Run

```
cd frontend
npm install (solo la primera vez)
npm start
```

## Notas:

- Los estilos deberían estar en ```.css``` aparte, por simplificación, está todo junto.
- En esta versión, los estilos son aproximaciones.
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
- En caso de error en la obtención de datos, se notificará en la consola y se mostrará
un spinner en la interfáz de usuario.
