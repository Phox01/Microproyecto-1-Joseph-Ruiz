# Micro-Proyecto 1: Juego de Bingo

## Descripción del Proyecto

Este proyecto consiste en una aplicación web que simula un juego de bingo para 4 jugadores. El juego tiene un límite de **25 turnos** o hasta que un jugador consiga un **cartón lleno**. Se incluyen mecánicas de puntuación y persistencia de datos para las victorias de cada jugador.

---

## Funcionalidades Principales

### Interfaz de Usuario
- **Diseño Responsive**: La aplicación se adapta a diferentes tamaños de pantalla (móvil, tableta, escritorio). **Falta**
- **HTML y CSS**: Estructura y estilos diseñados para una experiencia de usuario atractiva y clara.
- **Elementos clave**:
  - Tablero de juego.
  - Cartones de bingo.
  - Puntajes y tabla de puntuaciones. **Falta**
  - Formulario para ingresar nombres de los jugadores.

### Menú Principal
1. **Tabla de Victorias Acumuladas**: Muestra el historial de victorias almacenado en `localStorage`. **Falta**
2. **Configuración del Juego**:
   - Solicitud de nombres para los 4 jugadores.
   - Selección del tamaño del cartón (opciones: 3x3, 4x4, 5x5).
3. **Inicio del Juego**: Habilitación de un botón para comenzar una nueva partida tras ingresar los datos. **Falta**

---

## Mecánicas del Juego

### Generación de Cartones
- Cada jugador tiene un **cartón cuadrado NxN** (N entre 3 y 5).
- Los números en los cartones son generados aleatoriamente en el rango de **1 a 50**.
- Los cartones se muestran en la interfaz y se pueden alternar entre jugadores.

### Desarrollo del Juego
1. **Números Aleatorios**:
   - Un botón genera números aleatorios entre **1 y 50**.
   - Cada número es único y no se repite durante la partida.
2. **Actualización de Cartones**:
   - Los números obtenidos resaltan las casillas correspondientes.
   - Se verifica si hay una línea (horizontal, vertical o diagonal) o un cartón lleno: **Falta**
     - **Cartón lleno**: 5 puntos.
     - **Línea horizontal/vertical**: 1 punto.
     - **Línea diagonal**: 3 puntos.
3. **Duración del Juego**:
   - Máximo de **25 turnos**.
   - Termina inmediatamente si un jugador consigue un cartón lleno.
4. **Cambio de Cartón**:
   - Interfaz que permite visualizar y alternar entre los cartones de los jugadores.

---

### Finalización del Juego
- **Puntajes Totales**: Se muestran los puntajes finales de los jugadores.
- **Actualización de Victorias**:
  - Las victorias de cada jugador se almacenan y actualizan en `localStorage`. **Falta**
  - La tabla de victorias se muestra en el menú principal.

### Reinicio del Juego
- Función para volver al menú principal y configurar una nueva partida.

---

## Tecnologías Utilizadas
- **HTML**: Estructura de la aplicación.
- **CSS**: Estilo visual.
- **JavaScript**: Lógica del juego y manejo de eventos.
- **LocalStorage**: Persistencia de datos de las victorias acumuladas.
- **Git y GitHub**: Control de versiones y repositorio en línea.
- **GitHub Pages**: Alojamiento del proyecto.

---

## ¿Cómo usarlo?
- Entra al enlace de la página del juego encontrada en la descripción
