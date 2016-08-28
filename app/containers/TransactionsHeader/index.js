import React from 'react';
import styles from './styles.css';

const TransactionsHeader = (props) => {
    return (
        <div className={`row ${styles.container}`}>
            <div className={`column small-8`}>
                <h2>Spending by Category</h2>
                {/* Pie Chart */}
            </div>

            <div className={`column small-4 text-left`}>
                <select name="month" id="month-select">
                    <option value="mtd">Month to Date</option>
                </select>

                <h3>Budget</h3>
                <span className={`money`}>
                    <span>$</span>3000
                </span>

                <h3>Actual</h3>
                <span className={`money`}>
                    <span>$</span>3000
                </span>
            </div>
        </div>
    );
};

export default TransactionsHeader;