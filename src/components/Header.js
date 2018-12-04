import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container space-between">
            <span className="header__branding">Chatt</span>
            <span className="header__user-count">0 Users</span>
        </div>
    </div>
);

export default Header;