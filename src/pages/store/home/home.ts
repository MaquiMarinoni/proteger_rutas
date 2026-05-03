//
import { PRODUCTS } from "../../../data/data";

const app = document.getElementById("app")!;

function renderProducts() {
    // Usamos .map() para transformar cada objeto Producto en una cadena de HTML
    const productsHTML = PRODUCTS.map(product => `
        <div class="product-card">
            <h3>${product.nombre}</h3>
            <p>Precio: $${product.precio}</p>
            <button>Agregar al carrito</button>
        </div>
    `).join(""); // .join("") convierte el array de strings en un solo string

    app.innerHTML = productsHTML;
}

// Ejecutamos la función al cargar
renderProducts();