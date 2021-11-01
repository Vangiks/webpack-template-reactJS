import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '@/shared/HelloWorld.jsx';

window.addEventListener('load', () => {
    ReactDOM.render(<HelloWorld />, document.getElementById('react-app'));
});