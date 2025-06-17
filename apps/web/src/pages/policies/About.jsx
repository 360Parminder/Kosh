import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Sun, Moon } from 'lucide-react';

const About = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Check for user's preferred color scheme
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
            <div className="container mx-auto px-4 py-12">
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl font-bold mb-8">About Us</h1>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`rounded-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                    >
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="mb-4">
                            At Kosh, our mission is to revolutionize financial management through innovative technology solutions. We strive to make financial tools accessible, intuitive, and powerful for everyone.
                        </p>
                        <p>
                            Founded in 2023, we've been dedicated to building products that help individuals and businesses thrive in today's complex financial landscape.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className={`rounded-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                    >
                        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Trust and transparency in all operations</li>
                            <li>Innovation that solves real problems</li>
                            <li>Accessibility and inclusivity in financial tools</li>
                            <li>Security and privacy as foundational principles</li>
                            <li>Customer-centric approach to development</li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className={`mt-12 p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
                >
                    <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                    <p className="mb-6">
                        We're a diverse team of engineers, designers, and financial experts passionate about creating the best financial management tools possible.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {['Leadership', 'Engineering', 'Design'].map((team, index) => (
                            <motion.div
                                key={team}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`p-4 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50 shadow'}`}
                            >
                                <h3 className="text-xl font-medium mb-2">{team}</h3>
                                <p className="text-sm">
                                    Our {team.toLowerCase()} team brings experience from top companies and institutions around the world.
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
                    <div className="flex justify-center space-x-6">
                        <motion.a 
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            href="#" 
                            className={`${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                            <Twitter size={24} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            href="#" 
                            className={`${darkMode ? 'text-white hover:text-gray-400' : 'text-gray-700 hover:text-gray-900'}`}
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a 
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            href="#" 
                            className={`${darkMode ? 'text-white hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                            <Linkedin size={24} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;