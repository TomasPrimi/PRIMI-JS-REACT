import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, doc, collection, writeBatch,} from "firebase/firestore";
import {products} from "../ItemList/ItemListContainer";

const firebaseConfig = {
  apiKey: "AIzaSyAJwNVjGC7wGu_RfoGYzVOflygJEykg3tQ",
  authDomain: "d-shop-ed2df.firebaseapp.com",
  projectId: "d-shop-ed2df",
  storageBucket: "d-shop-ed2df.appspot.com",
  messagingSenderId: "902131192278",
  appId: "1:902131192278:web:3eed72d69174cd7e545477"
};

export const db = getFirestore(app);

export async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");

  console.log(orderData);

  const response = await addDoc(collectionRef, orderData);
  console.log("Orden creada correctamente", response.id);

  return response.id;
}

export async function exportData() {

  const collectionRef = collection(db, "products");

  for (let product of products) {
    const { id } = await addDoc(collectionRef, product);
    console.log("Documento creado", id);
  }
}

export async function exportDataWithBatch() {
  const batch = writeBatch(db);
  const collectionRef = collection(db, "products");

  for (let product of products) {
    const newDoc = doc(collectionRef);
    batch.set(newDoc, product);
  }

  const resp = await batch.commit();
  console.log(resp);
}
const app = initializeApp(firebaseConfig);