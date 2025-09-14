# NavegaLasRutas - Proyecto E-commerce (Entrega Final)

## Descripción
Proyecto de ejemplo de e-commerce para la materia. Estructura componenteada con:
- `NavBar` (muestra brandName y logo).
- `CartWidget` con icono representativo.
- `ItemListContainer` y `ItemDetailContainer` para separar responsabilidades.
- `ItemList`, `Item`, `ItemDetail` para visualizar productos.
- `Checkout` con validaciones básicas de formulario.

Los datos están simulados en `src/data/products.js`.

## Instalación
1. Clonar el repositorio.
2. `npm install`
3. `npm run dev` (o `npm start` según tu configuración con Vite/CRA).

## Estructura importante
- `src/App.jsx` -> Ruteo y renderizado del `NavBar`.
- `src/components/navbar/NavBar.jsx` -> Bar superior con logo, brandName y links a categorías.
- `src/components/navbar/CartWidget.jsx` -> Icono de carrito mock.
- `src/components/containers/ItemListContainer.jsx` -> Lógica para obtener productos (por categoría).
- `src/components/containers/ItemDetailContainer.jsx` -> Lógica para obtener detalle por id.
- `src/components/item/ItemList.jsx`, `Item.jsx`, `ItemDetail.jsx` -> Presentación de productos.
- `src/components/checkout/Checkout.jsx` -> Formulario con validaciones.

## Notas importantes
- Reemplaza `src/assets/logo.png` por tu logo real si lo tenés (si no existe, se usa un placeholder).
- Las funciones de carrito están en modo mock (alertas/contador fijo) — integra tu contexto/Redux para funcionalidad real.
- Las imágenes de los productos usan URLs públicas (Unsplash). Puedes reemplazarlas por tus imágenes locales o remotas.

## Validaciones
El formulario de checkout valida:
- Nombre obligatorio.
- Email con formato básico.
- Teléfono opcional (solo números si se completa).

## Detalles de la entrega
- Se corrigieron los problemas de componentización y categorías conforme al requerimiento de preentregas.
- No se eliminaron ni modificaron recursos fuera del alcance solicitado.