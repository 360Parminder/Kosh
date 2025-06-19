import React from 'react';
import { Link } from 'react-router-dom';
import { 
    Settings, 
    HelpCircle, 
    MoreVertical, 
    Home, 
    DollarSign, 
    FileText, 
    CreditCard, 
    Box 
} from 'lucide-react';

const SideBar = ({ user }) => {
        // Default user if not provided
        const defaultUser = {
                name: 'John Doe',
                email: 'john.doe@example.com',
                avatar: 'https://via.placeholder.com/40'
        };
        
        const currentUser = user || defaultUser;
        
        const tabs = [
                { name: 'Dashboard', icon: <Home size={20} />, path: '/dashboard' },
                { name: 'Transactions', icon: <DollarSign size={20} />, path: '/transactions' },
                { name: 'Reports', icon: <FileText size={20} />, path: '/reports' },
                { name: 'Payments', icon: <CreditCard size={20} />, path: '/payments' },
                { name: 'Subscriptions', icon: <Box size={20} />, path: '/subscriptions' },
                { name: 'Accounts', icon: <Box size={20} />, path: '/accounts' }
        ];

        return (
                <div className="flex flex-col h-screen bg-white  dark:bg-[#171717] dark:text-white w-64">
                        {/* App Logo */}
                        <div className="p-4">
                                <img 
                                        src="/logo.svg" 
                                        alt="Kosh Logo" 
                                        className="h-10"
                                />
                        </div>

                        {/* Navigation Tabs */}
                        <nav className="flex-grow mt-6">
                                <ul>
                                        {tabs.map((tab, index) => (
                                                <li key={index}>
                                                        <Link 
                                                                to={tab.path}
                                                                className="flex items-center px-6 py-3 hover:bg-gray-800 mx-2 my-1 rounded-lg text-gray-700 hover:text-white transition-colors duration-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                                                        >
                                                                <span className="mr-3">{tab.icon}</span>
                                                                <span>{tab.name}</span>
                                                        </Link>
                                                </li>
                                        ))}
                                </ul>
                        </nav>

                        {/* Help and Settings */}
                        <div className="px-6 py-3">
                                <Link 
                                        to="/settings"
                                        className="flex items-center  hover:text-indigo-600 mb-3"
                                >
                                        <Settings className="mr-3" size={18} />
                                        <span>Settings</span>
                                </Link>
                                <Link 
                                        to="/help"
                                        className="flex items-center  hover:text-indigo-600"
                                >
                                        <HelpCircle className="mr-3" size={18} />
                                        <span>Get Help</span>
                                </Link>
                        </div>

                        {/* User Profile */}
                        <div className="mt-auto p-4 ">
                                <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                                <img
                                                        src={currentUser.avatar}
                                                        alt="User avatar"
                                                        className="w-10 h-10 rounded-full mr-3"
                                                />
                                                <div>
                                                        <p className="font-medium ">{currentUser.name}</p>
                                                        <p className="text-sm ">{currentUser.email}</p>
                                                </div>
                                        </div>
                                        <button className=" hover:text-gray-700">
                                                <MoreVertical size={18} />
                                        </button>
                                </div>
                        </div>
                </div>
        );
};

export default SideBar;