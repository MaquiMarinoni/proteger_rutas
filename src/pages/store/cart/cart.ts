
import type { CartItem } from "../cart/cartItem";
import type { Product } from "../../../types/product";

export function addToCart(product: Product) {
    // 1. Obtener carrito actual o crear uno vacío
    const cartString = localStorage.getItem("cart");
    const cart: CartItem[] = cartString ? JSON.parse(cartString) : [];

    // 2. ¿El producto ya está?
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex !== -1) {
        // Si existe, incrementamos cantidad
        cart[existingIndex].quantity += 1;
    } else {
        // Si no, lo agregamos con cantidad 1
        cart.push({ ...product, quantity: 1 });
    }

    // 3. Guardar de nuevo
    localStorage.setItem("cart", JSON.stringify(cart));
    
    console.log("Carrito actualizado:", cart);
}