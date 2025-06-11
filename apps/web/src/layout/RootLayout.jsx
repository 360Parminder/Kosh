import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";


const RootLayout = () => {
    return (
        <div className=" dark:bg-black bg-gray-100 min-h-screen flex flex-col ">
            <Navbar />
            {/* Background glow */}
            {/* <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 3 }}
                className="absolute w-[60vw] h-[60vw] bottom-0 bg-indigo-700/20 rounded-full blur-[120px] z-0"
            /> */}
            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default RootLayout;
