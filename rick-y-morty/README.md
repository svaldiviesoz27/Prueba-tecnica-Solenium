# Rick & Morty - Explorador de Personajes

Aplicación web moderna desarrollada con React que permite buscar y explorar personajes de la serie Rick & Morty utilizando la [Rick and Morty API](https://rickandmortyapi.com/).

## Descripción del Proyecto

Esta aplicación fue desarrollada como prueba técnica para demostrar habilidades en desarrollo frontend con React. Proporciona una experiencia completa de navegación de personajes con filtrado avanzado, paginación, vistas detalladas de personajes y una interfaz limpia y responsive con soporte para modo oscuro.

## Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript para mejor calidad de código
- **Vite** - Herramienta de build y servidor de desarrollo ultrarrápido
- **CSS3** - Estilos modernos con custom properties, animaciones y transiciones
- **Rick and Morty API** - API REST pública para datos de personajes
- **ESLint** - Linter para mantener la calidad del código

## Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn como gestor de paquetes

### Pasos para Ejecutar el Proyecto

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd rick-y-morty
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

La aplicación se recargará automáticamente cuando realices cambios en el código.

### Comandos Adicionales

```bash
# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## Características

- **Búsqueda de Personajes** - Busca personajes por nombre con resultados en tiempo real
- **Filtros Avanzados** - Filtra por estado (vivo/muerto/desconocido), especie y género con dropdowns buscables
- **Paginación** - Navega a través de múltiples páginas de resultados con controles inteligentes
- **Detalles de Personajes** - Visualiza información detallada en un modal interactivo
- **Modo Oscuro** - Alterna entre temas claro y oscuro con persistencia en localStorage
- **Historial de Búsquedas** - Acceso rápido a tus últimas 3 búsquedas
- **Diseño Responsive** - Layout completamente responsive que funciona en todos los dispositivos
- **Estados de Carga** - Skeleton loaders para mejor experiencia de usuario
- **Manejo de Errores** - Mensajes de error claros para fallos de API
- **Accesibilidad** - Etiquetas ARIA y soporte para navegación por teclado

## Requerimientos Implementados

### HU01 - Búsqueda de Personajes ✅
- Campo de texto para ingresar nombre del personaje
- Botón de búsqueda con validación
- Loader animado durante las llamadas a la API
- Mensajes de error claros
- Manejo robusto de errores de API

### HU02 - Visualización de Información ✅
- Grid interactivo de personajes con cards
- Vista detallada en modal mostrando:
  - Nombre e imagen
  - Especie y tipo
  - Estado con indicadores de color
  - Género
  - Origen
  - Última ubicación conocida
  - Número de apariciones en episodios

### HU03 - Historial de Búsquedas ✅
- Últimas 3 búsquedas guardadas
- Persistencia en localStorage
- Re-búsqueda rápida haciendo clic en el historial
- Opción para limpiar historial

### HU04 - Diseño y Usabilidad ✅
- Diseño completamente responsive
- Interfaz limpia y moderna
- Animaciones y transiciones suaves
- Paleta de colores profesional
- Experiencia de usuario intuitiva

## Estructura del Proyecto

```
src/
├── components/           # Componentes React (carpeta por componente)
│   ├── CharacterGrid/   # Grid de visualización de personajes
│   ├── CharacterModal/  # Modal de detalle de personaje
│   ├── CustomSelect/    # Componente select personalizado con búsqueda
│   ├── ErrorMessage/    # Componente de visualización de errores
│   ├── Filters/         # Filtros avanzados
│   ├── Icons/           # Componentes de iconos SVG personalizados
│   ├── LazyImage/       # Componente de carga lazy de imágenes
│   ├── Loader/          # Indicador de carga
│   ├── Pagination/      # Navegación de páginas
│   ├── ResultsInfo/     # Contador de resultados
│   ├── SearchBar/       # Barra de búsqueda
│   ├── SearchHistory/   # Visualización de historial de búsquedas
│   ├── SkeletonCard/    # Skeleton de carga
│   └── ThemeToggle/     # Toggle de modo oscuro
├── constants/
│   └── filters.ts       # Constantes de opciones de filtros
├── hooks/
│   ├── useCharacters.ts    # Lógica de obtención de personajes
│   ├── useDarkMode.ts      # Gestión de estado de modo oscuro
│   ├── useDebounce.ts      # Hook de utilidad para debounce
│   └── useSearchHistory.ts # Gestión de historial de búsquedas
├── services/
│   └── rickAndMortyApi.ts  # Capa de servicio de API
├── types/
│   └── rickAndMorty.ts     # Definiciones de tipos TypeScript
├── utils/
│   └── statusHelpers.ts    # Helpers de color/texto de estado
├── App.tsx              # Componente principal de la aplicación
├── App.css              # Estilos principales con variables CSS
├── main.tsx             # Punto de entrada de la aplicación
└── index.css            # Estilos globales y resets
```

## API Utilizada

**Rick and Morty API**
- Documentación: https://rickandmortyapi.com/documentation
- Endpoint base: `https://rickandmortyapi.com/api`
- Recursos utilizados: `/character` con soporte de filtrado y paginación

## Buenas Prácticas Implementadas

- ✅ Componentes funcionales con hooks de React
- ✅ TypeScript para tipado estático y mejor soporte del IDE
- ✅ Separación de responsabilidades (components, hooks, services, utils)
- ✅ Custom hooks para lógica reutilizable
- ✅ Estructura de carpeta-por-componente con barrel exports
- ✅ Manejo robusto de errores
- ✅ Código limpio y legible con nombres descriptivos
- ✅ Accesibilidad (etiquetas ARIA, navegación por teclado)
- ✅ Diseño responsive con enfoque mobile-first
- ✅ Variables CSS para theming
- ✅ Renderizado optimizado con useCallback y useMemo
- ✅ Validación y sanitización de inputs
- ✅ Estados de carga y skeleton screens
- ✅ localStorage para persistencia de datos

## Notas de Desarrollo

- Se eligió Vite por su velocidad y configuración mínima
- TypeScript proporciona seguridad de tipos y mejor experiencia de desarrollo
- CSS puro con características modernas (custom properties, grid, flexbox)
- Arquitectura de componentes modular y reutilizable
- Convención de nombres CSS inspirada en BEM
- Iconos SVG personalizados en lugar de librerías para mejor rendimiento
- Carga lazy de imágenes para rendimiento mejorado

---

Desarrollado con React y TypeScript
