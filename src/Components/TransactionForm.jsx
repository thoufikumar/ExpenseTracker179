import { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) {
      alert("Please enter both title and amount");
      return;
    }
    addTransaction(title, amount);
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Transaction</h2>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
