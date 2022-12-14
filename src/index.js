import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<App />);