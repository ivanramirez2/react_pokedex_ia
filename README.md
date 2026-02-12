# 🎮 React Pokedex IA

¡Bienvenido a **React Pokedex IA**! 🚀
Esta es una aplicación web moderna construida con **React** y **Vite** que te permite explorar el mundo Pokémon de una manera rápida y visualmente atractiva using la PokeAPI.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## ✨ Características Principales

- **🔍 Búsqueda Inteligente**: Encuentra tus Pokémon favoritos instantáneamente por nombre desde la barra de navegación.
- **🏷️ Filtrado por Tipo**: Explora Pokémon por su tipo elemental (Fuego, Agua, Planta, etc.).
- **📄 Paginación Fluida**: Navega fácilmente a través de cientos de Pokémon.
- **📱 Diseño Responsivo**: Adaptado para funcionar perfectamente en dispositivos móviles y de escritorio.
- **⚡ Alto Rendimiento**: Gracias a Vite, la aplicación es extremadamente rápida.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Estilos**: React Bootstrap & CSS personalizado
- **Enrutamiento**: React Router Dom
- **API**: [PokeAPI](https://pokeapi.co/)

---

## 🚀 Cómo ponerlo a funcionar

Sigue estos sencillos pasos para ejecutar el proyecto en tu máquina local:

### 1. Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior).

### 2. Clonar el repositorio
```bash
git clone https://github.com/ivanramirez2/react_pokedex_ia.git
cd react_route
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Ejecutar el servidor de desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173` (o el puerto que te indique la terminal).

---

## 📂 Estructura del Proyecto

Aquí tienes una vista general de cómo está organizado el código:

```
react_route/
├── public/                 # Archivos estáticos públicos
├── src/
│   ├── assets/             # Recursos como logos (SVG)
│   ├── components/         # Componentes reutilizables (ej: Tarjetas de Pokemon)
│   ├── img/                # Imágenes del proyecto
│   ├── pages/              # Páginas principales de la aplicación
│   │   ├── home.jsx        # Página de inicio con la lista de Pokemon
│   │   └── page1.jsx       # Página secundaria (ejemplo)
│   ├── services/           # Lógica de conexión con APIs
│   │   └── pokeApiService.jsx # Servicios para consumir la PokeAPI
│   ├── App.css             # Estilos globales de la App
│   ├── App.jsx             # Componente principal y configuración de rutas
│   ├── index.css           # Estilos base
│   └── main.jsx            # Punto de entrada de React
├── .gitignore              # Archivos ignorados por Git
├── index.html              # Archivo HTML principal
├── package.json            # Dependencias y scripts del proyecto
└── vite.config.js          # Configuración de Vite
```

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar este proyecto, no dudes en abrir un *issue* o enviar un *pull request*.

---

Hecho con ❤️ por [Ivan Ramirez](https://github.com/ivanramirez2)
