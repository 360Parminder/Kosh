import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    
    // Extract the current tab name from the path
    const getTabName = () => {
        const path = location.pathname;
        // Remove leading slash and capitalize first letter
        const tabName = path.substring(1).split('/')[0];
        if (!tabName) return 'Dashboard'; // Default name
        return tabName.charAt(0).toUpperCase() + tabName.slice(1);
    };

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="tab-title">{getTabName()}</h1>
            </div>
            <style jsx>{`
                .header {
                    padding: 16px 24px;
                    background-color: #ffffff;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                }
                .header-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .tab-title {
                    color: #000000;
                    font-size: 24px;
                    font-weight: 600;
                    margin: 0;
                }
            `}</style>
        </header>
    );
};

export default Header;