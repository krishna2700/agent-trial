# agent-trial

Una aplicación web de demostración que simula un editor de código moderno con interfaz visual similar a Visual Studio Code.

## Descripción

Este proyecto es una interfaz de editor de código construida con HTML, CSS y JavaScript puro. Presenta un diseño oscuro con resaltado de sintaxis, explorador de archivos, pestañas de editor, panel de terminal y más.

## Características

- **Explorador de archivos** — Árbol de archivos con soporte para carpetas expandibles/colapsables
- **Editor de código** — Resaltado de sintaxis para JavaScript, JSX y CSS
- **Pestañas de editor** — Navegación entre múltiples archivos abiertos
- **Barra de migas de pan** — Muestra la ruta del archivo activo
- **Minimapa** — Vista previa compacta del código
- **Panel de terminal** — Terminal integrado con salida simulada
- **Panel de problemas** — Lista de advertencias y errores
- **Barra de estado** — Información del lenguaje, posición del cursor y más
- **Panel de esquema** — Estructura del archivo activo (funciones, variables, clases)

## Estructura del proyecto

```
agent-trial/
├── index.html       # Aplicación principal (HTML + CSS + JS)
├── hello.js         # Script de ejemplo
└── README.md        # Este archivo
```

## Tecnologías utilizadas

- **HTML5** — Estructura de la interfaz
- **CSS3** — Estilos y animaciones (tema oscuro estilo GitHub)
- **JavaScript (ES6+)** — Lógica de la interfaz y renderizado dinámico

## Cómo ejecutar

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd agent-trial
   ```

2. Abre el archivo `index.html` en tu navegador:
   ```bash
   open index.html
   # o simplemente arrastra el archivo al navegador
   ```

No se requieren dependencias ni pasos de compilación. Es una aplicación de una sola página completamente estática.

## Uso

- Haz clic en los archivos del **explorador** para cambiar el contenido del editor
- Haz clic en las **pestañas** para navegar entre archivos abiertos
- Haz clic en las **líneas de código** para mover el cursor activo
- Usa las **pestañas del panel inferior** para alternar entre Terminal, Problemas, Salida y Consola de depuración
- Haz clic en el ícono del **explorador** en la barra de actividad para mostrar/ocultar la barra lateral

## Licencia

Este proyecto está disponible bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
