import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJwNVjGC7wGu_RfoGYzVOflygJEykg3tQ",
    authDomain: "d-shop-ed2df.firebaseapp.com",
    projectId: "d-shop-ed2df",
    storageBucket: "d-shop-ed2df.appspot.com",
    messagingSenderId: "902131192278",
    appId: "1:902131192278:web:3eed72d69174cd7e545477"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function FinalizarCompra({ total }) {
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const collectionRef = collection(db, 'orders');
      const response = await addDoc(collectionRef, {
        nombre,
        direccion,
        email,
        total,
      });

      console.log('Orden creada correctamente', response.id);
      navigate('/finalizar-compra');
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <label>
          Dirección:
          <input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Pagar</button>
      </form>
      <p>Total: ${total}</p>
    </div>
  );
}

export default FinalizarCompra;