import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Charts = ({ data }) => {
  return (
    <LineChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="income" stroke="#8884d8" />
      <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Charts;
