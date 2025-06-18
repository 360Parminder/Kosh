import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import FeaturesSection from '../components/section/FeaturesSection';
import FaqSection from '../components/section/FaqSection';
import { Link } from 'react-router-dom';
import HeroSection from '../components/section/HeroSection';

const Home = () => {
    return (
        <>

           <HeroSection />
            <FeaturesSection />
            <FaqSection />
        </>
    );
};

export default Home;
