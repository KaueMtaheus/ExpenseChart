import React, { useState } from 'react';
import ExpenseChart from './components/ExpenseChart';
import expenseData from './data/expenseData';

const App = () => {
  const [salary, setSalary] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [month, setMonth] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (month && amount) {
      setExpenses([...expenses, { month, amount: parseFloat(amount) }]);
      setMonth('');
      setAmount('');
    }
  };

  const updatedExpenseData = expenseData.map(item => {
    const expense = expenses.find(exp => exp.month === item.month);
    return {
      ...item,
      amount: expense ? expense.amount : item.amount
    };
  });

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <h1>Formulário de Despesas</h1>
        <form>
          <div>
            <label>Salário:</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div>
            <label>Mês:</label>
            <input
              type="text"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </div>
          <div>
            <label>Gasto:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleAddExpense}>
            Adicionar Gasto
          </button>
        </form>
      </div>
      <ExpenseChart data={updatedExpenseData} />
    </div>
  );
};

export default App;
