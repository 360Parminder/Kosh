import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Plus, FileText, Trash2, AlertCircle } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const BankAccounts = () => {
    const [banks, setBanks] = useState([
        { id: 1, name: 'HDFC Bank', statements: [{ id: 1, name: 'January Statement.pdf', date: '2023-01-15' }] },
        { id: 2, name: 'ICICI Bank', statements: [] }
    ]);
    const [selectedBank, setSelectedBank] = useState(null);
    const [uploading, setUploading] = useState(false);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'application/pdf': ['.pdf'],
        },
        onDrop: acceptedFiles => {
            setUploading(true);
            // Simulate upload delay
            setTimeout(() => {
                if (selectedBank) {
                    const updatedBanks = banks.map(bank => {
                        if (bank.id === selectedBank.id) {
                            return {
                                ...bank,
                                statements: [
                                    ...bank.statements, 
                                    ...acceptedFiles.map((file, idx) => ({
                                        id: bank.statements.length + idx + 1,
                                        name: file.name,
                                        date: new Date().toISOString().split('T')[0]
                                    }))
                                ]
                            };
                        }
                        return bank;
                    });
                    setBanks(updatedBanks);
                    setUploading(false);
                }
            }, 1500);
        }
    });

    const addNewBank = () => {
        const name = prompt('Enter bank name:');
        if (name) {
            const newBank = {
                id: banks.length + 1,
                name,
                statements: []
            };
            setBanks([...banks, newBank]);
        }
    };

    const deleteStatement = (bankId, statementId) => {
        const updatedBanks = banks.map(bank => {
            if (bank.id === bankId) {
                return {
                    ...bank,
                    statements: bank.statements.filter(statement => statement.id !== statementId)
                };
            }
            return bank;
        });
        setBanks(updatedBanks);
    };

    return (
        <div className="min-h-screen p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto"
            >
                <h1 className="text-3xl font-bold mb-8">Bank Accounts</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Bank List */}
                    <div className="col-span-1 bg-[#1c1c1ccf] rounded-xl p-6 h-fit">
                        <h2 className="text-xl font-semibold mb-4 flex items-center">
                            <FileText className="mr-2" size={20} />
                            Your Banks
                        </h2>
                        <div className="space-y-3">
                            {banks.map((bank) => (
                                <motion.div
                                    key={bank.id}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelectedBank(bank)}
                                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                                        selectedBank?.id === bank.id ? 'bg-indigo-600' : 'bg-black hover:bg-black/30'
                                    }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span>{bank.name}</span>
                                        <span className="text-sm text-gray-300">{bank.statements.length} statements</span>
                                    </div>
                                </motion.div>
                            ))}

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={addNewBank}
                                className="p-4 rounded-lg cursor-pointer bg-black hover:bg-black/30 border border-dashed border-gray-500 flex justify-center items-center"
                            >
                                <Plus size={20} className="mr-2" />
                                <span>Add New Bank</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Statement Management */}
                    <div className="col-span-1 md:col-span-2 bg-[#1c1c1ccf] rounded-xl p-6">
                        {selectedBank ? (
                            <>
                                <h2 className="text-xl font-semibold mb-4">
                                    {selectedBank.name} - Statements
                                </h2>

                                {/* Upload area */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-6"
                                >
                                    <div
                                        {...getRootProps()}
                                        className="border-2 border-dashed border-indigo-400 bg-black rounded-xl p-8 text-center cursor-pointer hover:bg-black/30 transition-colors"
                                    >
                                        <input {...getInputProps()} />
                                        <Upload className="mx-auto mb-3" size={36} />
                                        <p className="text-lg mb-1">Drag & drop your bank statement PDF here</p>
                                        <p className="text-sm text-gray-400">or click to select files</p>
                                    </div>
                                </motion.div>

                                {/* Statements list */}
                                {selectedBank.statements.length > 0 ? (
                                    <div className="space-y-3">
                                        <h3 className="text-lg font-medium mb-3">Uploaded Statements</h3>
                                        {selectedBank.statements.map(statement => (
                                            <motion.div
                                                key={statement.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="flex justify-between items-center p-4 bg-black rounded-lg"
                                            >
                                                <div className="flex items-center">
                                                    <FileText size={18} className="mr-3 text-indigo-400" />
                                                    <div>
                                                        <p className="font-medium">{statement.name}</p>
                                                        <p className="text-sm text-gray-400">Uploaded on {statement.date}</p>
                                                    </div>
                                                </div>
                                                <motion.button
                                                    whileHover={{ scale: 1.1, color: '#f43f5e' }}
                                                    whileTap={{ scale: 0.9 }}
                                                    onClick={() => deleteStatement(selectedBank.id, statement.id)}
                                                    className="text-gray-400 hover:text-red-500 p-2"
                                                >
                                                    <Trash2 size={18} />
                                                </motion.button>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                                        <AlertCircle size={40} className="mb-3" />
                                        <p>No statements uploaded yet</p>
                                    </div>
                                )}

                                {uploading && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="mt-4 bg-indigo-900/30 p-4 rounded-lg"
                                    >
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mr-3"></div>
                                            <p>Uploading your statement...</p>
                                        </div>
                                    </motion.div>
                                )}
                            </>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center py-16 text-gray-400">
                                <FileText size={60} className="mb-4" />
                                <p className="text-xl mb-2">Select a bank to manage statements</p>
                                <p className="text-sm">or add a new bank to get started</p>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default BankAccounts;