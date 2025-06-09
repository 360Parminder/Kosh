import { useState } from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
            setError('Please enter a valid email');
            return;
        }
        const response = await axios.post('/notifications/subscribe', { email });

        setIsSubmitted(true);
        setError('');
        setEmail('');

        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="bg-black text-white overflow-hidden">
            {/* Hero Section with Coming Soon */}
            <div className="relative w-full h-screen flex items-center justify-center">
                {/* Animated blackhole-like glow */}

                {/* Text content */}
                <motion.div
                    className="absolute bottom-2/9 z-10 text-center"
                >
                    <motion.h1
                        initial={{ opacity: 0, z: -50 }}
                        animate={{ opacity: 1, z: 0, }}
                        transition={{ duration: 3, ease: "easeIn", delay: 0.3 }}
                        className="text-white text-4xl md:text-6xl font-medium tracking-[1.3em] mb-4">
                        COMING SOON
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        className="text-indigo-400 tracking-[0.8em] text-lg md:text-xl font-light">
                        KOSH
                    </motion.p>
                </motion.div>

                {/* Animated Half Circle */}
                <motion.div
                    className="absolute w-[50vw] h-[50vh] bottom-1/4 rounded-t-full shadow-[0_-40px_100px_40px_rgba(79,70,229,0.4)] border-t-2 border-indigo-900"
                    initial={{ scale: 0, y: '50%' }}
                    animate={{ scale: 1, y: '0%' }}
                    transition={{ duration: 3, ease: "easeOut", delay: 0.3 }}
                />
                <div className="absolute bottom-0 w-[55vw] h-[77vh] backdrop-blur-2xl rounded-t-full z-0" />

            </div>

            {/* Info Section */}
            <div className="relative bg-indigo-800 px-4 py-16 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold mb-8 text-white"
                    >
                        Subscription Management Simplified
                    </motion.h1>

                    {/* Features Grid */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="grid md:grid-cols-3 gap-6 mb-12"
                    >
                        <div className="bg-indigo-900/30 p-5 rounded-xl border border-indigo-700/50 backdrop-blur-sm">
                            <div className="text-indigo-300 text-xl mb-2">✦</div>
                            <h3 className="font-bold text-xl mb-2">Track All Subscriptions</h3>
                            <p className="text-white/70">Never miss a payment again with our intuitive dashboard that organizes all your subscriptions in one place.</p>
                        </div>

                        <div className="bg-indigo-900/30 p-5 rounded-xl border border-indigo-700/50 backdrop-blur-sm">
                            <div className="text-indigo-300 text-xl mb-2">✦</div>
                            <h3 className="font-bold text-xl mb-2">Smart Reminders</h3>
                            <p className="text-white/70">Get timely notifications before payments are due and never be surprised by unexpected charges.</p>
                        </div>

                        <div className="bg-indigo-900/30 p-5 rounded-xl border border-indigo-700/50 backdrop-blur-sm">
                            <div className="text-indigo-300 text-xl mb-2">✦</div>
                            <h3 className="font-bold text-xl mb-2">Spending Analytics</h3>
                            <p className="text-white/70">Visualize your subscription spending habits with beautiful charts and actionable insights.</p>
                        </div>

                        <div className="bg-indigo-900/30 p-5 rounded-xl border border-indigo-700/50 backdrop-blur-sm">
                            <div className="text-indigo-300 text-xl mb-2">✦</div>
                            <h3 className="font-bold text-xl mb-2">Cancel With Ease</h3>
                            <p className="text-white/70">Identify and cancel unused subscriptions with just a few clicks, saving you money instantly.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 p-6 rounded-xl mb-12 text-center border border-white/20"
                    >
                        <h3 className="font-bold text-xl mb-2">Save Up To 30% On Your Monthly Bills</h3>
                        <p className="text-white/80">Most people pay for subscriptions they don't use. Kosh helps you optimize your spending.</p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-indigo-900/20 p-6 rounded-xl mb-8 backdrop-blur-sm border border-white/30"
                        onSubmit={handleSubmit}
                    >
                        <h2 className="text-xl font-bold mb-4">Get notified when we launch</h2>
                        <div className="flex flex-col md:flex-row gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                className={`flex-grow p-3 rounded-lg bg-gray-900/80 text-white ${error ? 'border-red-500' : 'border-indigo-700'}`}
                            />
                            <button
                                type="submit"
                                className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                            >
                                Notify Me
                            </button>
                        </div>
                        {error && <p className="text-red-400 mt-2">{error}</p>}
                        {isSubmitted && <p className="text-green-400 mt-2">Thank you! We'll be in touch.</p>}
                    </motion.form>

                    <footer className="text-center text-white/70 text-sm">
                        © {new Date().getFullYear()} Kosh. All rights reserved.
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
