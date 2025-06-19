import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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
        <header className="bg-black shadow-md py-2 px-6 rounded-t-xl border-b-[2px] border-[#171717]">
            <div className="max-w-7xl mx-auto">
                <motion.p 
                    className="text-lg text-white"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {getTabName()}
                </motion.p>
            </div>
        </header>
    );
};

export default Header;
