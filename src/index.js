import React from 'react';
import ReactDOM from 'react-dom';

const greeting = <h1>Hello world</h1>;

const divRoot = document.querySelector('#root');

ReactDOM.render(greeting, divRoot);