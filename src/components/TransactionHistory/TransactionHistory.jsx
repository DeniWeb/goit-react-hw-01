import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_container}>
      <thead className={css.transaction_header}>
        <tr>
          <th className={css.transaction_header_title}>Type</th>
          <th className={css.transaction_header_title}>Amount</th>
          <th className={css.transaction_header_title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.transaction_body_text}>{item.type}</td>
            <td className={css.transaction_body_text}>{item.amount}</td>
            <td className={css.transaction_body_text}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
