import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/content/Content'


document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    
    ReactDOM.render(
        <div id="react-tables">
            <Navigation></Navigation>
            <div id="right-side">
                <Header></Header>
                <Content></Content>
            </div>
        </div>
    , app);
});