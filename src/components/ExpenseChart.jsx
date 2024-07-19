import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const ExpenseChart = ({ data }) => {
  const totalYearlyExpense = data.reduce((total, entry) => total + entry.amount, 0);

  return (
    <div>
      <h2>Gráfico Mensal</h2>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
      <div>
        <h3>Total Gasto no Ano: R$ {totalYearlyExpense.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ExpenseChart;
