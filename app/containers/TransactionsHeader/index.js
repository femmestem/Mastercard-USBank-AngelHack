import React from 'react';
import pieGraph from './pie-graph.png';

import styles from './styles.css';

const TransactionsHeader = (props) => {
    return (
        <div className={`row ${styles.container}`}>
            <div className={`column small-8`}>
                <h2>Spending by Category</h2>
                <img src={pieGraph} />
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
                    <span>$</span>2467
                </span>
            </div>
        </div>
    );
};

export default TransactionsHeader;