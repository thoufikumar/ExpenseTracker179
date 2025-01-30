import TransactionCard from './TransactionCard';

const TransactionList = (props) => {
    return (
        <>
            <div>History</div>
            <hr />
            {props.transactions.map((transaction) => (
                <TransactionCard key={transaction.id} transactions={transaction} />
            ))}
        </>
    );
};

export default TransactionList;
