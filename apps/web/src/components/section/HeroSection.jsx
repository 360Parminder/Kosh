import { Link }  from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Spotify from '/src/assets/Spotify.png';
import Netflix from '/src/assets/Netflix.png';
import Drive from '/src/assets/Drive.png';
import Mastercard from '/src/assets/Mastercard.png';

const HeroSection = () => {
  return (
    <div className="min-h-screen max-w-screen  dark:text-white  text-black overflow-hidden flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex  flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold z-10 tracking-wide leading-tight"
        >
          Take Control of Your Subscriptions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl mt-4 z-10 max-w-sm sm:max-w-md md:max-w-xl px-2"
        >
          Manage bills, get smart reminders, and track spending effortlessly with Kosh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-6 sm:mt-8 z-10"
        >
          <Link to="/signup" className="flex items-center w-full sm:w-auto">
            <button className="bg-indigo-600 hover:bg-indigo-500 transition-colors px-6 py-3 rounded-lg text-white/80 font-semibold w-full sm:w-auto">
              Get Started Free
              <ArrowRight size={16} className="inline-block ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-1 sm:gap-2 pt-2.5 px-2 sm:px-4 pb-12 sm:pb-16 md:pb-24 -mt-10 sm:-mt-16 md:-mt-20 perspective-[1000px] mask-l-from-80% mask-r-from-80% ">
        {/* Hidden cards on mobile, visible on larger screens */}
        <div
          className="hidden lg:block w-48 xl:w-72 h-48 xl:h-56 rounded-xl border dark:border-white/20 border-black/20 backdrop-blur-md flex-shrink-0"
          style={{ transform: 'rotateY(-20deg)', transformStyle: 'preserve-3d' }}
        />

        {/* Bill Management Card */}
        <div
          className="w-56 sm:w-64 md:w-72 h-48 sm:h-56 p-3 sm:p-4 rounded-xl border dark:border-white/20 border-black/20 backdrop-blur-md text-center justify-between flex flex-col flex-shrink-0"
          style={{ transform: 'rotateY(-10deg)', transformStyle: 'preserve-3d' }}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-2">Bill Management</h3>
          <p className="text-sm sm:text-base dark:text-white/50 text-black/60">Easy manage, pay and reconcile bills.</p>
          <div className='mt-3 sm:mt-4 flex justify-center items-center gap-2 text-xs sm:text-[13px]'>
            <span className='p-1 sm:p-1.5 rounded-2xl border dark:border-white/50 border-black/50'>Show as List</span>
            <span className='flex items-center p-1 sm:p-1.5 rounded-2xl border dark:border-white/50 border-black/50'>
              <ArrowDown size={12} className="inline-block" />
              <p className="ml-1">Download .CSV</p>
            </span>
          </div>
        </div>

        {/* Main Upcoming Bills Card */}
        <div
          className="w-64 sm:w-72 md:w-80 h-auto p-4 sm:p-6 rounded-xl border dark:border-white/20 border-black/20 backdrop-blur-md shadow-xl z-10 text-center flex-shrink-0"
          style={{ transform: 'rotateY(0deg)', transformStyle: 'preserve-3d' }}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-1">Upcoming Bills</h3>
          <p className="text-xs sm:text-sm mb-3 sm:mb-4">
            Stay on top of your finances with smart reminders for upcoming bills.
          </p>
          
          {/* Bill Items */}
          <div className="space-y-2">
            <div className="p-2 sm:p-3 rounded-md text-xs sm:text-sm border dark:border-white/20 border-black/20 bg-white/10 flex items-center justify-between gap-1 sm:gap-2">
              <img className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' src={Drive} alt="Google Drive" />
              <span className="text-xs sm:text-sm min-w-0 flex-1 text-left">Drive</span>
              <p className="text-black/50 dark:text-white/50 text-xs sm:text-sm">$19</p>
              <p className="text-black/50 dark:text-white/50 text-xs sm:text-sm whitespace-nowrap">15th Jun</p>
            </div>
            <div className="p-2 sm:p-3 rounded-md text-xs sm:text-sm border dark:border-white/20 border-black/20 bg-white/10 flex items-center justify-between gap-1 sm:gap-2">
              <img className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' src={Netflix} alt="Netflix" />
              <span className="text-xs sm:text-sm min-w-0 flex-1 text-left">Netflix</span>
              <p className="text-black/50 dark:text-white/50 text-xs sm:text-sm">$7.99</p>
              <p className="text-black/50 dark:text-white/50 text-xs sm:text-sm whitespace-nowrap">19th Jun</p>
            </div>
            <div className="p-2 sm:p-3 rounded-md text-xs sm:text-sm border dark:border-white/20 border-black/20 bg-white/10 flex items-center justify-between gap-1 sm:gap-2">
              <img className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0' src={Spotify} alt="Spotify" />
              <span className="text-xs sm:text-sm min-w-0 flex-1 text-left">Spotify</span>
              <p className="text-black/50 dark:text-white/50 text-xs sm:text-sm">$11.99</p>
              <p className="text-black/50 dark:text-white/50 text-xs sm:text-sm whitespace-nowrap">30th Jun</p>
            </div>
          </div>
        </div>

        {/* Credit Card */}
        <div
          className="w-56 sm:w-64 md:w-72 h-48 sm:h-56 p-3 sm:p-4 rounded-xl border dark:border-white/20 border-black/20 backdrop-blur-md text-center justify-between flex flex-col flex-shrink-0"
          style={{ transform: 'rotateY(10deg)', transformStyle: 'preserve-3d' }}
        >
          <div className='flex items-center justify-between gap-2 mb-2'>
            <img className='w-6 h-6 sm:w-8 sm:h-8' src={Mastercard} alt="MasterCard" />
            <span className='p-1 px-1.5 rounded-2xl text-xs sm:text-sm border dark:border-white/50 border-black/50'>Show Balance</span>
          </div>
          <div className='flex flex-col text-left'>
            <p className='text-xs sm:text-sm dark:text-white/50 text-black/50'>My Credit Card</p>
            <p className='text-xs sm:text-sm'>6348 **** **** 1234</p>
          </div>
        </div>

        {/* Hidden cards on mobile, visible on larger screens */}
        <div
          className="hidden lg:block w-48 xl:w-72 h-48 xl:h-56 rounded-xl border dark:border-white/20 border-black/20 backdrop-blur-md flex-shrink-0"
          style={{ transform: 'rotateY(20deg)', transformStyle: 'preserve-3d' }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
