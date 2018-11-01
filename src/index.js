import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import './main.css';
import Routes from './router';

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);