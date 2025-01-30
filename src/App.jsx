import TransactionForm from "./Components/TransactionForm";
import TransactionList from "./Components/TransactionList";
import { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Snacks",
      amount: -20,
    },
    {
      id: 2,
      title: "Salary",
      amount: 100,
    },
    {
      id: 3,
      title: "Book",
      amount: -10,
    },
    {
      id: 4,
      title: "Cinema",
      amount: -50,
    },
  ]);

  const addTransaction = (title, amount) => {
    console.log("Add=>", title, amount);
    const newTxn = {
      id: transactions.length + 1, // Fixed typo here
      title: title,
      amount: +amount, // Ensure amount is parsed as a number
    };
    setTransactions([...transactions, newTxn]);
  };

  return (
    <>
      <h1>Expense Tracker</h1>
      <TransactionList transactions={transactions} />
      <TransactionForm addTransaction={addTransaction} />
    </>
  );
}

export default App;
