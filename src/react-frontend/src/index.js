import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const root = document.getElementById('root');
const baseUrl = root.getAttribute('baseurl');
console.log(baseUrl)
ReactDOM.render(
<CookiesProvider>
    <App baseurl={baseUrl} />
</CookiesProvider>, root);
registerServiceWorker();
