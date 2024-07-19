import React from 'react';
import ExpenseChart from './components/ExpenseChart';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Expense Tracker</h1>
      </header>
      <main>
        <ExpenseChart />
      </main>
    </div>
  );
}

export default App
