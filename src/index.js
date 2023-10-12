import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// based on the answer here https://stackoverflow.com/questions/75984790/react-script-error-http-localhost3000-static-js-bundle-js
// the refresh of page gives uncaught error 
// so it is prefered not to use create-react-app
// but i used it based on task requirement
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
