import React from 'react';
import { Link } from 'react-router';

import styles from './NavBar.css';
import logo from './US-Bank-Logo.png';


const NavBar = (props) => {
    return (
        <nav className={`row row--fullWidth ${styles.navbar}`}>
            <div className={`column small-12`}>
                <div className={`row align-justify`}>
                    <div className={`column shrink`}>
                        <Link to="/">
                            <img src={logo} className={styles.logo}/>
                        </Link>
                    </div>
                    <div className={`column shrink ${styles.user}`}>
                        Jo Doe <span>Logout</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;