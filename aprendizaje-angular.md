# Evolución del Proyecto - Count App Angular

Este documento registra el progreso, las decisiones arquitectónicas y los aprendizajes obtenidos durante el desarrollo de la aplicación.

## Análisis Inicial (2026-03-04)

### Stack Tecnológico
- **Framework**: Angular v21.2.0 (Next-gen Angular).
- **Renderizado**: Server-Side Rendering (SSR) habilitado.
- **Estilos**: Tailwind CSS v4.
- **Pruebas**: Vitest para unit testing.
- **Servidor**: Express habilitado para el SSR.

### Estructura de la Aplicación
- `src/app`: Contiene los componentes y la configuración principal.
- `src/app/count`: Componente funcional para el contador (`counter.components.ts`).
- `src/app.routes.ts`: Definición de rutas del lado cliente.
- `server.ts`: Configuración del servidor SSR.

---

## Log de Evolución

### 2026-03-04
- **Análisis de Proyecto**: Se identificó el uso de Angular v21 con soporte para SSR y Tailwind CSS.
- **Documentación**: Creación del archivo `aprendizaje-angular.md` para seguimiento.
- **Implementación de Signals**: Se integró `signal` para manejar el estado del contador de forma reactiva, asegurando que el valor no sea inferior a 0 mediante `Math.max`.

### 2026-03-08
- **Estructura de Navegación**: Creación de un componente Navbar compartido.
- **Rutas Anidadas**: Organización de páginas en `src/app/pages`.
- **Corrección de Rutas**: Aprendizaje sobre evitar el `/` inicial en las configuraciones de `Routes`.

---

## Conceptos Clave Aprendidos
1. **Angular SSR**: Hidratación en el servidor (Hydration). Un HTML inválido (como `<td>` fuera de `<table>`) rompe la hidratación (Error NG0500).
2. **Tailwind v4**: Uso de PostCSS.
3. **Signals (`signal`, `update`, `set`, `computed`)**:
    - `computed`: Crea un valor derivado reactivo que se actualiza automáticamente cuando cambian los signals de los que depende.
4. **Pipes**: Uso de `UpperCasePipe` directamente en el componente (`imports: [UpperCasePipe]`) para transformar texto en el template.
5. **Navegación (`RouterLink`, `RouterLinkActive`)**:
    - `routerLinkActive="clase"`: Aplica una clase cuando la ruta está activa.
    - `[routerLinkActiveOptions]="{ exact: true }"`: Esencial para la ruta raíz `/`, para evitar que siempre aparezca como "activa" cuando navegamos a otras rutas.
