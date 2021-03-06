/**
*
* App.react.js
*
* This component is the skeleton around the actual pages, and should only
* contain code that should be seen on all pages. (e.g. navigation bar)
*
* NOTE: while this component should technically be a stateless functional
* component (SFC), hot reloading does not currently support SFCs. If hot
* reloading is not a neccessity for you then you can refactor it and remove
* the linting exception.
*/

import React from 'react';

import styles from './styles.css';

import NavBar from './components/NavBar';
import Links from './components/Links';
import Advert from './components/Advert';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

    static propTypes = {
        children: React.PropTypes.node,
    };

    render() {
        return (
            <div>
                <NavBar />
                <div className={`row`}>
                    <div className={`columns small-12 ${styles.container}`}>
                        <div className={`row align-justify ${styles.topBar}`}>
                            <Links />
                            <Advert />
                        </div>
                        {React.Children.toArray(this.props.children)}
                    </div>
                </div>
            </div>
        );
    }
}
