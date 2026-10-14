# Buscador de Películas

Aplicación web para buscar películas y ver su póster, año y valoración, usando la API de TMDB.

## Tecnologías

- Node.js + Express (backend)
- Axios (peticiones a la API)
- HTML, CSS y JavaScript (frontend)
- API de TMDB (The Movie Database)

## Cómo funciona

El navegador no llama directamente a TMDB. Le pide los datos a mi servidor Express, que es el único que conoce la API key y consulta a TMDB. Así la clave nunca queda expuesta.

## Instalación

1. Clona el repositorio:
   git clone https://github.com/TU_USUARIO/peliculas-app.git
2. Entra en la carpeta e instala dependencias:
   npm install
3. Crea un archivo `.env` con tu clave de TMDB:
   TMDB_API_KEY=tu_clave_aqui
4. Arranca el servidor:
   node server.js
5. Abre http://localhost:3000

## Próximos pasos

- Guardar películas favoritas en MySQL
- Valoraciones propias de los usuarios

## Créditos

Datos e imágenes proporcionados por TMDB. Este producto usa la API de TMDB pero no está avalado ni certificado por TMDB.
