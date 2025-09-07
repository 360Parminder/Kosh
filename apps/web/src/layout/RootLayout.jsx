import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { motion } from "framer-motion";


const RootLayout = () => {
    return (
        <div className=" dark:bg-neutral-900 bg-neutral-200 min-h-screen dark:text-white/90 text-black/90  ">
            <Navbar />
            <main className="flex-1 mt-[6rem]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
