import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        
        // Set initial state
        handleScroll();
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <motion.nav 
                initial={{ 
                    backgroundColor: 'rgb(0 0 0)',
                    padding: '1rem 2rem',
                    margin: '0 auto',
                    width: '100%'
                }}
                animate={{ 
                    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.1)' : 'rgb(0, 0, 0.1)',
                    boxShadow: isScrolled ? '0 8px 16px -2px rgba(0, 0, 0, 0.3)' : 'none',
                    backdropFilter: isScrolled ? 'blur(8px)' : 'none',
                    borderRadius: isScrolled ? '0.75rem' : '0px',
                    padding: isScrolled ? '0.75rem 2rem' : '1rem 2rem',
                    margin: isScrolled ? '1rem auto' : '0 auto',
                    width: isScrolled ? 'calc(100% - 2rem)' : '100%',
                }}
                transition={{ 
                    duration: 0.3, 
                    ease: "easeInOut",
                    backgroundColor: { duration: 0.2 }
                }}
                className={`text-white mx-auto ${isScrolled ? 'max-w-7xl' : 'w-full'}`}
            >
                <div className="flex justify-between items-center w-full">
                    {/* Left side - Feature, Price, Contact */}
                    <div className="flex items-center space-x-6">
                        {['Features', 'Pricing', 'Contact'].map((item) => (
                            <Link 
                                key={item}
                                to={`/${item.toLowerCase()}`} 
                                className="hover:text-blue-400 transition-colors duration-300 relative group"
                            >
                                {item}
                                <motion.span 
                                    className="absolute -bottom-1 left-0 h-0.5 bg-blue-400"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.2 }}
                                />
                            </Link>
                        ))}
                    </div>
                    
                    {/* Center - App Logo */}
                    <div className="flex-1 flex justify-center">
                        <Link to="/">
                            <motion.div
                                className="font-bold text-xl h-8 flex items-center"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <img 
                                    src="/src/assets/logo.png" 
                                    alt="App Logo" 
                                    className="h-full"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.textContent = 'App Logo';
                                    }}
                                />
                            </motion.div>
                        </Link>
                    </div>
                    
                    {/* Right side - Help, About, Get Started */}
                    <div className="flex items-center space-x-6">
                        {['Help', 'About'].map((item) => (
                            <Link 
                                key={item}
                                to={`/${item.toLowerCase()}`} 
                                className="hover:text-blue-400 transition-colors duration-300 relative group"
                            >
                                {item}
                                <motion.span 
                                    className="absolute -bottom-1 left-0 h-0.5 bg-blue-400"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.2 }}
                                />
                            </Link>
                        ))}
                        <motion.div
                            whileHover={{ 
                                y: -2, 
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                                transition: { duration: 0.2 }
                            }}
                        >
                            <Link 
                                to="/get-started" 
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-200 block"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
};

export default Navbar;