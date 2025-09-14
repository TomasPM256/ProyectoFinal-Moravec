const products = [
    {
        id: "1",
        title: "Remera básica",
        price: 2500,
        category: "ropa",
        description: "Remera unisex de algodón, talle único disponible.",
        image: "../../images/02165157001_0.webp",
        stock: 12,
    },
    {
        id: "2",
        title: "Zapatillas Run",
        price: 12000,
        category: "calzado",
        description: "Zapatillas de running, suela amortiguada.",
        image: "../../images/zapatillas-de-running-adidas-runfalcon-5-azul-100010ie8809001-1.jpg",
        stock: 6,
    },
    {
        id: "3",
        title: "Auriculares",
        price: 18000,
        category: "electronica",
        description: "Auriculares bluetooth con cancelación de ruido.",
        image: "../../images/D_958843-MLA91568071748_092025-C.jpg",
        stock: 4,
    },
    {
        id: "4",
        title: "Perfume Citrus",
        price: 7600,
        category: "perfumes",
        description: "Aroma fresco con notas cítricas.",
        image: "../../images/1153323.jpg",
        stock: 8,
    },
];

export function fetchProducts(categoryId = null) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!categoryId) resolve(products);
            else resolve(products.filter((p) => p.category === categoryId));
        }, 300);
    });
}

export function fetchProductById(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p = products.find((x) => x.id === id);
            if (!p) reject(new Error("Producto no encontrado"));
            else resolve(p);
        }, 300);
    });
}
