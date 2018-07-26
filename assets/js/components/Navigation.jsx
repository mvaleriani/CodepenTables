import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="menu">
                <li id="menu-opt-0" className="menu-opt">0</li>
                <li className="menu-opt">1</li>
                <li className="menu-opt">2</li>
                <li className="menu-opt">3</li>
            </nav>
        );
    }
}

export default Navigation;