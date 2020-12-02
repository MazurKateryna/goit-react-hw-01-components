import React from 'react';
import PropTypes from "prop-types";
import styles from '../Transaction/transaction.module.css'

function TransactionHistory ({ transactions }) {
  return (
    <table className={styles.transaction}>
      <thead className={styles.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
      {transactions.map(item => (
        <tr key={item.id} className={styles.item}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
        )           
      )}
      </tbody>
    </table>
  )
};
TransactionHistory.propTypers = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default TransactionHistory;