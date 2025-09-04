import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase"; // tu configuración de Firebase

// Trae todos los productos
export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Trae productos filtrados por categoría
export const getProductsByCategory = async (categoryId) => {
    const q = query(
        collection(db, "productos"),
        where("category", "==", categoryId)
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
