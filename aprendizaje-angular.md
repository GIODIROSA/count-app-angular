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

---

## Conceptos Clave Aprendidos
1. **Angular SSR**: La estructura incluye archivos específicos para servidor como `app.config.server.ts` y `main.server.ts`, lo que indica una hidratación del lado del servidor.
2. **Tailwind v4**: Se observa la integración de `@tailwindcss/postcss` en las dependencias de desarrollo.
3. **Signals (`signal`, `update`, `set`)**:
    - `signal(initialValue)`: Crea un valor reactivo.
    - `update(fn)`: Permite actualizar el valor basado en el estado anterior. Es ideal para lógica condicional como `Math.max(0, current + value)`.
    - `set(value)`: Reemplaza el valor directamente (útil para el `reset`).
