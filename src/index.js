import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import list from './data/data';
//The app is now passing the data as a property
ReactDOM.render(<App list={list} />, document.getElementById('root'));
