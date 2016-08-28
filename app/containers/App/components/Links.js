import React from 'react';
import { Link } from 'react-router';
import styles from './Links.css';

const MyComponent = (props) => {
    return (
        <div className={`column small-12`}>
            <ul className={`row ${styles.links}`}>
                <li className={`column shrink ${styles.link}`}>
                    <Link to="/" activeClassName={styles.active}>Transactions</Link>
                </li>
                <li className={`column shrink ${styles.link}`}>
                    <Link to="/forecast" activeClassName={styles.active}>Forecast</Link>
                </li>
            </ul>
        </div>
    );
};

export default MyComponent;