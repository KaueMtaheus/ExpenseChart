import React, { useState } from 'react';
import ExpenseChart from './components/ExpenseChart';
import initialExpenseData from './data/expenseData';
import './App.css';

const App = () => {
  const [salary, setSalary] = useState('');
  const [expenses, setExpenses] = useState(initialExpenseData);
  const [month, setMonth] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (month && amount) {
      setExpenses(expenses.map(exp => 
        exp.month === month ? { ...exp, amount: parseFloat(amount) } : exp
      ));
      setMonth('');
      setAmount('');
    }
  };

  const totalYearlyExpense = expenses.reduce((total, entry) => total + entry.amount, 0);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '1px solid black', width: '500px', height: '100vh'}}>
      <h1 id='txt1'>Formulário de Despesas</h1>
        <form id='formDesp'>
          <div>
            <label className='labelTxt'>Salário:</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div>
          <label className='labelTxt' >Mês:</label>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value="">Selecione o mês</option>
              {initialExpenseData.map(exp => (
                <option key={exp.month} value={exp.month}>{exp.month}</option>
              ))}
            </select>
          </div>
          <div>
            <label className='labelTxt' >Gasto:</label>
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
      <ExpenseChart data={expenses} totalYearlyExpense={totalYearlyExpense} />
    </div>
  );
};

export default App;
