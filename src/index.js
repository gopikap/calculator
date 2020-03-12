import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Calculator } from './Components/Calculator';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div id="main">
        <h1>Simple React Calculator</h1>
        <Calculator />
    </div>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
