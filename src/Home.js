import React from 'react';
import Formulario from './Formulario';
import ListaTransacciones from './ListaTransacciones';
import Resumen from './Resumen';
import Charts from './Charts';
import './estilos.css'

const Home = ({ transactions, onAdd }) => {
 
  const data = transactions.map(t => ({
    date: new Date(t.date).toLocaleDateString(), 
    income: t.amount > 0 ? t.amount : 0,
    expense: t.amount < 0 ? Math.abs(t.amount) : 0
  }));

  data.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="home-container">
      <div className="left-panel">
      <h1>Mis Finanzas</h1>
        <Formulario onAdd={onAdd} />
        <Resumen transactions={transactions} />
        <h2>Detalle de Transacciones</h2>
        <ListaTransacciones transactions={transactions} />
      </div>
      <div className="right-panel">
        <h2>Gráfico</h2>
        <Charts data={data} />
      </div>
    </div>
  );
};

export default Home;
