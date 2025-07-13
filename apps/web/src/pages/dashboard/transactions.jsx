import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Transactions = () => {
    // Sample data - replace with your actual data source
    const [transactions, setTransactions] = useState([
        { id: 1, date: '2023-06-01', paymentName: 'Grocery Store', paymentType: 'Debit Card', amount: -120.50 },
        { id: 2, date: '2023-06-03', paymentName: 'Salary Deposit', paymentType: 'Bank Transfer', amount: 3000.00 },
        { id: 3, date: '2023-06-05', paymentName: 'Electric Bill', paymentType: 'Automatic Payment', amount: -85.75 },
        { id: 4, date: '2023-06-10', paymentName: 'Restaurant', paymentType: 'Credit Card', amount: -45.20 },
        { id: 5, date: '2023-06-15', paymentName: 'Freelance Work', paymentType: 'PayPal', amount: 500.00 },
    ]);

    // State for filters
    const [month, setMonth] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTransactions, setFilteredTransactions] = useState(transactions);

    // Account information
    const accountInfo = {
        accountNumber: '****3456',
        currency: 'USD'
    };

    // Calculate total amount
    const totalTransactions = filteredTransactions.reduce((sum, transaction) => sum + transaction.amount, 0).toFixed(2);

    // Filter transactions based on month and search term
    useEffect(() => {
        let filtered = [...transactions];

        // Filter by month
        if (month !== 'all') {
            filtered = filtered.filter(t => {
                const transactionMonth = new Date(t.date).getMonth();
                return transactionMonth === parseInt(month);
            });
        }

        // Filter by search term
        if (searchTerm) {
            filtered = filtered.filter(t =>
                t.paymentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                t.paymentType.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredTransactions(filtered);
    }, [month, searchTerm, transactions]);

    // Generate months for filter dropdown
    const months = [
        { value: '0', label: 'January' },
        { value: '1', label: 'February' },
        { value: '2', label: 'March' },
        { value: '3', label: 'April' },
        { value: '4', label: 'May' },
        { value: '5', label: 'June' },
        { value: '6', label: 'July' },
        { value: '7', label: 'August' },
        { value: '8', label: 'September' },
        { value: '9', label: 'October' },
        { value: '10', label: 'November' },
        { value: '11', label: 'December' }
    ];

    // Format date for display
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-primary text-gray-100">
            <div className="container mx-auto px-4 py-8 max-w-6xl">
                {/* <h1 className="text-3xl font-bold mb-6">Transactions</h1> */}

                {/* Summary Card */}
                <motion.div
                    className="rounded-lg shadow-lg p-6 mb-8 bg-secondary border border-border"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold ">
                            {accountInfo.currency} {totalTransactions}
                        </h2>
                        <p className="text-sm mt-2 md:mt-0 text-gray-400">
                            Total balance from account {accountInfo.accountNumber} | <span className='text-blue-500'>{accountInfo.currency}</span>
                        </p>
                    </div>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-end items-end mb-6">
                    <div className="flex flex-row gap-3 w-full md:w-auto justify-end">
                        <div className="relative w-full md:w-28">
                            <input
                                type="text"
                                className="block w-full pl-4 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-secondary border-border text-white"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            
                        </div>
                        <div className="relative w-full md:w-28">
                            <select
                                className="block w-full px-2 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-secondary border-border text-white"
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                            >
                                <option value="all">All Months</option>
                                {months.map((m) => (
                                    <option key={m.value} value={m.value}>
                                        {m.label} 2025
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                {/* Transactions Table */}
                <motion.div
                    className="rounded-lg shadow-lg overflow-hidden bg-secondary border border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                                        Payment Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                                        Payment Type
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-300">
                                        Amount ({accountInfo.currency})
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {filteredTransactions.length > 0 ? (
                                    filteredTransactions.map((transaction) => (
                                        <motion.tr
                                            key={transaction.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            layout
                                            className="hover:bg-hover"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                                {formatDate(transaction.date)}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                                {transaction.paymentName}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                                {transaction.paymentType}
                                            </td>
                                            <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-right ${transaction.amount >= 0 ? 'text-green-400' : 'text-red-400'
                                                }`}>
                                                {transaction.amount >= 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                                            </td>
                                        </motion.tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-400">
                                            No transactions found matching your filters
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Transactions;