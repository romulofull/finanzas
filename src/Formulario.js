import React, { useState } from 'react';

const Formulario = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Comida');
  const [date, setDate] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ description, amount: parseFloat(amount), category, date });
    setDescription('');
    setAmount('');
    setCategory('Comida');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descripcion"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Comida">Comida</option>
        <option value="Transporte">Transporte</option>
        <option value="Ingresos">Ingresos</option>
        <option value="Educacion">Educacion</option>
        <option value="Ropa">Ropa</option>
        <option value="Salud">Salud</option>
        <option value="OtrosIngresos">OtrosIngresos</option>
        <option value="Gym">Gym</option>
        <option value="Otros Gastos">Otros Gastos</option>
      </select>
      <input
        type="date" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Agregar Transaccion</button>
    </form>
  );
};

export default Formulario;
