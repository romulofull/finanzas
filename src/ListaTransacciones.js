import React from 'react';

const ListaTransacciones = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((transaction, index) => (
        <li key={index}>
          {transaction.description} , ${transaction.amount} ({transaction.category}, {transaction.date})
        </li>
      ))}
    </ul>
  );
};

export default ListaTransacciones;
