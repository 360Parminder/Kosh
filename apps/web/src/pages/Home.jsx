import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import FeaturesSection from '../components/section/FeaturesSection';
import FaqSection from '../components/section/FaqSection';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>

            <div className="min-h-screen bg-black text-white overflow-hidden flex flex-col">
                {/* Hero Section */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-6xl font-bold z-10 tracking-wide"
                    >
                        Take Control of Your Subscriptions
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-lg md:text-xl text-white/80 mt-4 z-10 max-w-xl"
                    >
                        Manage bills, get smart reminders, and track spending effortlessly with Kosh.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex items-center gap-4 mt-8 z-10"
                    >
                        <Link to="/signup" className="flex items-center">
                            <button className="bg-indigo-600 hover:bg-indigo-500 transition-colors px-6 py-3 rounded-lg text-white font-semibold">
                                Get Started Free
                                <ArrowRight size={16} className="inline-block ml-2" />
                            </button>
                        </Link>
                        {/* <p className="text-white/70 text-sm">Trusted by many users</p> */}
                    </motion.div>
                </div>

                {/* Cards Section */}
                <div className="flex justify-center gap-2 px-2 pb-24 -mt-20 perspective-[1000px]">
                    <div
                        className="w-72 h-56  rounded-xl border border-white/20 backdrop-blur-md"
                        style={{ transform: 'rotateY(-20deg)', transformStyle: 'preserve-3d' }}
                    />

                    <div
                        className="w-72 h-56 p-4 rounded-xl border border-white/20 backdrop-blur-md text-center"
                        style={{ transform: 'rotateY(-10deg)', transformStyle: 'preserve-3d' }}
                    >
                        <h3 className="text-lg font-semibold mb-2 text-white">Bill Management</h3>
                        <p className=" text-white/50">Easy manage, pay and reconcile bills.</p>
                        <div className='mt-4 flex justify-center items-center gap-2 text-[13px]'>
                            <span className='p-1.5 rounded-2xl border border-white/50'>Show as List</span>
                            <span className=' flex items-center p-1.5 rounded-2xl border border-white/50'>
                                <ArrowDown size={12} className="inline-block " />
                                <p>Download .CSV</p>
                            </span>
                        </div>
                    </div>

                    <div
                        className="w-72 h-74 p-6 rounded-xl border border-white/20 backdrop-blur-md shadow-xl z-10 text-center"
                        style={{ transform: 'rotateY(0deg)', transformStyle: 'preserve-3d' }}
                    >
                        <h3 className="text-lg font-semibold text-white mb-1">Upcoming Bills</h3>
                        <p className="text-white/80 text-sm">
                            Stay on top of your finances with smart reminders for upcoming bills.
                        </p>
                        <div className="mt-4 p-3 rounded-md text-sm border border-white/20 bg-white/10 flex items-center justify-between gap-2">
                            <img className='w-6 h-6' src="/src/assets/Drive.png" alt="Google Drive" />
                            <span className="text-sm">Drive</span>
                            <p className="text-white/50 text-sm">$19</p>
                            <p className="text-white/50 text-sm">15th June</p>
                        </div>
                        <div className="mt-2 p-3 rounded-md text-sm border border-white/20 bg-white/10 flex items-center justify-between gap-2">
                            <img className='w-6 h-6' src="/src/assets/Netflix.png" alt="Netflix" />
                            <span className="text-sm">Netflix</span>
                            <p className="text-white/50 text-sm">$7.99</p>
                            <p className="text-white/50 text-sm">19th June</p>
                        </div>
                        <div className="mt-2 p-3 rounded-md text-sm border border-white/20 bg-white/10 flex items-center justify-between gap-2">
                            <img className='w-6 h-6' src="/src/assets/Spotify.png" alt="Spotify" />
                            <span className="text-sm">Spotify</span>
                            <p className="text-white/50 text-sm">$11.99</p>
                            <p className="text-white/50 text-sm">30th June</p>
                        </div>
                    </div>

                    <div
                        className="w-72 h-56  p-4 rounded-xl border border-white/20 backdrop-blur-md text-center justify-between flex flex-col"
                        style={{ transform: 'rotateY(10deg)', transformStyle: 'preserve-3d' }}
                    >
                        <div className='flex items-center justify-between gap-2 mb-2'>
                            <img className='w-8 h-8' src="/src/assets/Mastercard.png" alt="MasterCard" />
                            <span className='p-1 px-1.5 rounded-2xl text-sm border border-white/60'>Show Balance</span>
                        </div>
                        <div className='flex flex-col text-left'>
                            <p className='text-sm text-white/50'>My Credit Card</p>
                            <p className='text-sm'>6348 **** **** 1234</p>
                        </div>
                    </div>

                    <div
                        className="w-72 h-56  rounded-xl border border-white/20 backdrop-blur-md"
                        style={{ transform: 'rotateY(20deg)', transformStyle: 'preserve-3d' }}
                    />
                </div>
                {/* Features Section */}
            </div>
            <FeaturesSection />
            <FaqSection />
        </>
    );
};

export default Home;
