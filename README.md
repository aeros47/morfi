# Morfi

Planificador semanal de comidas y lista de compras para la familia. Basado en [Morfi Familiar](https://github.com/AbelG88/morfi).

- **Hoy:** ruleta de comidas y sugerencias según los ingredientes que hay en casa.
- **Semana:** calendario de almuerzos, cenas y meriendas, con cambio por comida.
- **Comidas:** banco de comidas filtrable por persona.
- **Compras:** lista armada sola según la semana.

## Código público, datos privados

El código de este repo es público. Los datos personales **no** van acá.

- `config.example.js` tiene una familia de ejemplo inventada (Juan, Laura, Tomi y Sofi) con sus reglas de comida.
- `config.js` es tu configuración real. Está en `.gitignore`, así que nunca se sube a GitHub. Si existe, reemplaza al ejemplo.
- Lo que marcás en la app (semanas, compras, exclusiones) queda en el navegador. Próximamente: sincronización privada con tu Google Drive.

Para probar con tus datos en tu compu, copiá `config.example.js` como `config.js` y editalo.

Es una app estática, sin dependencias. Se publica con GitHub Pages.
