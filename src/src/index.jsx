import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom'; // render is deprecated
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);