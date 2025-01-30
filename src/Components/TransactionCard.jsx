const TransactionCard = (props) => {
    const { transactions } = props;
    const transactiontype = transactions.amount < 0 ? "negative" : "positive";
    return (
        <div key={transactions.id} className={`transaction-card ${transactiontype}`}>
            <span>{transactions.title}</span>
            <span>${transactions.amount}</span>
        </div>
    );
};

export default TransactionCard;
