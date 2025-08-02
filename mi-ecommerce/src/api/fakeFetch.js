import { products } from '../mocks/products';

export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 1000);
    });
};

export const fetchProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(p => p.id === id);
            product ? resolve(product) : reject('Producto no encontrado');
        }, 1000);
    });
};