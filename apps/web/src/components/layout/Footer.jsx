import { useState, useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Twitter, Github, Linkedin, Mail,X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className={`py-8 px-4 md:px-8 mt-12 dark:bg-black dark:text-white bg-gray-200 text-gray-800`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <motion.h3 
                            className="text-xl font-bold"
                            whileHover={{ scale: 1.05 }}
                        >
                            Kosh
                        </motion.h3>
                        <p className="text-sm">
                            Building the future of finance with innovative solutions.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <motion.h3 
                            className="text-xl font-bold"
                            whileHover={{ scale: 1.05 }}
                        >
                            Quick Links
                        </motion.h3>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Services', 'Blog', 'Contact'].map((link) => (
                                <motion.li 
                                    key={link} 
                                    whileHover={{ x: 5 }}
                                    className="text-sm"
                                >
                                    {/* <a href={`#${link.toLowerCase()}`}>{link}</a> */}
                                    <Link to={`${link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}`} className="hover:text-blue-500 transition-colors">
                                        {link}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <motion.h3 
                            className="text-xl font-bold"
                            whileHover={{ scale: 1.05 }}
                        >
                            Connect With Us
                        </motion.h3>
                        <div className="flex space-x-4">
                            {[
                                { Icon: Twitter, href: "https://x.com/360parminder",color: "#1DA1F2" },
                                { Icon: Github, href: "https://github.com/360parminder", color: "#333" },
                                { Icon: Linkedin, href: "https://linkedin.com/in/360parminder", color: "#0077B5" },
                                { Icon: Mail, href: "mailto:360.parminder@gmail.com", color: "#EA4335" }
                            ].map(({ Icon, href, color }, index) => (
                                <motion.a 
                                    key={index}
                                    href={href}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white dark:text-gray-600 dark:hover:text-gray-900 text-xl"
                                >
                                    <Icon size={20} color={color} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    className="mt-8 pt-6 border-t dark:border-gray-800 border-gray-200 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <p className="text-sm">© {new Date().getFullYear()} Kosh. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <ul className="flex space-x-4 text-xs">
                            <li><a href="#" className="">Privacy Policy</a></li>
                            <li><a href="#" className="">Terms of Service</a></li>
                            <li><a href="#" className="">Cookie Policy</a></li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;