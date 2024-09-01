import React from 'react';

const Resumen = ({ transactions }) => {
  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  return (
    <div>
      <h2>Resumen</h2>
      <p>Ingresos: ${income}</p>
      <p>Gastos: ${expense}</p>
      <p>Utilidad: ${income - expense}</p>
    </div>
  );
};

export default Resumen;
