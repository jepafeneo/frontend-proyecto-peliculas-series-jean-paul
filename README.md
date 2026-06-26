# Películas y Series Frontend

Aplicación web desarrollada con React para consultar, buscar y administrar películas y series consumiendo una API REST.

## Características

- Listado de películas y series
- Búsqueda en tiempo real
- Filtros y ordenamiento
- Vista de detalle
- Panel de administración
- Crear películas
- Editar películas
- Eliminar películas
- Registro de usuarios
- Inicio de sesión con JWT
- Rutas protegidas mediante autenticación
- Testing básico con Vitest

---

## 🛠 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Context API
- Tailwind CSS
- Fetch API
- Vitest
- Testing Library

---

## Instalación

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

Ingresar al proyecto:

```bash
cd frontend-proyecto-peliculas-series
```

Instalar dependencias:

```bash
npm install
```

---

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto utilizando como referencia el archivo `.env.example`.

### .env.example

```env
VITE_API_URL=
```

### Ejemplo local

```env
VITE_API_URL=http://localhost:3000/api
```

### Ejemplo producción

```env
VITE_API_URL=https://mi-api.onrender.com/api
```

---

## Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```txt
http://localhost:5173
```

---

## Ejecutar tests

```bash
npm test
```

## vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.jsx',
  },
})
```

---

## Generar build de producción

```bash
npm run build
```

Los archivos generados se encontrarán en:

```txt
dist/
```

---

## Backend

Este proyecto consume una API REST desarrollada con:

- Node.js
- Express
- MongoDB Atlas
- JWT

La URL del backend se configura mediante:

```env
VITE_API_URL
```

---

## Estructura del proyecto

```txt
public/
└── images/
    └── products/
        └── default.png
src/
│
├── components/
├── context/
├── hooks/
├── layouts/
├── loaders/
├── pages/
├── routes/
├── services/
├── tests/
│
├── App.jsx
├── index.css
├── main.jsx
└── setupTests.jsx
```

---

## Autenticación

La aplicación utiliza JWT.

Al iniciar sesión se almacenan:

```txt
token
user
```

en el Local Storage del navegador.

---

## Deploy

Frontend desplegado en:

```txt
https://tu-proyecto.netlify.app
```

Backend desplegado en:

```txt
https://tu-api.onrender.com
```

---

## Autor

Proyecto desarrollado como práctica del curso Full Stack de Neoland.

Autor: Jean Paul Ferreira
