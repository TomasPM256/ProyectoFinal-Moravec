// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig"; // tu config de Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Trae todos los productos
export async function getProducts() {
  const productsCol = collection(db, "products"); // nombre exacto de la colección
  const snapshot = await getDocs(productsCol);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Trae productos por categoría
export async function getProductsByCategory(catId) {
  const productsCol = collection(db, "products");
  const q = query(productsCol, where("category", "==", catId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Trae producto por ID
export async function getProductById(id) {
  const d = doc(db, "products", id);
  const snap = await getDoc(d);
  if (!snap.exists()) throw new Error("Producto no encontrado");
  return { id: snap.id, ...snap.data() };
}

// Crear orden
export async function createOrder(order) {
  const ordersCol = collection(db, "orders");
  const ref = await addDoc(ordersCol, order);
  return ref.id;
}
