import React from 'react';
import Charts from './Charts';

const Reportes = ({ transactions }) => {
  const data = transactions.map(t => ({
    date: new Date(t.date).toLocaleDateString(), 
    income: t.amount > 0 ? t.amount : 0,
    expense: t.amount < 0 ? Math.abs(t.amount) : 0
  }));

  return (
    <div>
      <h1>Reportes</h1>
      <Charts data={data} />
    </div>
  );
};

export default Reportes;
