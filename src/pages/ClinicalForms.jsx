import React, { useState } from 'react';
import { db } from '../Firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

const ClinicalForms = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'Clinicals'), { name, date });
      setName('');
      setDate('');
      alert('Cita registrada con exito!');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del paciente"
        required
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Registrar Cita</button>
    </form>
  );
};

export default ClinicalForms;
