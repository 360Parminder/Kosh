import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Wallet, DollarSign, TrendingUp } from 'lucide-react';

// Sample service data
const servicesData = [
    { name: 'Netflix', logo: '🎬', amount: '$15.99', lastPaid: '15 Aug 2023' },
    { name: 'Google Drive', logo: '☁️', amount: '$9.99', lastPaid: '10 Aug 2023' },
    { name: 'Spotify', logo: '🎵', amount: '$12.99', lastPaid: '05 Aug 2023' },
    { name: 'Amazon Prime', logo: '📦', amount: '$14.99', lastPaid: '02 Aug 2023' },
];

// Sample transaction data
const transactionData = [
    { id: 1, description: 'Netflix Subscription', date: '2023-08-15', amount: -15.99, category: 'Entertainment', account: 'Main Account' },
    { id: 2, description: 'Salary Deposit', date: '2023-08-10', amount: 3000, category: 'Income', account: 'Main Account' },
    { id: 3, description: 'Google Drive Subscription', date: '2023-08-10', amount: -9.99, category: 'Software', account: 'Secondary Account' },
    { id: 4, description: 'Grocery Shopping', date: '2023-08-08', amount: -120.50, category: 'Food', account: 'Main Account' },
    { id: 5, description: 'Spotify Premium', date: '2023-08-05', amount: -12.99, category: 'Entertainment', account: 'Secondary Account' },
    { id: 6, description: 'Amazon Prime', date: '2023-08-02', amount: -14.99, category: 'Shopping', account: 'Main Account' },
];

// Sample account balance data for charts
const accountData = [
    { name: '1 Aug', MainAccount: 5000, SecondaryAccount: 2000 },
    { name: '8 Aug', MainAccount: 4800, SecondaryAccount: 1950 },
    { name: '15 Aug', MainAccount: 7800, SecondaryAccount: 1900 },
    { name: '22 Aug', MainAccount: 7400, SecondaryAccount: 1800 },
    { name: '29 Aug', MainAccount: 7200, SecondaryAccount: 2200 },
];

const Home = () => {
    const [timePeriod, setTimePeriod] = useState('week');
    
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="p-6 dark:bg-black dark:text-white text-black min-h-screen">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <motion.div 
                    className=" p-4 rounded-lg transition-shadow shadow hover:shadow-md border border-[#171717]"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-blue-900 text-blue-300 mr-4">
                            <Wallet size={24} />
                        </div>
                        <div>
                            <p className="text-sm ">Total Balance</p>
                            <p className="text-2xl font-semibold ">$9,400.00</p>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className=" p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-[#171717]"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-red-900 text-red-300 mr-4">
                            <DollarSign size={24} />
                        </div>
                        <div>
                            <p className="text-sm ">Monthly Expenses</p>
                            <p className="text-2xl font-semibold ">$374.46</p>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className=" p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-[#171717]"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    <div className="flex items-center">
                        <div className="p-3 rounded-full bg-green-900 text-green-300 mr-4">
                            <TrendingUp size={24} />
                        </div>
                        <div>
                            <p className="text-sm ">Savings Rate</p>
                            <p className="text-2xl font-semibold ">12%</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            {/* Subscriptions Section */}
            <h2 className="text-xl font-bold mb-4 dark:text-gray-200 text-gray-800">Most Used Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {servicesData.map((service, index) => (
                    <motion.div 
                        key={index}
                        className="p-4 rounded-lg shadow hover:shadow-md cursor-pointer border border-[#171717]"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full text-2xl">
                                {service.logo}
                            </div>
                            <div className="text-right">
                                <p className="font-medium dark:text-gray-100 text-gray-900">{service.name}</p>
                                <p className="text-xs dark:text-gray-400">Last paid: {service.lastPaid}</p>
                                <p className="font-semibold text-sm mt-1 dark:text-gray-300">{service.amount}/month</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Account Balance Chart */}
            <motion.div 
                className="bg-gray-800 p-4 rounded-lg shadow mb-6 border border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-xl font-bold mb-4 text-gray-200">Account Balance</h2>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={accountData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="name" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip 
                                formatter={(value) => `$${value}`}
                                contentStyle={{ backgroundColor: '#1F2937', borderColor: '#4B5563', color: '#F3F4F6' }}
                            />
                            <Legend wrapperStyle={{ color: '#F3F4F6' }} />
                            <Line type="monotone" dataKey="MainAccount" stroke="#8B5CF6" activeDot={{ r: 8 }} name="Main Account" />
                            <Line type="monotone" dataKey="SecondaryAccount" stroke="#10B981" name="Secondary Account" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>
            
            {/* Transactions Table */}
            <motion.div 
                className="bg-gray-800 p-4 rounded-lg shadow border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-200">Recent Transactions</h2>
                    <div className="flex space-x-2">
                        <button 
                            className={`px-3 py-1 rounded ${timePeriod === 'day' ? 'bg-blue-600 text-gray-100' : 'bg-gray-700 text-gray-300'}`}
                            onClick={() => setTimePeriod('day')}
                        >
                            Day
                        </button>
                        <button 
                            className={`px-3 py-1 rounded ${timePeriod === 'week' ? 'bg-blue-600 text-gray-100' : 'bg-gray-700 text-gray-300'}`}
                            onClick={() => setTimePeriod('week')}
                        >
                            Week
                        </button>
                        <button 
                            className={`px-3 py-1 rounded ${timePeriod === 'month' ? 'bg-blue-600 text-gray-100' : 'bg-gray-700 text-gray-300'}`}
                            onClick={() => setTimePeriod('month')}
                        >
                            Month
                        </button>
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-gray-700">
                            <tr>
                                <th className="py-2 px-4 text-left text-sm font-medium text-gray-300">Description</th>
                                <th className="py-2 px-4 text-left text-sm font-medium text-gray-300">Date</th>
                                <th className="py-2 px-4 text-left text-sm font-medium text-gray-300">Amount</th>
                                <th className="py-2 px-4 text-left text-sm font-medium text-gray-300">Category</th>
                                <th className="py-2 px-4 text-left text-sm font-medium text-gray-300">Account</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactionData.map((transaction) => (
                                <motion.tr 
                                    key={transaction.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="border-b border-gray-700"
                                >
                                    <td className="py-2 px-4 text-gray-300">{transaction.description}</td>
                                    <td className="py-2 px-4 text-gray-300">{transaction.date}</td>
                                    <td className={`py-2 px-4 ${transaction.amount < 0 ? 'text-red-400' : 'text-green-400'}`}>
                                        ${Math.abs(transaction.amount).toFixed(2)}
                                    </td>
                                    <td className="py-2 px-4 text-gray-300">{transaction.category}</td>
                                    <td className="py-2 px-4 text-gray-300">{transaction.account}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;