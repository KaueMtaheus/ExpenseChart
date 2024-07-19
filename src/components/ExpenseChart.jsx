import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import expenseData from '../data/expenseData';

const ExpenseChart = () => {
  return (
    <div>
      <h2>Gastos por Mês</h2>
      <LineChart width={600} height={300} data={expenseData}>
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default ExpenseChart;
