# 🚀 Rick & Morty - Buscador de Personajes

Aplicación web desarrollada en React que permite buscar y explorar personajes de la serie Rick & Morty utilizando la [Rick and Morty API](https://rickandmortyapi.com/).

## 📋 Descripción del Proyecto

Esta aplicación fue desarrollada como prueba técnica para demostrar conocimientos en desarrollo frontend con React. Permite a los usuarios buscar personajes, aplicar filtros avanzados, navegar entre resultados paginados y ver información detallada de cada personaje.

## ✨ Características

- **🔍 Búsqueda de personajes** por nombre
- **🎯 Filtros avanzados** por estado (vivo/muerto/desconocido), especie y género
- **📄 Paginación completa** para navegar entre múltiples resultados
- **🎨 Vista de detalle** con modal interactivo
- **📱 Diseño responsive** adaptado a todos los dispositivos
- **💾 Historial de búsquedas** guardado en localStorage
- **⚡ Loader animado** durante las consultas
- **❌ Manejo de errores** con mensajes claros
- **♿ Accesibilidad** con etiquetas ARIA y navegación por teclado

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Build tool y dev server ultrarrápido
- **CSS3** - Estilos modernos con animaciones y transiciones
- **Rick and Morty API** - API REST pública
- **ESLint** - Linter para mantener código limpio

## 📦 Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Pasos para ejecutar el proyecto

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

### Otros comandos disponibles

```bash
# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Ejecutar linter
npm run lint
```

## 🎯 Funcionalidades Implementadas

### HU01 - Búsqueda de personajes ✅
- Campo de texto para ingresar nombre del personaje
- Botón de búsqueda con validación
- Loader animado durante la consulta
- Mensajes de error claros
- Manejo robusto de errores de API

### HU02 - Visualización de información ✅
- Grid de resultados con cards interactivas
- Modal de detalle con información completa:
  - Nombre
  - Imagen
  - Especie y tipo
  - Estado (con indicador visual de color)
  - Género
  - Origen
  - Última ubicación conocida
  - Número de episodios

### HU03 - Historial de búsquedas ✅
- Últimas 3 búsquedas guardadas
- Persistencia en localStorage
- Click para repetir búsqueda rápidamente
- Se actualiza automáticamente

### HU04 - Diseño y usabilidad ✅
- Diseño completamente responsive
- Interfaz moderna y limpia
- Animaciones suaves y transiciones
- Paleta de colores profesional
- Experiencia de usuario intuitiva

## 🎨 Características Adicionales

- **Filtros avanzados**: Estado, especie y género
- **Paginación inteligente**: Navegación entre páginas con indicadores
- **Información de resultados**: Contador de personajes y páginas
- **Modal interactivo**: Vista detallada con cierre por ESC o click fuera
- **Badges de estado**: Indicadores visuales con colores (verde=vivo, rojo=muerto, gris=desconocido)
- **Efectos hover**: Animaciones en cards y botones
- **Optimización de búsquedas**: Los filtros se aplican automáticamente

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── CharacterGrid.tsx      # Grid de personajes
│   ├── CharacterModal.tsx     # Modal de detalle
│   ├── ErrorMessage.tsx       # Mensajes de error
│   ├── Filters.tsx            # Filtros avanzados
│   ├── Loader.tsx             # Indicador de carga
│   ├── Pagination.tsx         # Navegación de páginas
│   ├── ResultsInfo.tsx        # Información de resultados
│   ├── SearchBar.tsx          # Barra de búsqueda
│   └── SearchHistory.tsx      # Historial de búsquedas
├── services/
│   └── rickAndMortyApi.ts     # Servicio de API
├── types/
│   └── rickAndMorty.ts        # Tipos TypeScript
├── App.tsx                     # Componente principal
├── App.css                     # Estilos principales
├── main.tsx                    # Punto de entrada
└── index.css                   # Estilos globales
```

## 🌐 API Utilizada

**Rick and Morty API**
- Documentación: https://rickandmortyapi.com/documentation
- Endpoint base: `https://rickandmortyapi.com/api`
- Recursos utilizados: `/character` con filtros y paginación

## 👨‍💻 Buenas Prácticas Implementadas

- ✅ Componentes funcionales con hooks
- ✅ TypeScript para tipado estático
- ✅ Separación de responsabilidades
- ✅ Manejo de errores robusto
- ✅ Código limpio y legible
- ✅ Nombres descriptivos
- ✅ Accesibilidad (ARIA labels)
- ✅ Responsive design
- ✅ Optimización de renders
- ✅ Validación de inputs

## 📝 Notas de Desarrollo

- Se utilizó Vite por su velocidad y configuración mínima
- TypeScript para mayor seguridad y autocompletado
- CSS puro sin frameworks para demostrar conocimientos fundamentales
- Componentes reutilizables y modulares
- Estado local con hooks de React (useState, useEffect)
- LocalStorage para persistencia del historial

## 🚀 Mejoras Futuras Posibles

- Implementar React Query para caché de datos
- Agregar tests unitarios y de integración
- Modo oscuro
- Búsqueda con debounce automático
- Favoritos persistentes
- Compartir personajes en redes sociales
- Filtros por episodio y ubicación

## 📄 Licencia

Este proyecto fue desarrollado como prueba técnica y es de uso libre para fines educativos.

---

Desarrollado con ❤️ usando React y TypeScript
