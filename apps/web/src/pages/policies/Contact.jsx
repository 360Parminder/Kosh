import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 ">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-4 text-center"
            >
                Get in Touch with Us
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-black/70 dark:text-white/70 text-center max-w-xl mb-12"
            >
                Have questions, suggestions, or feedback? Fill out the form below and we’ll get back to you shortly.
            </motion.p>

            <motion.form
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-xl space-y-6 border border-black/20 dark:border-white/20 rounded-xl backdrop-blur-md p-8 shadow-lg"
            >
                <div>
                    <label className="block mb-1  text-sm">Your Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-transparent border border-black/20 dark:border-white/20 rounded-md p-3 text-black placeholder-black/40 dark:text-white dark:placeholder-white/40 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block mb-1  text-sm">Email Address</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-transparent border border-black/20 dark:border-white/20 rounded-md p-3 text-black placeholder-black/40 dark:text-white dark:placeholder-white/40 focus:outline-none"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-black/70 dark:text-white/70 text-sm">Message</label>
                    <textarea
                        rows={5}
                        placeholder="Write your message..."
                        className="w-full bg-transparent border border-black/20 dark:border-white/20 rounded-md p-3 text-black placeholder-black/40 dark:text-white dark:placeholder-white/40 focus:outline-none resize-none"
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 px-6 py-3 border  rounded-lg text-white font-medium  transition-colors"
                    >
                        Send Message
                    </button>
                </div>
            </motion.form>
        </div>
    );
};

export default Contact;
