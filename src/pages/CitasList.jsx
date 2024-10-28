import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const CitasList = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    // Asegúrate de que el nombre de la colección en Firestore sea el correcto: 'Clinicals'
    const unsubscribe = onSnapshot(collection(db, 'Clinicals'), (snapshot) => {
      const citasData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCitas(citasData);
    });

    return () => unsubscribe();  // Limpia el listener al desmontar el componente
  }, []);

  return (
    <section class= "citas-list">  
      <div>
        {citas.length === 0 ? (
          <p>No hay citas registradas.</p>
        ) : (
          citas.map((cita) => (
            <div key={cita.id}>
              <h3>{cita.name}</h3>
              <p>{new Date(cita.date).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CitasList;
