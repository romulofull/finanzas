import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Reportes from './Reportes';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home transactions={transactions} onAdd={addTransaction} />} />
        <Route path="/reportes" element={<Reportes transactions={transactions} />} />
      </Routes>
    </Router>
  );
};

export default App;
