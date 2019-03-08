## eClass test con React y Redux

#### Librerías implmentada para la API de Sporify

- [spotify-web-api-js](https://www.npmjs.com/package/spotify-web-api-js)

#### Para probar la demo

-

#### Para probar la aplicación en local

```bash
git clone https://github.com/enBonnet/eclass-react-redux
cd eclass-react-redux
npm install
cp .env.sample .env
# completar las variabales del archivo .env
npm start
```

Para obetener el `REACT_APP_SPOTIFY_CLIENT_ID` ve la [documentacion](https://developer.spotify.com/documentation/general/guides/app-settings/) de Spotify.

#### Caracteristicas de la aplicacion

- [x] Liste la información del álbum
- [x] Liste la información del artista
- [x] Liste una o más canciónes
- [x] Posibilidad de escuchar un preview
- [] JSDoc
- [] Test con Jest

#### Evaluación

- [x] La aplicación debe ser desarrollada usando Reactjs 16.8+
- [x] Manejar estados globalmente con Redux.
- [x] La interfaz de la aplicación no es relevante, pero puntos extras si le das un poco de color y estilo.
- [x] El buscador debe soportar multi criterios, es decir, poder buscar por álbum, artista o título, incluso de manera combinada (tal como funciona el de Spotify).
- [] El campo de búsqueda debe incluir validación ¿Cuál? Evaluaremos tu criterio.
- Los criterios de evaluación serán
  - Implementación
  - Convención de código
  - Validaciones
  - Orden
  - Funcionalidad de la aplicación
  - Suma puntitos uso de JSDoc, Typescript y/o test con Jest.

#### Condición de entrega

La entrega de la prueba es hasta este Jueves 7 en un repositorio público de Github/GitLab/Bitbucket dónde podamos ver el código y su evolución, además deberás proveernos una URL para probar su funcionalidad.
