// src/pages/store/home/home.ts
import { PRODUCTS } from "../../../data/data"; // Tu ruta ajustada
import type { Product } from "../../../types/product"; // Importa la interfaz para el tipado

const app = document.getElementById("app")!;

// Función simple para listar nombres en pantalla
function renderizarCatalogo() {
    // Si el contenedor está vacío, lo llenamos
    app.innerHTML = `<h1>Catálogo de Productos</h1> <div id="catalog-list"></div>`;
    
    const container = document.getElementById("catalog-list")!;
    
    PRODUCTS.forEach((product: Product) => {
        const card = document.createElement("div");
        card.innerHTML = `
            <h3>${product.nombre}</h3>
            <p>Precio: $${product.precio}</p>
        `;
        container.appendChild(card);
    });
}

// Ejecutamos
renderizarCatalogo();